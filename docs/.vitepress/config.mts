import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Dome Shell",
  description: "A familiar looking Hyprland shell.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    footer: {
      message: "Released under the GPL-3.0 License.",
      copyright: "Copyright © 2025 deorbil",
    },

    nav: [{ text: "Guide", link: "/guide/installation" }],

    sidebar: [
      {
        text: "Getting Started",
        items: [{ text: "Installation", link: "/guide/installation" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/deorbil/dome-shell" },
    ],
  },
});
