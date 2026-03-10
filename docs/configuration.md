---
sidebar_position: 2
title: Configuration
description: Configure ProwlrBot providers, models, and agent behavior.
---

# Configuration

ProwlrBot stores its configuration at `~/.prowlrbot/config.json`. This file is created automatically when you run `prowlr init`.

## Config File

```json
{
  "model_config_name": "default",
  "api_key": "",
  "base_url": "https://api.openai.com/v1",
  "model_type": "openai_chat",
  "model_name": "gpt-4o",
  "channels": [],
  "skills": { "enabled": [] },
  "mcp": { "servers": {} }
}
```

## Providers

ProwlrBot auto-detects available providers from environment variables. Set your preferred provider's key:

```bash
prowlr env set OPENAI_API_KEY sk-your-key-here
prowlr env set ANTHROPIC_API_KEY sk-ant-your-key-here
prowlr env set GROQ_API_KEY gsk_your-key-here
```

### Smart Routing

When multiple providers are configured, the smart router scores them based on:
- **Cost** — cheaper providers score higher
- **Performance** — faster providers score higher
- **Availability** — healthy providers score higher

The formula: `score = w_cost * cost + w_perf * perf + w_avail * avail`

### Fallback Chain

If the primary provider fails, ProwlrBot automatically falls back through configured alternatives.

## Environment Variables

Secrets are stored encrypted at `~/.prowlrbot.secret/envs.json` (mode 0600).

```bash
prowlr env set KEY value    # Set a variable
prowlr env list             # List all (masked)
prowlr env delete KEY       # Remove a variable
```

## Working Directory

The default working directory is `~/.prowlrbot/`. It contains:

| Path | Purpose |
|------|---------|
| `config.json` | Main configuration |
| `chats/` | Chat session history |
| `agents/` | Per-agent configurations |
| `active_skills/` | Enabled skill files |
| `custom_channels/` | Custom channel implementations |

## MCP Servers

Add MCP servers to your config:

```json
{
  "mcp": {
    "servers": {
      "filesystem": {
        "command": "npx",
        "args": ["-y", "@modelcontextprotocol/server-filesystem", "/home/user"]
      },
      "github": {
        "command": "npx",
        "args": ["-y", "@modelcontextprotocol/server-github"],
        "env": { "GITHUB_TOKEN": "ghp_your_token" }
      }
    }
  }
}
```

MCP servers hot-reload — changes are detected and applied without restarting.
