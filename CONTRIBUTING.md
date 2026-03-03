# Contributing an Agent Blueprint

## What to Submit

A complete Agent Runtime Blueprint — not a single prompt, but a full operational system.

## Recognized File Types

| File | Purpose |
|------|---------|
| IDENTITY.md | Agent name, persona, style |
| SOUL.md | Core principles and behavioral boundaries |
| USER.md | User preferences and conventions |
| MEMORY.md | Long-term memory structure |
| TOOLS.md | Tool and environment configuration |
| AGENTS.md | Workspace governance rules |
| HEARTBEAT.md | Periodic check tasks |
| BOOTSTRAP.md | First-run initialization guide |
| PRODUCT.md | Product context |
| PLAN.md | Planning structure |
| TASK.md | Task tracking approach |
| CHANGE.md | Change log structure |

## Requirements

**Must include:**
- `README.md` — philosophy, design notes, author credit, license
- At least 2 recognized file types listed above

**Author credit in README.md:**
- Your handle / name
- License (MIT recommended)

**Do not include:**
- Leaked commercial system prompts
- Generic resource lists or single-prompt examples
- Personal secrets or credentials

## Steps

1. **Fork** this repository
2. **Create** `submissions/YOUR_HANDLE/`
3. **Add** your files (`README.md` required)
4. **Update** `registry.json` — add your entry following the existing schema:
   - Set `voting.github_issue_number` to `null`
   - Fill in `files` booleans accurately
5. **Open a Pull Request**

The maintainer will create a voting Issue after merging and update `registry.json` with the issue number.

## File Naming

Use exact filenames as listed above (uppercase, `.md` extension).
Your submission directory name should match your `id` field in `registry.json`.
