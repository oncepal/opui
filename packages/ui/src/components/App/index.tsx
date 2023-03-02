import { ThemeProvider, Global, CSSObject } from '@emotion/react';
import { useMemo, useLayoutEffect, useState } from 'react';
import { globalStyles } from '../../styles/global';
import { theme as defaultTheme, Theme } from '../../styles/themes';
import { addCSSLink, deepMerge } from '../../utils';

type AppProps = {
  children?: React.ReactNode;
  theme?: Partial<Theme>;
};

/**
 * The app component works with components such as navigation, drawer, appbar, footer, etc.
 * Helps your app to resize properly around <main>.
 * This allows you to create truly unique interfaces without the hassle of managing layout dimensions.
 * All apps should be in the app component which is the mount point for many components and features.
 * but the components themselves are also designed to be able to be used independently of the app.
 * apps should only be rendered once in your application.
 */
export default function App({ children, theme }: AppProps) {
  const [cssLink, setCssLink] = useState('https://unpkg.com/boxicons@latest/css/boxicons.min.css');
  useLayoutEffect(() => {
    addCSSLink(cssLink);
  }, [cssLink]);
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
