import { ThemeProvider, Global, CSSObject } from '@emotion/react';
import { useMemo, useLayoutEffect, useState } from 'react';
import { globalStyles } from '../../styles/global';
import { theme as defaultTheme, Theme } from '../../styles/themes';
import { addCSSLink, deepMerge } from '../../utils';

type OPUIProviderProps = {
  noUseIcon?: boolean;
  children?: React.ReactNode;
  theme?: Partial<Theme>;
};

/**
 * OPUIProvider 提供一个默认的基准全局样式，并使您可以创建真正独特的界面，而无需管理布局尺寸的麻烦，与各种组件联动
 * 所有本组件库的组件都应该位于 OPUIProvider 组件中，该组件是许多组件和功能的挂载点。
 * 但组件本身也被设计为能够独立于 OPUIProvider 使用。
 * 注意：OPUIProviders只能在 OPUIProviderlication 中渲染一次。
 * @param noUseIcon 是否需要加载icon
 * @param theme 自定义主题，使用useCustomTheme的返回值
 */
export default function OPUIProvider({ children, theme, noUseIcon = false }: OPUIProviderProps) {
  if (!noUseIcon) {
    const [cssLink, setCssLink] = useState('https://unpkg.com/boxicons@latest/css/boxicons.min.css');
    useLayoutEffect(() => {
      addCSSLink(cssLink);
    }, [cssLink]);
  }
  return (
    <ThemeProvider
      theme={old => {
        const t = deepMerge(defaultTheme, theme || {});
        return t;
      }}>
      <Global styles={globalStyles as CSSObject} />
      {children}
    </ThemeProvider>
  );
}
