import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/prowlr-docs/blog',
    component: ComponentCreator('/prowlr-docs/blog', '93b'),
    exact: true
  },
  {
    path: '/prowlr-docs/blog/archive',
    component: ComponentCreator('/prowlr-docs/blog/archive', 'baa'),
    exact: true
  },
  {
    path: '/prowlr-docs/blog/hello-prowlrbot',
    component: ComponentCreator('/prowlr-docs/blog/hello-prowlrbot', 'e94'),
    exact: true
  },
  {
    path: '/prowlr-docs/blog/tags',
    component: ComponentCreator('/prowlr-docs/blog/tags', 'ce4'),
    exact: true
  },
  {
    path: '/prowlr-docs/blog/tags/announcement',
    component: ComponentCreator('/prowlr-docs/blog/tags/announcement', '555'),
    exact: true
  },
  {
    path: '/prowlr-docs/blog/tags/launch',
    component: ComponentCreator('/prowlr-docs/blog/tags/launch', 'eb2'),
    exact: true
  },
  {
    path: '/prowlr-docs/ecosystem',
    component: ComponentCreator('/prowlr-docs/ecosystem', 'dc1'),
    exact: true
  },
  {
    path: '/prowlr-docs/markdown-page',
    component: ComponentCreator('/prowlr-docs/markdown-page', '7c3'),
    exact: true
  },
  {
    path: '/prowlr-docs/docs',
    component: ComponentCreator('/prowlr-docs/docs', 'f13'),
    routes: [
      {
        path: '/prowlr-docs/docs',
        component: ComponentCreator('/prowlr-docs/docs', '7ec'),
        routes: [
          {
            path: '/prowlr-docs/docs',
            component: ComponentCreator('/prowlr-docs/docs', '522'),
            routes: [
              {
                path: '/prowlr-docs/docs/api',
                component: ComponentCreator('/prowlr-docs/docs/api', '684'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/prowlr-docs/docs/channels',
                component: ComponentCreator('/prowlr-docs/docs/channels', 'faf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/prowlr-docs/docs/configuration',
                component: ComponentCreator('/prowlr-docs/docs/configuration', '5ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/prowlr-docs/docs/dashboard',
                component: ComponentCreator('/prowlr-docs/docs/dashboard', '546'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/prowlr-docs/docs/getting-started',
                component: ComponentCreator('/prowlr-docs/docs/getting-started', 'f96'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/prowlr-docs/docs/security',
                component: ComponentCreator('/prowlr-docs/docs/security', '12c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/prowlr-docs/docs/skills',
                component: ComponentCreator('/prowlr-docs/docs/skills', 'b1d'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/prowlr-docs/',
    component: ComponentCreator('/prowlr-docs/', '562'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
