/** @jsxImportSource @emotion/react */

import { ReactNode, useEffect, useState } from 'react';
import { ComponentBaseProps } from '../props';
import { useCSS, useThemedCSS, useTheme } from '../../styles/css';
import { throttle } from '../../utils';
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
let sy = 0;
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
  const [translateY, setTranslateY] = useState(0);

  const theme = useTheme();
  const styles = useCSS({
    padding: '0 2em',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '4em',
    backgroundColor: color,
    display: 'flex',
    position: 'sticky',
    top: 0,
    transition: 'all .25s ease-out',
    ...(hideOnScroll && { transform: `translateY(-${translateY}%)` }),
    gap,
    ...useThemedCSS(theme, css),
  });

  const handleScroll = throttle(() => {
    if (window.scrollY != sy) {
      if (window.scrollY > sy) {
        setTranslateY(100);
      } else {
        setTranslateY(0);
      }
      sy = window.scrollY;
    }
  }, 300);

  useEffect(
    hideOnScroll
      ? () => {
          window.addEventListener('scroll', handleScroll);
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }
      : () => {},
    [],
  );

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
