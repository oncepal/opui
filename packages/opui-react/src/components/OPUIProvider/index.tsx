import { ThemeProvider, Global, CSSObject } from '@emotion/react';
import { useMemo, useLayoutEffect, useState } from 'react';
import { globalStyles } from '../../styles/global';
import { theme as defaultTheme, Theme } from '../../styles/themes';
import { useCSSLink, deepMerge } from '@oncepal/utils';


type OPUIProviderProps = {
  noUseIcon?: boolean;
  children?: React.ReactNode;
  theme?: Partial<Theme>;
  noCssReset?: boolean;
};

/**
 * OPUIProvider 提供一个默认的基准全局样式，并使您可以创建真正独特的界面，而无需管理布局尺寸的麻烦，与各种组件联动
 * 所有本组件库的组件都应该位于 OPUIProvider 组件中，该组件是许多组件和功能的挂载点。
 * 但组件本身也被设计为能够独立于 OPUIProvider 使用。
 * 注意：OPUIProviders只能在 OPUIProviderlication 中渲染一次。
 * @param noUseIcon 是否需要加载icon
 * @param noCssReset 是否需要提供默认全局基础css
 * @param theme 自定义主题
 */
export default function OPUIProvider({ noCssReset, children, theme, noUseIcon = false }: OPUIProviderProps) {
  if (!noUseIcon) {
    const [cssLink, setCssLink] = useState('https://unpkg.com/boxicons@latest/css/boxicons.min.css');
    useLayoutEffect(() => {
      useCSSLink(cssLink);
    }, [cssLink]);
  }
  return (
    <ThemeProvider
      theme={old => {
        const t = deepMerge(defaultTheme, theme || {});
        return t;
      }}>
      {!noCssReset && <Global styles={globalStyles as CSSObject} />}
      {children}
    </ThemeProvider>
  );
}
