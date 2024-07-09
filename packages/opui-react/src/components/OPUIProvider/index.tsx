import { ThemeProvider, Global, CSSObject } from '@emotion/react';
import { useMemo, useLayoutEffect, useState, useInsertionEffect } from 'react';
import { globalStyles } from '../../styles/global';
import { defaultTheme, Theme } from '../../styles/themes';
import { useCSSLink, useMerge } from '@oncepal/hooks';

type OPUIProviderProps = {
  children?: React.ReactNode;
  customTheme?: Partial<Theme>;
  cssReset?: boolean;
};

/**
 * OPUIProvider 提供一个默认的基准全局样式，并使您可以创建真正独特的界面，而无需管理布局尺寸的麻烦，与各种组件联动
 * 所有本组件库的组件都应该位于 OPUIProvider 组件中，该组件是许多组件和功能的挂载点。
 * 但组件本身也被设计为能够独立于 OPUIProvider 使用。
 * 注意：OPUIProviders只能在 Application 中渲染一次。
 * @param useIcon 是否需要加载icon
 * @param cssReset 是否需要提供默认全局基础css
 * @param theme 自定义主题
 */
export default function OPUIProvider({ cssReset = true, children, customTheme }: OPUIProviderProps) {

    useInsertionEffect(() => {
      useCSSLink('https://unpkg.com/boxicons@latest/css/boxicons.min.css');
    }, []);
  
  return (
    <ThemeProvider theme={customTheme ? useMerge(defaultTheme, customTheme || {}) : defaultTheme}>
      {cssReset && <Global styles={globalStyles as CSSObject} />}
      {children}
    </ThemeProvider>
  );
}
