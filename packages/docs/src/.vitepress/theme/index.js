// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import Theme from "vitepress/theme";
import "./style.css";
import { registerComponents } from "@wdslib/go-design";
import "@wdslib/go-design/dist/style.css";

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp(ctx) {
    // ...
    if (!import.meta.env.SSR) {
      registerComponents();
    }
  },
};
