import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/front/": [
    // {
    //   text: "如何使用",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    {
      text: "记录",
      icon: "blog",
      prefix: "",
      children: "structure",
    },
    // {
    //   text: "哲记",
    //   icon: "rank",
    //   prefix: "life/",
    //   children: "structure",
    // },
    // "intro",
    // "slides",
  ],
  "/zh/end/": [
    {
      text: "记录",
      icon: "blog",
      prefix: "",
      children: "structure",
    },
  ],
  "/zh/spider/": [
    {
      text: "记录",
      icon: "blog",
      prefix: "",
      children: "structure",
    },
  ],
  "/zh/posts/": [
    // {
    //   text: "如何使用",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    {
      text: "工具",
      icon: "blog",
      prefix: "tools/",
      children: "structure",
    },
    {
      text: "哲记",
      icon: "rank",
      prefix: "life/",
      children: "structure",
    },
    // "intro",
    // "slides",
  ],
});
