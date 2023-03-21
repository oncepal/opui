/** @jsxImportSource @emotion/react */

import { ReactNode, useEffect, useState } from 'react';
import { ComponentBaseProps } from '../props';
import { useCSS, useThemedCSS, useTheme, useMobileStyles } from '../../styles/css';
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
const NavBar = ({ color, sticky, css, gap, hideOnScroll, children, ...props }: NavBarProps) => {
  const [translateY, setTranslateY] = useState(0);

  const theme = useTheme();
  const containerStyles = useCSS({
    padding: '0 10em',
    alignItems: 'center',
    height: '4em',
    backgroundColor: color,
    display: 'flex',
    justifyContent: 'center',
    position: sticky ? 'sticky' : 'static',
    top: 0,
    transition: 'transform .25s ease-out',
    ...(hideOnScroll && { transform: `translateY(-${translateY}%)` }),
    gap,
    ...useMobileStyles(theme, {}),
    ...useThemedCSS(theme, css),
  });
  const styles = useCSS({
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: color,
    display: 'flex',
    maxWidth: theme.app.maxWidth,
    minWidth: theme.app.minWidtgh,
    gap,
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
    <header css={containerStyles}>
      <nav css={styles} {...props}>
        {children}
      </nav>
    </header>
  );
};

const NavBarBrand = ({ content, css, children, ...props }: NavBarItemProps) => {
  const theme = useTheme();
  const styles = useCSS({
    display: 'flex',
    alignItems: 'center',
    flex: 1.5,
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
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
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
    flex: 1.5,

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
