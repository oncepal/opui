/** @jsxImportSource @emotion/react */

import { ReactNode, useEffect, useState } from 'react';
import { ComponentBaseProps } from '../props';
import { useCSS, useThemedCSS, useTheme } from '../../styles/css';
import { throttle } from '../../utils';
type MenuItemProps = ComponentBaseProps & {
  content?: ReactNode;
};

type MenuProps = ComponentBaseProps & {
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
 * <Menu
 *    content='content'
 *    extra={</>}>
 * </Menu>
 * ```
 * @param content bar's and page's content aligned on the center of the bar.
 * @param color bar's background color.
 * @param gap the gap of the content,extra,navIcon
 */
const Menu = ({ color, sticky, css, gap, hideOnScroll, children, ...props }: MenuProps) => {
  const theme = useTheme();
  const styles = useCSS({
    ...useThemedCSS(theme, css),
  });

  return (
    <nav css={styles} {...props}>
      {children}
    </nav>
  );
};
const MenuGroup = ({ content, css, children, ...props }: MenuItemProps) => {
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
const MenuItem = ({ content, css, children, ...props }: MenuItemProps) => {
  const theme = useTheme();
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
