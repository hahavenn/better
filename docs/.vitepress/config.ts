import { type DefaultTheme, type UserConfig } from "vitepress";

import { withMermaid } from "vitepress-plugin-mermaid";

import docsEntities from "../entities/_";
import docsScripts from "../scripts/_";

const config: UserConfig<DefaultTheme.Config> = {
  srcDir: ".",
  outDir: "../public/docs",

  title: "better docs",
  description: "docs to work with better",

  base: "/docs/",

  lastUpdated: true,

  themeConfig: {
    logo: {
      light: "/favicon_light.ico",
      dark: "/favicon_dark.ico",
    },

    nav: [
      {
        text: "Back to better",
        link: process.argv[process.argv.length - 1],
        target: "_self",
      },
      {
        text: "Endpoints OpenAPI",
        link: `${process.argv[process.argv.length - 1]}/swagger`,
        target: "_self",
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/hahavenn" },
      { icon: "telegram", link: "https://t.me/hahavenn" },
      { icon: "gmail", link: "mailto:hahavenn@gmail.com" },
    ],

    lastUpdated: {},

    siteTitle: "better docs",

    sidebar: [
      {
        text: "Entities",
        base: "/entities",
        collapsed: true,
        items: docsEntities,
      },
      {
        text: "Scripts",
        base: "/scripts",
        collapsed: true,
        items: docsScripts,
      },
    ],

    editLink: {
      pattern: "https://github.com/hahavenn/better/tree/main/docs/:path",
      text: "Edit this page on GitHub",
    },

    search: {
      provider: "local",
    },
  },
};

export default withMermaid(config);
