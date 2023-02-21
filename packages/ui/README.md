<!-- markdownlint-disable-next-line -->
<p align="center">
  <img width='13%' src="../../images/logo.png" alt="Shit UI">
  <h1 align="center">Shit UI</h1>
</p>
</br>
<p align="center">
  The React UI tools helps you create the best web app.
</p>
<div align="center">

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/mui-org/material-ui/blob/HEAD/LICENSE)
[![npm latest package](https://img.shields.io/npm/v/@mui/material/latest.svg)](https://www.npmjs.com/package/@mui/material)
[![npm next package](https://img.shields.io/npm/v/@mui/material/next.svg)](https://www.npmjs.com/package/@mui/material)
[![npm downloads](https://img.shields.io/npm/dm/@mui/material.svg)](https://www.npmjs.com/package/@mui/material)
[![Coverage Status](https://img.shields.io/codecov/c/github/mui-org/material-ui/master.svg)](https://codecov.io/gh/mui-org/material-ui/branch/master)
[![Renovate status](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://github.com/mui-org/material-ui/issues/27062)
[![Average time to resolve an issue](https://isitmaintained.com/badge/resolution/mui-org/material-ui.svg)](https://isitmaintained.com/project/mui-org/material-ui 'Average time to resolve an issue')



  English | [Português](./README-pt_BR.md) | [简体中文](./README-zh_CN.md) | [Українською](./README-uk_UA.md) | [Spanish](./README-sp_MX.md) | [日本語](./README-ja_JP.md)


  <img width='100%' src="../../images/components.jpg" alt="Shit UI">
  
</div>



## ✨ Features

- 🌈 Cutting-edge and fashionable ui design.
- 📦 A set of high-quality React components out of the box.
- 🛡 Written in TypeScript with predictable static types.
- ⚙️ Whole package of design resources and development tools.
- 📖 Extensive documentation and demos
- 🌍 Support i18n, built-in N+ languages
- 🎨 Powerful theme customization in every detail.

## 🖥 Environment Support

- Modern browsers
- Server-side Rendering
- [Electron](https://www.electronjs.org/)

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Electron |
| --- | --- | --- | --- | --- |
| Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## ⭐ Support the project

If you feel awesome and want to support us in a small way, please consider starring and sharing the repo! This helps us getting known and grow the community. 🙏

<img src="https://raw.githubusercontent.com/lusaxweb/vuesax/master/public/github-vuesax-star.gif" alt="star" />

## 🔨 Documentation

Visit [https://sui.org/docs](https://sui.org/docs) to view the full documentation.

## 📦 Quick Start

1. Installation: Inside your React project directory, install ShitUI by running either of the following:

```bash
yarn add @sui/core @emotion/react
# or
npm i @sui/core @emotion/react
```

2. Setup: For ShitUI to work correctly, you need to set up the `App` at the root of your application.

Go to the root of your application and do this:

```jsx
import { App } from '@sui/core';

const Main = () => (
  <App>
    <AppComponent /> // ---> Your App Component
  </App>
);
```

3. Using ShitUI components: Once ShitUI is installed you can use any of the components as follows.
   ShitUI uses tree-shaking so the unused modules will not be included in the bundle during the build process and
   each component is exported separately.

```jsx
import { Button } from '@sui/core';

const Component = () => <Button>Click me</Button>;
```

4. ShitUI allows to manually import components if you need. E.g.

```jsx
import Button from '@sui/core/button';

const Component = () => <Button>Click me</Button>;
```

## 🤝 Contribution

Please make sure to read the [Contributing Guide](https://github.com/fogcity/ui/blob/main/contributing.md) before making a pull request and commit with [Commit Guide](https://github.com/fogcity/ui/blob/main/commit-convention.md).

## ❤️ Sponsors

Thank you to all the people who already contributed to us!

## 🔗 License

[MIT](https://opensource.org/licenses/MIT)
