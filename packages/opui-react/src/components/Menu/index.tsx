/** @jsxImportSource @emotion/react */

import { ComponentPropsWithoutRef, createContext, ReactNode, useContext, useEffect, useRef, useState } from 'react';
import { ComponentBaseProps } from '../props';
import { useCSS, useThemedCSS, useTheme } from '../../styles/css';
import { throttle } from '../../utils';
type MenuItemProps = ComponentBaseProps & {
  content?: ReactNode;
};
type MenuGroupProps = ComponentBaseProps & {
  color?: string;
  gap?: string;
};
type MenuProps = ComponentBaseProps & {
  color?: string;
  gap?: string;
};
const defaultContext = {
  currentMenuId: '',
};
const MenuContext = createContext(defaultContext);
/**
 * A responsive navigation header positioned on top side of your page that includes support for branding, links, navigation, collapse and more.
 * ```
 * <Menu
 *    content='content'
 *    extra={</>}>
 * </Menu>
 * ```
 * @param content bar's and page's content aligned on the center of the bar.
 * @param color bar's background color.
 * @param gap the gap of the content,extra,navIcon
 */
const Menu = ({ color, css, gap, children, ...props }: ComponentPropsWithoutRef<'ul'> & MenuProps) => {
  const theme = useTheme();
  const styles = useCSS({
    ...useThemedCSS(theme, css),
  });
  const tabListElement = useRef(defaultContext);
  return (
    <nav css={styles} {...props}>
      <MenuContext.Provider value={tabListElement.current}>{children}</MenuContext.Provider>
    </nav>
  );
};
const MenuGroup = ({ css, children, ...props }: ComponentPropsWithoutRef<'nav'> & MenuGroupProps) => {
  const theme = useTheme();
  const menuContext = useContext(MenuContext);
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
const MenuItem = ({ content, css, children, ...props }: MenuItemProps) => {
  const theme = useTheme();

  const menuContext = useContext(MenuContext);
  const styles = useCSS({
    ':hover': {
      background: theme.colors.grey,
    },
    ...useThemedCSS(theme, css),
  });
  return (
    <li css={styles} {...props}>
      {children}
    </li>
  );
};

Menu.Group = MenuGroup;
Menu.Item = MenuItem;
export default Menu;
