---
sidebar_position: 2
---

# 快速开始

## 安装

在你的 React 项目目录下，通过运行以下程序安装 ShitUI：

```bash
npm install @sui/core @emotion/reactt
```

## 使用

为了使 ShitUI 正常工作，你需要在你的应用程序的根部设置`App`（如果没有，组件也正常显示）。

转到你的应用程序的根部，这样做:

```bash
import * as React from 'react';

// 1. 导入 `App` 组件
import { App } from '@sui/core';

function Main({ Component }) {
  // 2. 在你的根部使用
  return (
    <App>
      <Component />
    </App>
  );
}
```

## 使用 ShitUI 组件

一旦 ShitUI 被安装，你就可以按以下方式使用任何组件。ShitUI 使用 tree-shaking，因此在构建过程中，未使用的模块将不会被包含在捆绑包中，每个组件都是单独导出的。

```tsx
import { Button } from '@sui/core';

const Component = () => <Button>Click me</Button>;
```

## 独立导入

```tsx
import Button from '@sui/core/Button';

const Component = () => <Button>Click me</Button>;
```

## App Props

| Attribute | Type              | Description | Default |
| --------- | ----------------- | ----------- | ------- |
| children  | `React.ReactNode` | 子组件      |         |
| theme     | `Partial<Theme>`  | 自定义主题  |         |
