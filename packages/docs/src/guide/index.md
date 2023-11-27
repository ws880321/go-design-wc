<!--
 * @Author: ws880321 wangshuai@vip.126.com
 * @Date: 2023-11-23 13:30:23
 * @LastEditors: ws880321 wangshuai@vip.126.com
 * @LastEditTime: 2023-11-27 15:01:36
 * @FilePath: /go-design/packages/docs/src/guide/index.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# 快速开始

## 通过 script 引入

```html
<!--最新版-->
<script type="module" src="//cdn.jsdelivr.net/npm/@wdslib/go-design"></script>
<!--指定版本号-->
<script
  type="module"
  src="//cdn.jsdelivr.net/npm/@wdslib/go-design@0.1.61"
></script>
```

## 通过包管理器使用

### 安装

```bash
npm i @wdslib/go-design
#OR
yarn add @wdslib/go-design
#OR
pnpm add @wdslib/go-design
```

### vue 中使用


```js
// vue2
import Vue from "vue";
import { registerComponents } from "@wdslib/go-design";
import "@wdslib/go-design/dist/style.css";
registerComponents();

// vue3
import { createApp } from "vue";
import { registerComponents } from "@wdslib/go-design";
import "@wdslib/go-design/dist/style.css";
registerComponents();
createApp().config.compilerOptions.isCustomElement = (tag) =>
  tag.startsWith("go-");
```
