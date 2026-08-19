# TOOLS.md

## Required Settings

- `XQUIK_API_KEY`: stored in the user's local environment or secret store
- Xquik dashboard access when the user needs account, plan, key, or approval
  changes

## Preferred Access Order

1. Installed Xquik skill for task routing and safety rules
2. Xquik MCP server when the agent environment supports MCP
3. REST API when the task needs a direct endpoint workflow
4. User-provided export files when API access is unavailable

## Secret Handling

- Never print API keys.
- Never write keys into blueprints, prompts, logs, or exports.
- Redact tokens, cookies, email addresses, and private identifiers from examples.
- If a credential appears in chat or a public file, treat it as compromised and
  ask the owner to rotate it.

## Tool Boundaries

- Reads are preferred over writes.
- Private reads require explicit approval.
- Publishing and account actions require explicit approval for target, payload,
  and expected effect.
- Monitors, webhooks, and bulk exports require approval for destination and
  ongoing usage.
- Local files containing raw exports should stay outside shared repositories
  unless the user asks for a sanitized fixture.
