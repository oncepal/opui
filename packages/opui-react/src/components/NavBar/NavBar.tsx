/** @jsxImportSource @emotion/react */

import NavBarActions from './NavBarActions';
import NavBarBrand from './NavBarBrand';
import NavBarContent from './NavBarContent';
import { ReactNode, useEffect, useState } from 'react';
import { ComponentBaseProps } from '../props';
import { useCSS, useThemedCSS, useTheme, useMobileStyles } from '../../styles/hooks';
import { useThrottleFn } from '@oncepal/hooks';
type NavBarProps = ComponentBaseProps & {
  backgroundColor?: string;
  gap?: string;
  fixed?: boolean;
  sticky?: boolean;
  isBordered?: boolean;
  hideOnScroll?: boolean;
};
let sy = 0;
/**
   * 位于页面顶部的响应式导航标题，包括对品牌、链接、导航、折叠等的支持。
   * ```
   * <NavBar fixed>
       <NavBar.Brand />
       <NavBar.Content>title</NavBar.Content>
       <NavBar.Extra />
     </NavBar>
   * ```
   * @param content 栏和页面的内容在栏的中心对齐。
   * @param backgroundColor 导航栏背景色
   * @param gap  content,extra,navIcon的间距
   * @param isBordered 是否有下分割线
   */
const NavBar = ({
  isBordered,
  backgroundColor,
  fixed,
  sticky,
  css,
  gap,
  hideOnScroll,
  children,
  ...props
}: NavBarProps) => {
  const [translateY, setTranslateY] = useState(0);

  const theme = useTheme();
  const navStyles = useCSS({
    padding: theme.navBar.padding,
    maxHeight: theme.navBar.height,
    minHeight: theme.navBar.height,
    alignItems: 'center',
    backgroundColor: backgroundColor || (theme.isDarkMode ? theme.colors.darkBackground : theme.colors.lightBackground),
    display: 'flex',
    justifyContent: 'center',
    position: sticky ? 'sticky' : fixed ? 'fixed' : 'static',
    zIndex:theme.navBar.zIndex,
    top: 0,
    left: 0,
    right: 0,
    transition: 'transform .25s ease-out',
    ...(hideOnScroll && { transform: `translateY(-${translateY}%)` }),
    gap,
    ...(isBordered && {
      borderBottom: '2px ' + (theme.isDarkMode ? theme.colors.textInDarkBackground : theme.colors.textInLightBackground) + ' solid',
    }),
    ...useThemedCSS(theme, css),
  });
  const headerStyles = useCSS({
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: backgroundColor,
    display: 'flex',
    minWidth: '100%',
    gap,
  });

  const handleScroll = useThrottleFn(() => {
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
    <nav css={navStyles}>
      <header css={headerStyles} {...props}>
        {children}
      </header>
    </nav>
  );
};

NavBar.Brand = NavBarBrand;
NavBar.Content = NavBarContent;
NavBar.Actions = NavBarActions;
export default NavBar;
