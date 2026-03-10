---
sidebar_position: 1
title: Getting Started
description: Install ProwlrBot and deploy your first autonomous AI agent in under 2 minutes.
---

# Getting Started

Get ProwlrBot running in under 2 minutes.

## Prerequisites

- Python 3.10 or later
- An API key from any supported provider (OpenAI, Anthropic, Groq, etc.) — or use a local model

## Install

```bash
pip install prowlrbot
```

### Optional extras

```bash
pip install 'prowlrbot[ollama]'    # Ollama support
pip install 'prowlrbot[llamacpp]'  # llama.cpp (local models)
pip install 'prowlrbot[mlx]'      # Apple Silicon MLX
pip install 'prowlrbot[dev]'      # Development tools
```

## Initialize

```bash
prowlr init --defaults
```

This creates `~/.prowlrbot/config.json` with sensible defaults.

## Set your API key

```bash
prowlr env set OPENAI_API_KEY sk-your-key-here
```

Or use any other supported provider:

```bash
prowlr env set ANTHROPIC_API_KEY sk-ant-your-key-here
prowlr env set GROQ_API_KEY gsk_your-key-here
```

:::tip No API key needed for local models
If you're using Ollama, llama.cpp, or MLX, you don't need any API key.
:::

## Start the server

```bash
prowlr app
```

Open [http://localhost:8088](http://localhost:8088) to see the Dashboard.

## What's next?

- [Configuration](/docs/configuration) — Customize your agent's behavior
- [Channels](/docs/channels) — Connect Discord, Telegram, and more
- [Skills](/docs/skills) — Add capabilities like PDF processing, email, and web search
- [Dashboard](/docs/dashboard) — Understanding the real-time command center
- [Security](/docs/security) — API authentication and security features
