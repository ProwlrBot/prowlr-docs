---
sidebar_position: 4
title: Skills
description: Extend ProwlrBot with built-in and custom skills.
---

# Skills

Skills are extensible capability packs that give your agent new abilities.

## Built-in Skills

| Skill | Description |
|-------|-------------|
| **pdf** | Read, create, and fill PDF forms |
| **docx** | Read, create, and edit Word documents |
| **pptx** | Read, create, and edit PowerPoint presentations |
| **xlsx** | Read, create, and edit Excel spreadsheets |
| **cron** | Schedule tasks with cron expressions |
| **news** | Fetch and summarize news articles |
| **file_reader** | Read and process various file formats |
| **browser_visible** | Browser automation with visual feedback |
| **himalaya** | Email management via Himalaya |

## Managing Skills

```bash
prowlr skills list           # List all available skills
prowlr skills enable pdf     # Enable a skill
prowlr skills disable pdf    # Disable a skill
```

Or manage through the web console at **Agent > Skills**.

## Creating Custom Skills

A skill is a directory with a `SKILL.md` manifest:

```
my_skill/
├── SKILL.md          # Required: manifest with metadata
├── references/       # Optional: reference docs for the agent
│   └── api.md
└── scripts/          # Optional: Python scripts
    └── process.py
```

### SKILL.md Format

```markdown
---
name: my_skill
description: A brief description of what this skill does
---

# My Skill

Detailed instructions for the agent on how to use this skill.

## Tools Available

- `scripts/process.py` — Description of what this script does

## Usage Examples

When the user asks to [do something], use this skill to [accomplish it].
```

### Skill Discovery

Skills are loaded from:
1. Built-in skills (`src/prowlrbot/agents/skills/`)
2. Active skills (`~/.prowlrbot/active_skills/`)
3. Custom workspace skills

The agent reads the SKILL.md to understand when and how to use each skill.
