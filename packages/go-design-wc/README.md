<!--
 * @Author: ws880321 wangshuai@vip.126.com
 * @Date: 2023-11-23 13:30:23
 * @LastEditors: ws880321 wangshuai@vip.126.com
 * @LastEditTime: 2023-11-27 10:11:17
 * @FilePath: /go-design/packages/go-design-wc/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# @wdslib/go-design

使用 vue3 构建的 web component 组件库

## 使用

**安装**

```bash
pnpm add @wdslib/go-design
```

**使用**

```js
// 全部注册
import { registerComponents } from '@wdslib/go-design'
import '@wdslib/go-design/dist/style.css'
registerComponents()
// 单个组件注册
import { registerComponent, Button } from '@wdslib/go-design'
import '@wdslib/go-design/dist/style.css'
registerComponent('ce-button', Button)
```

## 参与开发

```sh
pnpm install
```

