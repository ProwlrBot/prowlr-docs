import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HeroSection() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div style={{fontSize: '4rem', marginBottom: '1rem'}}>🐾</div>
        <Heading as="h1" className="hero__title">
          ProwlrBot
        </Heading>
        <p className="hero__subtitle">
          Deploy autonomous AI agents that monitor your systems, automate workflows,
          and respond across every channel — Discord, Telegram, Slack, and more.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/getting-started">
            Get Started
          </Link>
          <Link
            className="button button--secondary button--lg"
            href="https://github.com/mcpcentral/prowlrbot">
            View on GitHub
          </Link>
        </div>

        <div className="stats-row">
          <div className="stat-item">
            <div className="stat-value">7+</div>
            <div className="stat-label">Channels</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">10+</div>
            <div className="stat-label">Built-in Skills</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">6+</div>
            <div className="stat-label">AI Providers</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">MCP</div>
            <div className="stat-label">Compatible</div>
          </div>
        </div>

        <div style={{marginTop: '2rem'}}>
          <p style={{fontSize: '0.9rem', opacity: 0.6, marginBottom: '0.5rem'}}>
            Get notified about new features and releases
          </p>
          <div className="email-signup">
            <input type="email" placeholder="your@email.com" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </header>
  );
}

type FeatureItem = {
  title: string;
  emoji: string;
  description: string;
};

const features: FeatureItem[] = [
  {
    title: 'Multi-Provider AI',
    emoji: '🧠',
    description:
      'Works with OpenAI, Anthropic, Groq, Ollama, and any OpenAI-compatible API. Smart routing automatically picks the best provider based on cost, performance, and availability.',
  },
  {
    title: 'Every Channel',
    emoji: '📡',
    description:
      'One agent, every platform. Deploy to Discord, Telegram, DingTalk, Feishu, QQ, iMessage, and a built-in web console. Add custom channels with a simple API.',
  },
  {
    title: 'Real-time Dashboard',
    emoji: '📊',
    description:
      'Live WebSocket-powered command center. Watch your agents think, call tools, and respond in real-time. See system health, activity feeds, and performance metrics.',
  },
  {
    title: 'Security First',
    emoji: '🛡️',
    description:
      'API token auth with timing-safe comparison, rate limiting, path sandboxing, shell command blocklist, prompt injection detection, and automatic secret redaction.',
  },
  {
    title: 'Skills & MCP',
    emoji: '⚡',
    description:
      'Extensible skill packs for PDF, Office docs, email, news, and more. Full MCP client with hot-reload — connect to any Model Context Protocol server.',
  },
  {
    title: 'Monitoring Engine',
    emoji: '👁️',
    description:
      'Watch any webpage or API for changes. Content diffing, configurable check intervals, and webhook notifications. Never miss an update again.',
  },
  {
    title: 'Per-Agent Config',
    emoji: '🤖',
    description:
      'Each agent gets its own personality, tools, skills, model, memory, and autonomy level. From fully supervised to fully autonomous — you set the rules.',
  },
  {
    title: 'Docker Swarm',
    emoji: '🐳',
    description:
      'Multi-device agent coordination with Redis-backed task queues. Run agent swarms across machines with HMAC-signed secure communication.',
  },
  {
    title: 'Open Source',
    emoji: '💜',
    description:
      'Apache 2.0 licensed. Fork it, extend it, make it yours. Community-driven with a growing ecosystem of skills, agents, and integrations.',
  },
];

function FeatureGrid() {
  return (
    <section style={{padding: '4rem 0'}}>
      <div className="container">
        <div style={{textAlign: 'center', marginBottom: '3rem'}}>
          <Heading as="h2" style={{fontSize: '2.2rem', fontWeight: 800}}>
            Everything you need for autonomous agents
          </Heading>
          <p style={{fontSize: '1.1rem', opacity: 0.7, maxWidth: 600, margin: '0 auto'}}>
            ProwlrBot combines the best of agent frameworks, monitoring tools,
            and communication platforms into one open-source package.
          </p>
        </div>
        <div className={styles.featureGrid}>
          {features.map((feature, idx) => (
            <div key={idx} className="feature-card">
              <div style={{fontSize: '2rem', marginBottom: '1rem'}}>{feature.emoji}</div>
              <Heading as="h3" style={{fontSize: '1.1rem', fontWeight: 700}}>
                {feature.title}
              </Heading>
              <p style={{fontSize: '0.9rem', opacity: 0.7, lineHeight: 1.6}}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickStartSection() {
  return (
    <section style={{padding: '4rem 0', background: 'rgba(107, 92, 231, 0.03)'}}>
      <div className="container">
        <div style={{textAlign: 'center', marginBottom: '2rem'}}>
          <Heading as="h2" style={{fontSize: '2rem', fontWeight: 800}}>
            Up and running in 60 seconds
          </Heading>
        </div>
        <div style={{maxWidth: 600, margin: '0 auto'}}>
          <pre style={{
            background: 'rgba(0,0,0,0.4)',
            border: '1px solid rgba(107, 92, 231, 0.2)',
            borderRadius: 12,
            padding: '1.5rem',
            fontSize: '0.95rem',
            lineHeight: 1.8,
          }}>
            <code>{`pip install prowlrbot
prowlr init --defaults
prowlr env set OPENAI_API_KEY sk-your-key
prowlr app

# Open http://localhost:8088 🎉`}</code>
          </pre>
          <div style={{textAlign: 'center', marginTop: '1.5rem'}}>
            <Link className="button button--primary button--lg" to="/docs/getting-started">
              Read the full guide →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function EcosystemSection() {
  const projects = [
    {
      name: 'ROAR Protocol',
      desc: 'Unified agent communication — MCP + A2A + ACP in one standard',
      href: 'https://github.com/mcpcentral/roar-protocol',
      emoji: '🔊',
    },
    {
      name: 'Marketplace',
      desc: 'Community skills, agents, prompts, and workflows. Revenue-sharing 70/30.',
      href: 'https://github.com/mcpcentral/prowlr-marketplace',
      emoji: '🏪',
    },
    {
      name: 'AgentVerse',
      desc: 'Interactive virtual world where AI agents live, trade, and collaborate.',
      href: 'https://github.com/mcpcentral/agentverse',
      emoji: '🌍',
    },
  ];

  return (
    <section style={{padding: '4rem 0'}}>
      <div className="container">
        <div style={{textAlign: 'center', marginBottom: '3rem'}}>
          <Heading as="h2" style={{fontSize: '2rem', fontWeight: 800}}>
            The ProwlrBot Ecosystem
          </Heading>
          <p style={{fontSize: '1rem', opacity: 0.7}}>
            More than a platform — a complete agent ecosystem
          </p>
        </div>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem'}}>
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.href}
              className="feature-card"
              style={{textDecoration: 'none', color: 'inherit'}}>
              <div style={{fontSize: '2rem', marginBottom: '1rem'}}>{project.emoji}</div>
              <Heading as="h3" style={{fontSize: '1.1rem', fontWeight: 700}}>
                {project.name}
              </Heading>
              <p style={{fontSize: '0.9rem', opacity: 0.7}}>{project.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Always watching. Always ready."
      description="ProwlrBot — Autonomous AI agent platform for monitoring, automation, and multi-channel communication.">
      <HeroSection />
      <main>
        <FeatureGrid />
        <QuickStartSection />
        <EcosystemSection />
      </main>
    </Layout>
  );
}
