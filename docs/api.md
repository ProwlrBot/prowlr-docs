---
sidebar_position: 6
title: API Reference
description: ProwlrBot REST API endpoints.
---

# API Reference

ProwlrBot exposes a REST API at `/api`. All endpoints (except health) require authentication when `PROWLRBOT_API_TOKEN` is set.

## Authentication

Set an API token:

```bash
prowlr env set PROWLRBOT_API_TOKEN your-secret-token
```

Include it in requests:

```bash
curl -H "Authorization: Bearer your-secret-token" http://localhost:8088/api/agents
```

## Endpoints

### Version

```
GET /api/version
```

Returns the current ProwlrBot version.

```json
{ "version": "0.1.0" }
```

### Agents

```
GET    /api/agents           # List all agents
POST   /api/agents           # Create an agent
GET    /api/agents/{id}      # Get agent by ID
PUT    /api/agents/{id}      # Update agent
DELETE /api/agents/{id}      # Delete agent
```

#### Agent Config Schema

```json
{
  "name": "My Agent",
  "avatar": { "base": "robot", "color": "#00E5FF" },
  "soul": { "personality": "helpful", "tone": "professional" },
  "memory": { "type": "in_memory", "max_tokens": 8192 },
  "tools": { "enabled": ["shell", "file_io", "browser"] },
  "skills": { "enabled": ["pdf", "cron"] },
  "model": { "preferred": "gpt-4o", "temperature": 0.7 },
  "autonomy": { "default_level": "guide" }
}
```

### Channels

```
GET  /api/channels           # List channels
POST /api/channels           # Add channel
```

### Skills

```
GET /api/skills              # List available skills
```

### Cron Jobs

```
GET    /api/cron             # List scheduled jobs
POST   /api/cron             # Create a job
DELETE /api/cron/{id}        # Delete a job
```

### Providers

```
GET /api/providers           # List detected providers
```

### Environment Variables

```
GET    /api/envs             # List (masked values)
POST   /api/envs             # Set a variable
DELETE /api/envs/{key}       # Delete a variable
```

### MCP

```
GET /api/mcp/clients         # List MCP clients
```

## Rate Limiting

API requests are rate-limited to **100 requests per 60 seconds** per IP. The rate limiter uses a sliding window algorithm. Only `/api` paths are rate-limited.

## WebSocket

```
WS /ws/dashboard?session_id=your-id
```

Real-time event stream. See [Dashboard](/docs/dashboard) for event types.
