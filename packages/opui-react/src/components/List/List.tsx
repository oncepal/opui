/** @jsxImportSource @emotion/react */

import { Children, cloneElement, ComponentPropsWithoutRef, createContext, DetailedReactHTMLElement, ReactNode, useContext, useEffect, useRef, useState } from 'react';
import { ComponentBaseProps } from '../props';
import { useCSS, useThemedCSS, useTheme } from '../../styles/hooks';
import ListItem from './ListItem';

type ListProps = ComponentBaseProps & {
  color?: string;
  gap?: string;
};
const defaultContext = {
  currentListId: '',
};
export const ListContext = createContext(defaultContext);
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
export const List = ({ color, css, gap, children, ...props }: ComponentPropsWithoutRef<'ul'> & ListProps) => {
  const theme = useTheme();
  const styles = useCSS({
    ...useThemedCSS(theme, css),
  });
  const tabListElement = useRef(defaultContext);
  return (
    <nav css={styles} {...props}>
      <ListContext.Provider value={tabListElement.current}>
        {Children.map(children, (child: any, i) => {
          const element = child as DetailedReactHTMLElement<any, HTMLDivElement>;
          if (['ListItem'].includes(child.type.name)) {
            return (
              <>
                {cloneElement(element, {
                  ...{ ...element.props },
                })}
              </>
            );
          }
          return undefined;
        })}
      </ListContext.Provider>
    </nav>
  );
};

List.Item = ListItem;
export default List;
