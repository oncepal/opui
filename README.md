
<!-- markdownlint-disable-next-line -->
<p align="center">
  <img width='13%' src="./images/logo.png" alt="OP UI">
  <h1 align="center">OP UI</h1>
</p>
</br>
<p align="center">
  
</p>
<div align="center">

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/mui-org/material-ui/blob/HEAD/LICENSE)
[![npm latest package](https://img.shields.io/npm/v/@mui/material/latest.svg)](https://www.npmjs.com/package/@mui/material)
[![npm next package](https://img.shields.io/npm/v/@mui/material/next.svg)](https://www.npmjs.com/package/@mui/material)
[![npm downloads](https://img.shields.io/npm/dm/@mui/material.svg)](https://www.npmjs.com/package/@mui/material)
[![Coverage Status](https://img.shields.io/codecov/c/github/mui-org/material-ui/master.svg)](https://codecov.io/gh/mui-org/material-ui/branch/master)
[![Renovate status](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://github.com/mui-org/material-ui/issues/27062)
[![Average time to resolve an issue](https://isitmaintained.com/badge/resolution/mui-org/material-ui.svg)](https://isitmaintained.com/project/mui-org/material-ui 'Average time to resolve an issue')

[English](./README-en.md) | [简体中文](./README.md)


</div>

## ✨ 特点

- 🌈 高端优雅的UI/UX设计，让你的应用别具一格。
- 📦 高质量、高性能、移动端，反复对比借鉴流行组件库的优劣。
- ⚙️ 全部使用 TypeScript 编写，具有可预测的静态类型。
- 📖 “运行时”文档，注释在每个组件上，使用中即可查看。
- 🎨 完全定义主题，每个组件细节都有 100% 即时定制可能。

## 🚀 即将到来

- 组件整体使用 Children 插槽优先而非 Render Props 的 API 设计
- 每个组件的 headless 逻辑, styles 系统, 常用的 hooks 都将分开提包
- framer-motion 动画库的整合以完成细枝末节的视觉升级
- 增添移动端 h5 的常用组件
- 高质量完整的官方文档

## 🖥 环境支持

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Electron |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Edge                                                                                                                                                                                                 | last 2 versions                                                                                                                                                                                                  | last 2 versions                                                                                                                                                                                              | last 2 versions                                                                                                                                                                                              | last 2 versions                                                                                                                                                                                                      |

## ⭐ 支持项目

如果您感觉很棒并且想以一点点的方式支持我们，请考虑加星标并分享该存储库！这有助于我们了解并发展社区。 🙏

<img src="https://raw.githubusercontent.com/lusaxweb/vuesax/master/public/github-vuesax-star.gif" alt="star" />

## 📦 快速开始

1. 安装：在 React 项目目录中，通过运行以下任一命令来安装 OPUI：

```bash
yarn add @opui/react @emotion/react framer-motion
# or
npm i @opui/react @emotion/react framer-motion
```

2. 设置：为了让 OPUI 正常工作，您需要在应用程序的根目录下设置“App”:

转到应用程序的根目录并执行此操作:

```jsx
import { OPUIProvider } from '@opui/react';

const Main = () => (
  <OPUIProvider>
    <AppComponent /> // ---> 你的应用
  </OPUIProvider>
);
```

3. 使用 OPUI 组件：安装 OPUI 后，您可以使用任何组件，如下所示。
   OPUI 使用树摇动，因此在构建过程中未使用的模块不会包含在捆绑包中，并且
   每个组件都是单独导出的。

```jsx
import { Button } from '@opui/react';

const Component = () => <Button>Click me</Button>;
```

## 🤝 参与贡献

确保你阅读了这个[贡献文档](https://github.com/oncepal/opui/blob/main/contributing.md) 以及再提交代码之前阅读这个[提交文档](https://github.com/oncepal/opui/blob/main/commit-convention.md).


## 🔗 License

[MIT](https://opensource.org/licenses/MIT)
