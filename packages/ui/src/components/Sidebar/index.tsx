/** @jsxImportSource @emotion/react */

import { useMargin, usePadding, useCSS, useTheme, useThemedCSS, useThemedProps } from '../../styles/css';
import { ComponentBaseProps, Margin, Padding, Themed } from '../props';

type SidebarProps = 
  ComponentBaseProps & {
    absolute?: boolean;
   open?:boolean
   color?:Themed<string>
   hoverExpand?:boolean
   reduce?:boolean

  };
  type SidebarGroupProps = 
  ComponentBaseProps & {
   expand?:boolean
   arrow?:boolean
  };
  type SidebarItemProps = 
  ComponentBaseProps & {
   expand?:boolean
   arrow?:boolean
  };
/**
 * Component provides a way to represent a row in the grid system. It is used when we want to display data in the form of rows..
 * ```js
 * <Sidebar>
 *  <Col>left</Col>
 *  <Col>right</Col>
 * </Sidebar>
 * ```
 * @param vertical vertical flex direction
 * @param wrapped flex wrap
 * @param fullHeight full height or not
 * @param align flex align items
 * @param justify flex justify content
 * @param gap children's gap
 */
const Sidebar = ({ hoverExpand,reduce,open,color,children, absolute,css, ...props }: SidebarProps) => {
  const theme = useTheme();
  const styles = useCSS({
    position:absolute?'absolute':'static',
    display: 'flex',
    width: '100%',
    color:useThemedProps(theme,color),
    ...useThemedCSS(theme, css),
  });
  return <div css={styles} {...props}>
      {children}
    </div>
  
};
const SidebarGroup = ({ children,css, ...props }: SidebarGroupProps) => {
  const theme = useTheme();
  const styles = useCSS({

    display: 'flex',
    width: '100%',
    ...useThemedCSS(theme, css),
  });
  return <div css={styles} {...props}>
      {children}
    </div>
  
};
const SidebarItem = ({ children,css, ...props }: SidebarItemProps) => {
  const theme = useTheme();
  const styles = useCSS({

    display: 'flex',
    width: '100%',
    ...useThemedCSS(theme, css),
  });
  return <div css={styles} {...props}>
      {children}
    </div>
  
};
Sidebar.Item = SidebarItem
Sidebar.Group = SidebarGroup
export default Sidebar;
