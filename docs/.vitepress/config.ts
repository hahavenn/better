import { type DefaultTheme, type UserConfig } from "vitepress";

import { withMermaid } from "vitepress-plugin-mermaid";

const config: UserConfig<DefaultTheme.Config> = {
  srcDir: ".",
  outDir: "../public/docs",

  title: "better docs",
  description: "docs to work with better",

  base: "/docs/",
  cleanUrls: true,

  lastUpdated: true,

  themeConfig: {
    logo: {
      light: "/favicon_light.ico",
      dark: "/favicon_dark.ico",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/hahavenn" },
      { icon: "telegram", link: "https://t.me/hahavenn" },
      { icon: "gmail", link: "mailto:hahavenn@gmail.com" },
    ],

    /** @todo check how is it working */
    lastUpdated: {},

    siteTitle: "better docs",

    sidebar: [
      {
        text: "Entities",
        base: "/entities",
        link: "/",
        collapsed: false,
        items: [
          {
            text: "Goal",
            link: "/goal.md",
          },
        ],
      },
    ],

    editLink: {
      pattern: "https://github.com/hahavenn/better/docs/:path",
      text: "Edit this page on GitHub",
    },

    /** @todo needs to be configured, doesn't work on first add */
    search: {
      provider: "local",
    },
  },
};

export default withMermaid(config);
