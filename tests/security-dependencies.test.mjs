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
