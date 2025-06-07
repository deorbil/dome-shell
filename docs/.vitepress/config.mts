import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Dome Shell",
  description: "A familiar looking Hyprland shell.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Guide", link: "/guide/installation", activeMatch: "/guide/" },
    ],

    sidebar: [
      {
        text: "Getting Started",
        collapsed: false,
        items: [{ text: "Installation", link: "/guide/installation" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/deorbil/dome-shell" },
    ],
  },
});
