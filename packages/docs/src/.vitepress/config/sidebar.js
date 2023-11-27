/*
 * @Author: ws880321 wangshuai@vip.126.com
 * @Date: 2023-11-23 13:30:23
 * @LastEditors: ws880321 wangshuai@vip.126.com
 * @LastEditTime: 2023-11-27 11:36:46
 * @FilePath: /go-design/packages/docs/src/.vitepress/config/sidebar.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const guide = [
  {
    text: "基础",
    items: [
      {
        text: "快速开始",
        link: "/guide/index",
        items: [],
      },
      // {
      //   text: "Color 色彩",
      //   link: "/guide/color",
      //   items: [],
      // },
      // {
      //   text: "theme 主题",
      //   link: "/guide/theme",
      //   items: [],
      // },
    ],
  },
];

const basic = [
  // {
  //   text: "Icon 图标",
  //   link: "/components/icon",
  // },
  {
    text: "Button 按钮",
    link: "/components/button",
  },
];

const components = [
  {
    text: "基础/布局",
    collapsible: true,
    items: basic,
  },

  {
    text: "通知/反馈",
    collapsible: true,
    items: [
     
      {
        text: "Message 消息提示",
        link: "/components/message",
      }
    ],
  },
  {
    text: "导航",
    collapsible: true,
    items: [
    ],
  },
  {
    text: "其它",
    collapsible: true,
    items: [
    ],
  },
];

const sidebar = {
  "/guide/": guide,
  "/components/": components,
};

export default sidebar;
