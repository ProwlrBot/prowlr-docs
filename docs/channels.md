---
sidebar_position: 3
title: Channels
description: Connect ProwlrBot to Discord, Telegram, DingTalk, Feishu, QQ, iMessage, and more.
---

# Channels

ProwlrBot supports multiple communication channels. One agent, every platform.

## Supported Channels

| Channel | Status | Setup |
|---------|--------|-------|
| **Web Console** | Built-in | Available at `http://localhost:8088` |
| **Discord** | Stable | Bot token required |
| **Telegram** | Stable | Bot token from @BotFather |
| **DingTalk** | Stable | App credentials required |
| **Feishu** | Stable | App credentials required |
| **QQ** | Stable | Bot token required |
| **iMessage** | Beta | macOS only |

## Adding a Channel

### CLI

```bash
prowlr channels add discord --token YOUR_BOT_TOKEN
prowlr channels add telegram --token YOUR_BOT_TOKEN
prowlr channels list
prowlr channels remove discord
```

### Config File

Add channels directly to `~/.prowlrbot/config.json`:

```json
{
  "channels": [
    {
      "channel": "discord",
      "token": "YOUR_BOT_TOKEN"
    },
    {
      "channel": "telegram",
      "token": "YOUR_BOT_TOKEN"
    }
  ]
}
```

## Discord Setup

1. Create a bot at [Discord Developer Portal](https://discord.com/developers/applications)
2. Enable **Message Content Intent** under Bot settings
3. Generate an invite URL with `bot` and `applications.commands` scopes
4. Add the bot to your server
5. Copy the bot token

```bash
prowlr channels add discord --token YOUR_BOT_TOKEN
```

## Telegram Setup

1. Message [@BotFather](https://t.me/BotFather) on Telegram
2. Send `/newbot` and follow the prompts
3. Copy the bot token

```bash
prowlr channels add telegram --token YOUR_BOT_TOKEN
```

## Custom Channels

Create custom channels by subclassing `BaseChannel`:

```python
from prowlrbot.app.channels.base import BaseChannel

class MyChannel(BaseChannel):
    channel = "my_channel"

    async def start(self):
        # Initialize your channel connection
        pass

    async def stop(self):
        # Clean up
        pass

    async def send(self, content, **kwargs):
        # Send a message through your channel
        pass
```

Place custom channels in `~/.prowlrbot/custom_channels/` and they'll be auto-loaded.

## Channel Architecture

```
Incoming Message → Channel → ChannelManager (queue + debounce)
→ AgentRunner → Agent Response → Channel Output
```

Each channel runs with 4 async workers for concurrent message processing.
