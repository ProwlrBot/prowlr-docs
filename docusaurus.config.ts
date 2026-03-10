import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'ProwlrBot',
  tagline: 'Always watching. Always ready.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://mcpcentral.github.io',
  baseUrl: '/prowlr-docs/',

  organizationName: 'mcpcentral',
  projectName: 'prowlr-docs',
  trailingSlash: false,

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/mcpcentral/prowlr-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/mcpcentral/prowlr-docs/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/prowlrbot-social.png',
    metadata: [
      {name: 'keywords', content: 'AI agent, autonomous agent, MCP, chatbot, monitoring, automation'},
      {name: 'twitter:card', content: 'summary_large_image'},
    ],
    announcementBar: {
      id: 'launch',
      content: '🚀 ProwlrBot is now open source! <a href="https://github.com/mcpcentral/prowlrbot">Star us on GitHub</a> and get started in minutes.',
      backgroundColor: '#00BCD4',
      textColor: '#fff',
      isCloseable: true,
    },
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'ProwlrBot',
      logo: {
        alt: 'ProwlrBot',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/ecosystem', label: 'Ecosystem', position: 'left'},
        {
          href: 'https://github.com/mcpcentral/prowlrbot',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {label: 'Getting Started', to: '/docs/getting-started'},
            {label: 'Configuration', to: '/docs/configuration'},
            {label: 'Channels', to: '/docs/channels'},
            {label: 'API Reference', to: '/docs/api'},
          ],
        },
        {
          title: 'Ecosystem',
          items: [
            {label: 'ROAR Protocol', href: 'https://github.com/mcpcentral/roar-protocol'},
            {label: 'Marketplace', href: 'https://github.com/mcpcentral/prowlr-marketplace'},
            {label: 'AgentVerse', href: 'https://github.com/mcpcentral/agentverse'},
          ],
        },
        {
          title: 'Community',
          items: [
            {label: 'GitHub', href: 'https://github.com/mcpcentral/prowlrbot'},
            {label: 'Issues', href: 'https://github.com/mcpcentral/prowlrbot/issues'},
            {label: 'Discussions', href: 'https://github.com/mcpcentral/prowlrbot/discussions'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ProwlrBot. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'python', 'typescript'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
