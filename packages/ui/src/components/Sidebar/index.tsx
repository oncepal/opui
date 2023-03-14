/** @jsxImportSource @emotion/react */

import { Children, cloneElement, createContext, ReactNode, useContext, useRef } from 'react';
import { useMargin, usePadding, useCSS, useTheme, useThemedCSS, useThemedProps, usePosition } from '../../styles/css';
import { ComponentBaseProps, Margin, Padding, Position, Themed } from '../props';

type SidebarProps = ComponentBaseProps &
  Position & {
    absolute?: boolean;
    open?: boolean;
    color?: Themed<string>;
    hoverExpand?: boolean;
    reduce?: boolean;
    rail?: boolean;
    selectedIndex: number;
    onSelect: (selectedIndex: number) => any;
  };
type SidebarGroupProps = ComponentBaseProps & {
  expand?: boolean;
  arrow?: boolean;
};
type SidebarItemProps = ComponentBaseProps & {
  icon?: ReactNode;
  selected?: boolean;
  expand?: boolean;
  arrow?: boolean;
};

const SidebarContext = createContext<{ onSelect?: (selectedIndex: number) => any }>({});
/**
 * A sidebar enables app navigation and provides quick access to top-level collections of content in your app or game.
 * ```js
 * <Sidebar>
 *  <Col>left</Col>
 *  <Col>right</Col>
 * </Sidebar>
 * ```
 */
const Sidebar = ({
  selectedIndex,
  onSelect,
  hoverExpand,
  reduce,
  open,
  rail,
  color,
  children,
  css,
  ...props
}: SidebarProps) => {
  const context = useRef({ onSelect });
  const theme = useTheme();
  const styles = useCSS({
    ...usePosition(props),
    display: 'flex',
    flexDirection: 'column',
    padding: '.5em',
    width: theme.spacing[72],
    background: useThemedProps(theme, color) || theme.darkMode ? theme.colors.black : theme.colors.white,
    ...useThemedCSS(theme, css),
  });
  const handleChildrenRender = () => {
    return Children.map(children, (child: any, i) => {
      const element = child as React.DetailedReactHTMLElement<any, HTMLElement>;
      if (child.type.name == 'SidebarItem') {
        return cloneElement(element, {
          selected: selectedIndex === i,
          onClick: () => onSelect(i),
        });
      }
      if (child.type.name == 'SidebarGroup') {
        return cloneElement(element, {});
      }
      return undefined;
    });
  };
  return (
    <ul css={styles} {...props}>
      <SidebarContext.Provider value={context.current}>{handleChildrenRender()}</SidebarContext.Provider>
    </ul>
  );
};

const SidebarGroup = ({ children, css, ...props }: SidebarGroupProps) => {
  const theme = useTheme();
  const styles = useCSS({
    display: 'flex',
    width: '100%',
    ...useThemedCSS(theme, css),
  });
  return (
    <div css={styles} {...props}>
      {children}
    </div>
  );
};
const SidebarItem = ({ icon, children, css, selected, ...props }: SidebarItemProps) => {
  const ctx = useContext(SidebarContext);
  const theme = useTheme();
  const styles = useCSS({
    display: 'flex',
    padding: '3px 0 3px 2em',
    borderRadius: theme.radius.xs,
    opacity: theme.opacity.dilute,
    color: selected
      ? theme.darkMode
        ? theme.colors.accent
        : theme.colors.primary
      : theme.darkMode
      ? theme.colors.white
      : theme.colors.black,
    background: selected
      ? theme.darkMode
        ? theme.colors.primaryDeep
        : theme.colors.accent
      : theme.darkMode
      ? theme.colors.black
      : theme.colors.white,
    ':hover': {
      opacity: theme.opacity.opaque,
      background: theme.darkMode ? theme.colors.grey : theme.colors.greyLight,
    },
    ...useThemedCSS(theme, css),
  });

  return (
    <li css={styles} {...props}>
      {children}
    </li>
  );
};
Sidebar.Item = SidebarItem;
Sidebar.Group = SidebarGroup;
export default Sidebar;
