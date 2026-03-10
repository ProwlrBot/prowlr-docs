---
sidebar_position: 7
title: Security
description: ProwlrBot security features — authentication, sandboxing, and guardrails.
---

# Security

ProwlrBot is built with security-first principles. Here's what's protected and how.

## API Authentication

Set an API token to protect all `/api` endpoints:

```bash
prowlr env set PROWLRBOT_API_TOKEN your-secret-token
```

Tokens are stored as SHA-256 hashes and verified with timing-safe comparison (`hmac.compare_digest`) to prevent timing attacks.

## Rate Limiting

Sliding window rate limiter: **100 requests per 60 seconds** per IP address. Only applies to `/api` paths.

## File I/O Sandboxing

File operations are restricted to safe paths:

**Blocked paths** (always denied):
- `~/.ssh/`
- `~/.prowlrbot.secret/`
- `~/.aws/`
- `~/.gnupg/`
- `/etc/`, `/dev/`, `/proc/`, `/sys/`

**Allowed paths**:
- ProwlrBot working directory (`~/.prowlrbot/`)
- `/tmp/`

All paths are resolved to prevent symlink/traversal attacks.

## Shell Command Safety

A blocklist prevents dangerous shell commands:

- `rm -rf /` and variants
- `dd` (disk destroyer)
- `chmod 777`
- `curl | bash` pipe patterns
- `sudo` escalation
- Fork bombs
- And more (16 regex patterns)

## Prompt Injection Detection

The `InputSanitizer` detects common injection patterns:
- "Ignore previous instructions"
- System prompt override attempts
- DAN/jailbreak attempts
- Base64-encoded instruction injection

Detected attempts are flagged and can be blocked or logged.

## Output Secret Redaction

The `OutputFilter` automatically redacts secrets from agent responses:
- API keys (`sk-ant-...`, `sk-...`)
- Bearer tokens
- Generic `api_key=`, `secret=`, `password=` patterns

## Environment Variable Security

- Secrets stored at `~/.prowlrbot.secret/envs.json`
- File permissions: `0600` (owner read/write only)
- API responses show masked values (first 4 chars + `***`)

## Best Practices

1. **Always set an API token** in production
2. **Use environment variables** for secrets, never config files
3. **Review agent autonomy levels** — start with "guide" mode
4. **Monitor the activity feed** for unexpected tool calls
5. **Keep ProwlrBot updated** for security patches
