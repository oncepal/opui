
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

- 🌈 前沿时尚的UI设计。
- 📦 一组开箱即用的高质量 React 组件。
- ⚙️ 使用 TypeScript 编写，具有可预测的静态类型。
- 📖 运行时文档，藏在每个组件的提示中。
- 🎨 每个组件细节都有强大的主题定制功能。

## 🚀 未来规划

- 组件的重新审核复盘设计
- 名称和文档升级
- 整合framer-motion动画库完成视觉升级

## 🖥 环境支持

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Electron |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Edge                                                                                                                                                                                                 | last 2 versions                                                                                                                                                                                                  | last 2 versions                                                                                                                                                                                              | last 2 versions                                                                                                                                                                                              | last 2 versions                                                                                                                                                                                                      |

## ⭐ 支持项目

如果您感觉很棒并且想以一点点的方式支持我们，请考虑加星标并分享该存储库！这有助于我们了解并发展社区。 🙏

<img src="https://raw.githubusercontent.com/lusaxweb/vuesax/master/public/github-vuesax-star.gif" alt="star" />

## 📦 快速开始

1. 安装：在 React 项目目录中，通过运行以下任一命令来安装 OPUI(目前未处理私有包发布，要收费哈哈，等开发完成再发布)：

```bash
yarn add @opui/react @emotion/react
# or
npm i @opui/react @emotion/react
```

2. 设置：为了让 OPUI 正常工作，您需要在应用程序的根目录下设置“App”:

转到应用程序的根目录并执行此操作:

```jsx
import { OPUIProvider } from '@opui/react';

const Main = () => (
  <OPUIProvider>
    <AppComponent /> // ---> Your App Component
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

4. OPUI 允许根据需要手动导入组件。例如:

```jsx
import Button from '@opui/react/button';

const Component = () => <Button>Click me</Button>;
```

## 🤝 参与贡献

确保你阅读了这个[贡献文档](https://github.com/oncepal/opui/blob/main/contributing.md) 以及再提交代码之前阅读这个[提交文档](https://github.com/oncepal/opui/blob/main/commit-convention.md).


## 🔗 License

[MIT](https://opensource.org/licenses/MIT)
