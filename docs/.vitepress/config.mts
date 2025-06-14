import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Dome Shell",
  description: "A familiar looking Hyprland shell.",

  base: "/dome-shell/",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    footer: {
      message: "Released under the GPL-3.0 License",
      copyright: "Copyright © 2025 deorbil",
    },

    nav: [
      { text: "Guide", link: "/guide/getting-started", activeMatch: "/guide/" },
    ],

    sidebar: [
      {
        text: "Guide",
        collapsed: false,
        items: [{ text: "Getting Started", link: "/guide/getting-started" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/deorbil/dome-shell" },
    ],
  },
});
