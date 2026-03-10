---
slug: hello-prowlrbot
title: Introducing ProwlrBot — Always Watching, Always Ready
authors:
  - name: mcpcentral
    url: https://github.com/mcpcentral
tags: [launch, announcement]
---

We're excited to open-source **ProwlrBot** — an autonomous AI agent platform for monitoring, automation, and multi-channel communication.

<!-- truncate -->

## What is ProwlrBot?

ProwlrBot turns any LLM into an autonomous agent with real tools, persistent memory, and the ability to communicate across Discord, Telegram, DingTalk, Feishu, QQ, iMessage, and a built-in web console.

## Key Features

- **Multi-Provider AI** — OpenAI, Anthropic, Groq, Ollama, and more with smart routing
- **Real-time Dashboard** — WebSocket-powered command center
- **Skills System** — PDF, Office docs, email, news, browser automation
- **MCP Support** — Full Model Context Protocol client with hot-reload
- **Security First** — Auth, rate limiting, sandboxing, prompt injection detection
- **Monitoring Engine** — Web change detection with diffing and alerts

## Get Started

```bash
pip install prowlrbot
prowlr init --defaults
prowlr env set OPENAI_API_KEY sk-your-key
prowlr app
```

Open [http://localhost:8088](http://localhost:8088) and you're live.

## What's Coming

- **ROAR Protocol** — Unified agent communication (MCP + A2A + ACP)
- **Marketplace** — Community skills, agents, and workflows with revenue sharing
- **AgentVerse** — Interactive virtual world where agents live and collaborate
- **Agent Swarms** — Multi-device coordination with Docker

Star us on [GitHub](https://github.com/mcpcentral/prowlrbot) and follow along!
