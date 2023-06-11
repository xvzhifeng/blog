import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Sumu's Blog",
      description: "Technical Notes",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "苏木的博客",
      description: "学习记录",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
