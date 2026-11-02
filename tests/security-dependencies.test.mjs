import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";
import path from "node:path";
import { after, test } from "node:test";
import { ESLint } from "eslint";
import nextVitals from "eslint-config-next/core-web-vitals";

// Exercise Next's actual glob consumer so a future update cannot silently
// break the scoped fast-glob -> tinyglobby security override.
const require = createRequire(import.meta.url);
const configRequire = createRequire(require.resolve("eslint-config-next"));
const pluginRequire = createRequire(configRequire.resolve("@next/eslint-plugin-next"));
const { getRootDirs } = pluginRequire("./utils/get-root-dirs.js");
const fixture = mkdtempSync(path.join(tmpdir(), "dadgpt-eslint-"));
const apps = path.join(fixture, "apps");
const web = path.join(apps, "web");
const admin = path.join(apps, "admin");
for (const root of [web, admin]) {
  mkdirSync(path.join(root, "app", "about"), { recursive: true });
  writeFileSync(path.join(root, "app", "about", "page.tsx"), "export default function Page() { return null; }\n");
  mkdirSync(path.join(root, "pages"), { recursive: true });
  writeFileSync(path.join(root, "pages", "about.tsx"), "export default function Page() { return null; }\n");
}
writeFileSync(path.join(apps, "not-a-directory"), "");
after(() => rmSync(fixture, { recursive: true, force: true }));

test("Next resolves literal, wildcard, brace and array root directories", () => {
  const relativeWeb = path.relative(process.cwd(), web);
  for (const rootDir of [web, relativeWeb, path.join(apps, "*"), path.join(apps, "{web,admin}"), [web, admin]]) {
    const result = getRootDirs({ cwd: process.cwd(), settings: { next: { rootDir } } });
    const expected = rootDir === web ? [web] : rootDir === relativeWeb ? [relativeWeb] : [web, admin];
    assert.deepEqual(result.slice().sort(), expected.slice().sort());
  }
});

test("Next still detects Pages router HTML links with a globbed rootDir", async () => {
  const eslint = new ESLint({
    overrideConfigFile: true,
    overrideConfig: [
      ...nextVitals,
      { settings: { next: { rootDir: path.join(apps, "*") } } },
    ],
  });
  const [result] = await eslint.lintText(
    'export default function Page() { return <a href="/about">About</a>; }',
    { filePath: "app/security-check.tsx" },
  );
  assert.ok(
    result.messages.some((message) => message.ruleId === "@next/next/no-html-link-for-pages"),
    JSON.stringify(result.messages),
  );
});

test("ESLint still applies ignore globs and lints included files", async () => {
  const eslint = new ESLint({
    overrideConfigFile: true,
    overrideConfig: [
      { ignores: ["**/generated/**"] },
      { files: ["**/*.js"], rules: { "no-alert": "error" } },
    ],
  });
  assert.equal(await eslint.isPathIgnored("app/generated/skip.js"), true);
  assert.equal(await eslint.isPathIgnored("app/keep.js"), false);
  const [result] = await eslint.lintText("alert('check');", { filePath: "app/keep.js" });
  assert.ok(result.messages.some((message) => message.ruleId === "no-alert"));
});

test("React lint rules retain callable minimatch glob exceptions", async () => {
  const react = configRequire("eslint-plugin-react");
  const eslint = new ESLint({
    overrideConfigFile: true,
    overrideConfig: [{
      files: ["**/*.jsx"],
      languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } },
      plugins: { react },
      rules: { "react/jsx-pascal-case": ["error", { ignore: ["ALLOW_*"] }] },
    }],
  });
  const [result] = await eslint.lintText(
    "const Page = () => <><ALLOW_THIS /><BLOCK_THIS /></>;",
    { filePath: "app/security-check.jsx" },
  );
  assert.equal(result.messages.length, 1, JSON.stringify(result.messages));
  assert.equal(result.messages[0].ruleId, "react/jsx-pascal-case");
  assert.match(result.messages[0].message, /BLOCK_THIS/);
});

test("React Hooks' Zod and validation-error dependencies remain compatible", () => {
  const hooksRequire = createRequire(configRequire.resolve("eslint-plugin-react-hooks"));
  const { z } = hooksRequire("zod/v4");
  const { fromZodError } = hooksRequire("zod-validation-error/v4");
  const schema = z.object({ count: z.number().int().positive() });
  assert.deepEqual(schema.parse({ count: 1 }), { count: 1 });
  const result = schema.safeParse({ count: -1 });
  assert.equal(result.success, false);
  assert.match(fromZodError(result.error).message, /count/);
});
