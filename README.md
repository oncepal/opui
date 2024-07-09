
<!-- markdownlint-disable-next-line -->
<p align="center">
  <h1 width='13%' align='center'>🌌</h1>
  <!-- <img width='13%' src="./images/logo.png" alt="OP UI"> -->
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

<!-- [English](./README-en.md) | [简体中文](./README.md) -->


</div>

## ✨ 特点

- 🌈 拥有令人耳目一新的设计和最新的组件设计趋势，极具视觉冲击力，始终引领潮流
- 📦 样式和组件都是从零开始设计的，我们不尊崇于任何设计思路，这一点非常重要，因此您的项目将是独一无二的，与其他项目截然不同。
- 📖 专注于快速、轻松地创建项目，提供漂亮的视觉效果，但同时不忘开发人员的个性化和独立性。
- 🎨 使用流行的运行时css方案，可以更好地进行定制和更改，例如更改为深色主题或更改整个应用程序的主色调，或者仅仅是更改某个组件的某个小细节，只需几行 javascript 代码即可完成。
- 🛠️ 开源社区，完善的构建资料，可创建、改进和修正任何组件或功能。
- 🍩 以及，常规的优秀组件库该有的特点。

## 🚀 即将到来

- 结构清晰：划分清晰的组件结构和API设计
- 模块划分：每个组件的逻辑, styles, 常用的hooks都将剥开解耦。
- 视觉升级：framer-motion 动画库的整合以完成细枝末节的视觉升级
- 组件增强：常用的业务pro组件封装
- 高级文档：高质量、完整的文档说明，优质的即时体验。

## 🖥 环境支持

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Electron |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Edge                                                                                                                                                                                                 | last 2 versions                                                                                                                                                                                                  | last 2 versions                                                                                                                                                                                              | last 2 versions                                                                                                                                                                                              | last 2 versions                                                                                                                                                                                                      |

## ⭐ 支持项目

如果您感觉很棒并且想以一点点的方式支持我们，请考虑加星标并分享该存储库！这有助于我们了解并发展社区。 🙏

<img src="https://raw.githubusercontent.com/lusaxweb/vuesax/master/public/github-vuesax-star.gif" alt="star" />

## 📦 快速开始（暂未发布npm）

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
