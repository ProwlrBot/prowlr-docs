---
sidebar_position: 5
title: Dashboard
description: Real-time command center for monitoring your agents.
---

# Dashboard

The Dashboard is your real-time command center for monitoring agent activity, system health, and managing your ProwlrBot instance.

## Overview

Access the dashboard at [http://localhost:8088](http://localhost:8088) after starting `prowlr app`.

### Stats Row

At the top, you'll see key metrics:
- **Active Agents** — Number of configured agents
- **Channels** — Connected communication channels
- **Skills** — Enabled skill packs
- **Version** — Current ProwlrBot version

### Agent Cards

Each configured agent shows:
- Avatar and name
- Online/idle/offline status
- Active model
- Enabled skills (as tags)

Click an agent card to open a chat session.

### Activity Feed

Real-time WebSocket-powered feed showing:
- Tool calls (shell, file I/O, browser)
- Agent reasoning steps
- Task updates
- Monitor alerts
- MCP requests
- Errors

The green dot indicates a live WebSocket connection.

## WebSocket API

Connect to the real-time event stream:

```
ws://localhost:8088/ws/dashboard?session_id=your-session-id
```

Events are JSON with this structure:

```json
{
  "type": "tool_call",
  "session_id": "abc123",
  "data": {
    "tool": "shell",
    "command": "ls -la"
  },
  "timestamp": 1710000000.0
}
```

### Event Types

| Type | Description |
|------|-------------|
| `tool_call` | Agent invoked a tool |
| `reasoning` | Agent thinking/planning |
| `task_update` | Task status changed |
| `monitor_alert` | Monitoring alert triggered |
| `mcp_request` | MCP server request |
| `stream_token` | Streaming response token |
| `agent_status` | Agent status change |
| `error` | Error occurred |
| `ping` | Keepalive (every 30s) |
