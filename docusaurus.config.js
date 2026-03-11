"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prism_react_renderer_1 = require("prism-react-renderer");
// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
var config = {
  title: "U Know, U Now",
  favicon: "img/favicon.ico",
  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },
  // Set the production url of your site here
  url: "https://u-now-team.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/website/",
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "U-Now-Team", // Usually your GitHub org/user name.
  projectName: "website", // Usually your repo name.
  onBrokenLinks: "throw",
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/U-Now-Team/website/tree/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      items: [
        {
          to: "/",
          label: "Home",
          position: "left",
        },
        {
          type: "dropdown",
          sidebarId: "aiSidebar",
          position: "left",
          label: "AI 开发",
          items: [
            {
              type: "doc",
              label: "OpenCode",
              docId: "ai-dev/opencode/README",
            },
            {
              type: "doc",
              label: "OpenClaw",
              docId: "ai-dev/openclaw/README",
            },
          ],
        },
        {
          href: "https://github.com/facebook/docusaurus",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: "Copyright \u00A9 ".concat(
        new Date().getFullYear(),
        " U-Now Team. All rights reserved.",
      ),
    },
    prism: {
      theme: prism_react_renderer_1.themes.github,
      darkTheme: prism_react_renderer_1.themes.dracula,
    },
  },
};
exports.default = config;
