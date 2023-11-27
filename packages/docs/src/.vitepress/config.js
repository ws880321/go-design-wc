import { defineConfig } from "vitepress";

import sidebar from "./config/sidebar";
import nav from "./config/nav";

export default defineConfig({
  title: "go-design",
  description: "使用 vue3 开发的web component组件库",
  themeConfig: {
    nav,
    sidebar,
    outline: [2, 3],
    outlineTitle: "章节目录",
    socialLinks: [
      { icon: "github", link: "https://github.com/go-design/go-design-wc" },
    ],
    search: {
      provider: "local",
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.startsWith("go-"),
      },
    },
  },
  sitemap: {
    hostname: "https://ce.go-design.press",
  },
});
