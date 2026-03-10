import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

const projects = [
  {
    name: 'ProwlrBot',
    desc: 'Core autonomous AI agent platform. Multi-provider, multi-channel, security-first.',
    href: 'https://github.com/mcpcentral/prowlrbot',
    emoji: '🐾',
    status: 'Active',
  },
  {
    name: 'ROAR Protocol',
    desc: 'Real-time Open Agent Runtime — unified agent communication combining MCP, A2A, ACP, and ANP into one standard.',
    href: 'https://github.com/mcpcentral/roar-protocol',
    emoji: '🔊',
    status: 'In Development',
  },
  {
    name: 'Marketplace',
    desc: 'Community-driven marketplace for skills, agents, prompts, MCP servers, themes, and workflows. 70/30 revenue sharing.',
    href: 'https://github.com/mcpcentral/prowlr-marketplace',
    emoji: '🏪',
    status: 'In Development',
  },
  {
    name: 'AgentVerse',
    desc: 'Interactive virtual world where AI agents live, trade, battle, and collaborate. Club Penguin meets AI.',
    href: 'https://github.com/mcpcentral/agentverse',
    emoji: '🌍',
    status: 'Planning',
  },
];

export default function Ecosystem(): ReactNode {
  return (
    <Layout title="Ecosystem" description="The ProwlrBot ecosystem — protocols, marketplace, and virtual worlds.">
      <div className="container" style={{padding: '4rem 0'}}>
        <div style={{textAlign: 'center', marginBottom: '3rem'}}>
          <Heading as="h1" style={{fontSize: '2.5rem', fontWeight: 800}}>
            ProwlrBot Ecosystem
          </Heading>
          <p style={{fontSize: '1.1rem', opacity: 0.7, maxWidth: 600, margin: '0 auto'}}>
            A complete suite of open-source projects for autonomous AI agents.
          </p>
        </div>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', maxWidth: 900, margin: '0 auto'}}>
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.href}
              className="feature-card"
              style={{textDecoration: 'none', color: 'inherit'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem'}}>
                <span style={{fontSize: '2rem'}}>{project.emoji}</span>
                <span style={{
                  fontSize: '0.75rem',
                  padding: '4px 10px',
                  borderRadius: 20,
                  background: project.status === 'Active' ? 'rgba(82, 196, 26, 0.15)' : 'rgba(107, 92, 231, 0.15)',
                  color: project.status === 'Active' ? '#52c41a' : '#8B7FF0',
                  fontWeight: 600,
                }}>{project.status}</span>
              </div>
              <Heading as="h3" style={{fontSize: '1.2rem', fontWeight: 700}}>
                {project.name}
              </Heading>
              <p style={{fontSize: '0.9rem', opacity: 0.7, lineHeight: 1.6}}>{project.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </Layout>
  );
}
