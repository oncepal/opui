/** @jsxImportSource @emotion/react */

import { ReactNode } from 'react';
import { ComponentBaseProps } from '../props';
import { useCSS, useThemedCSS, useTheme } from '../../styles/css';
type NavBarItemProps = ComponentBaseProps & {
  content?: ReactNode;
};

type NavBarProps = ComponentBaseProps & {
  color?: string;
  gap?: string;
  fixed?: boolean;
  sticky?: boolean;
  hideOnScroll?: boolean;
};

/**
 * A responsive navigation header positioned on top side of your page that includes support for branding, links, navigation, collapse and more.
 * ```
 * <NavBar
 *    content='content'
 *    extra={</>}>
 * </NavBar>
 * ```
 * @param content bar's and page's content aligned on the center of the bar.
 * @param color bar's background color.
 * @param gap the gap of the content,extra,navIcon
 */
const NavBar = ({ color, css, gap, hideOnScroll, children, ...props }: NavBarProps) => {
  const theme = useTheme();
  const styles = useCSS({
    padding: '0 1em',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '3em',
    backgroundColor: color,
    display: 'flex',
    gap,
    ...useThemedCSS(theme, css),
  });

  return (
    <nav css={styles} {...props}>
      {children}
    </nav>
  );
};
const NavBarBrand = ({ content, css, children, ...props }: NavBarItemProps) => {
  const theme = useTheme();
  const styles = useCSS({
    flex: 'none',
    ...useThemedCSS(theme, css),
  });
  return (
    <div css={styles} {...props}>
      {children}
    </div>
  );
};
const NavBarContent = ({ content, css, children, ...props }: NavBarItemProps) => {
  const theme = useTheme();
  const styles = useCSS({
    textAlign: 'center',
    ...useThemedCSS(theme, css),
  });
  return (
    <div css={styles} {...props}>
      {children}
    </div>
  );
};
const NavBarExtra = ({ content, css, children, ...props }: NavBarItemProps) => {
  const theme = useTheme();
  const styles = useCSS({
    flex: 'none',
    ...useThemedCSS(theme, css),
  });
  return (
    <div css={styles} {...props}>
      {children}
    </div>
  );
};

NavBar.Brand = NavBarBrand;
NavBar.Content = NavBarContent;
NavBar.Extra = NavBarExtra;
export default NavBar;
