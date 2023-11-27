/*
 * @Author: ws880321 wangshuai@vip.126.com
 * @Date: 2023-11-23 13:30:23
 * @LastEditors: ws880321 wangshuai@vip.126.com
 * @LastEditTime: 2023-11-27 16:42:12
 * @FilePath: /go-design/packages/docs/src/.vitepress/config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from "vitepress";

import sidebar from "./config/sidebar";
import nav from "./config/nav";

export default defineConfig({
  base: 'go-design-wc',
  title: 'go-design',
  description: '使用 vue3 开发的web component组件库',
  themeConfig: {
    nav,
    sidebar,
    outline: [2, 3],
    outlineTitle: '章节目录',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/go-design/go-design-wc' },
    ],
    search: {
      provider: 'local',
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.startsWith('go-'),
      },
    },
  },
  sitemap: {
    // hostname: "https://ce.go-design.press",
  },
});
