import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
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
    defaultLocale: "zh",
    locales: ["zh", "en"],
    localeConfigs: {
      zh: {
        label: "简体中文",
        direction: "ltr",
      },
      en: {
        label: "English",
        direction: "ltr",
      },
    },
  },

  plugins: [
    'docusaurus-lunr-search',
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/U-Now-Team/website/tree/main/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
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
          type: "localeDropdown",
          position: "right",
        },
        {
          to: "/",
          label: "Home",
          position: "left",
        },
        {
          type: "dropdown",
          label: "AI 开发",
          position: "left",
          items: [
            {
              to: "/docs/ai-dev/openclaw/",
              label: "OpenClaw",
            },
            {
              to: "/docs/ai-dev/opencode/",
              label: "OpenCode",
            },
          ],
        },
        {
          href: "https://github.com/U-Now-Team/website",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `© ${new Date().getFullYear()} U-Now 团队. 保留所有权利`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
