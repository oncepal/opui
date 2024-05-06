/** @jsxImportSource @emotion/react */

import { ComponentPropsWithoutRef, createContext, ReactNode, useContext, useEffect, useRef, useState } from 'react';
import { ComponentBaseProps } from '../props';
import { useCSS, useThemedCSS, useTheme } from '../../styles/css';
import { throttle } from '../../utils';
type ListItemProps = ComponentBaseProps & {
  content?: ReactNode;
};
type ListGroupProps = ComponentBaseProps & {
  color?: string;
  gap?: string;
};
type ListProps = ComponentBaseProps & {
  color?: string;
  gap?: string;
};
const defaultContext = {
  currentListId: '',
};
const ListContext = createContext(defaultContext);
/**
 * A responsive navigation header positioned on top side of your page that includes support for branding, links, navigation, collapse and more.
 * ```
 * <List
 *    content='content'
 *    extra={</>}>
 * </List>
 * ```
 * @param content bar's and page's content aligned on the center of the bar.
 * @param color bar's background color.
 * @param gap the gap of the content,extra,navIcon
 */
const List = ({ color, css, gap, children, ...props }: ComponentPropsWithoutRef<'ul'> & ListProps) => {
  const theme = useTheme();
  const styles = useCSS({
    ...useThemedCSS(theme, css),
  });
  const tabListElement = useRef(defaultContext);
  return (
    <nav css={styles} {...props}>
      <ListContext.Provider value={tabListElement.current}>{children}</ListContext.Provider>
    </nav>
  );
};
const ListGroup = ({ css, children, ...props }: ComponentPropsWithoutRef<'nav'> & ListGroupProps) => {
  const theme = useTheme();
  const listContext = useContext(ListContext);
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
const ListItem = ({ content, css, children, ...props }: ListItemProps) => {
  const theme = useTheme();

  const listContext = useContext(ListContext);
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

List.Group = ListGroup;
List.Item = ListItem;
export default List;
