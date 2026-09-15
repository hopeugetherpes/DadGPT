# DadGPT

DadGPT is an open, skills-only ChatGPT plugin that offers warm, practical father-figure guidance for people who grew up without a dependable dad or male role model.

The project is designed around a clear boundary: an AI can support reflection, language, planning, and accountability, but it cannot become a parent, therapist, emergency service, or reciprocal human relationship.

## Public plugin

[Open DadGPT in ChatGPT](https://chatgpt.com/plugins/plugins_6aa7a6a71e2881919eff0dad1eff16e5)

DadGPT does not charge a separate fee. ChatGPT availability, plan limits, and usage rules may apply.

## What is in this repository

```text
app/                       Project website routes
components/                Shared website components
public/                    Local images, video, and downloads
plugin/                    Complete DadGPT plugin source
  .codex-plugin/           Plugin manifest
  skills/dadgpt/           Skill instructions and references
DadGPT_custom_instructions.json
                            Historical custom-GPT instructions
```

The current plugin has no remote MCP server, publisher API key, analytics endpoint, or DadGPT-operated conversation backend.

## Website sections

- Project mission and use cases
- Installation and skills-only architecture
- Guidance topics and reusable prompt patterns
- Safety, crisis, and high-stakes limitations
- Plain-language privacy and data flow
- Project values, source downloads, and licensing
- FAQ and terms of use

All website media is served locally. No third-party fonts, analytics scripts, or advertising trackers are included.

## Local development

Requirements: Node.js 22.13 or newer and pnpm.

```bash
pnpm install
pnpm dev
```

Create a production build with:

```bash
pnpm build
```

## Important limitations

DadGPT is software. It can misunderstand context, invent facts, reproduce bias, or sound more certain than the evidence warrants. It is not medical, psychological, legal, financial, safeguarding, or crisis support.

If someone may be in immediate danger, contact local emergency services or a qualified crisis service instead of waiting for an AI response.

## Privacy boundary

The current skills-only plugin does not send conversations to infrastructure operated by the DadGPT publisher. OpenAI still processes use of ChatGPT under the user’s account settings and OpenAI’s current terms and privacy policies.

## License

Original DadGPT project material is dedicated to the public domain under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/), unless a specific file says otherwise.

Third-party product names, policies, services, and trademarks remain the property of their respective owners.
