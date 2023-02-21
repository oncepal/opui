/** @jsxImportSource @emotion/react */

import { keyframes, useTheme } from '@emotion/react';
import { Theme } from '../../styles/themes';

import { ComponentBaseProps, Padding } from '../props';
import { useCSS, useThemedCSS } from '../../styles/css';
import { ReactNode, ComponentPropsWithoutRef } from 'react';

type ListItemProps = ComponentBaseProps & {
  avator?: ReactNode;
  title?: ReactNode;
  content?: ReactNode;
  extra?: ReactNode;
};

type ListProps = ComponentBaseProps & {
  divider?: boolean | ReactNode;
  gap?: string;
  innerGap?: string;
};

const List = ({ gap, innerGap, css, children, ...props }: ComponentPropsWithoutRef<'ul'> & ListProps) => {
  const theme = useTheme();
  const listStyles = useCSS({
    display: 'flex',
    flexDirection: 'column',
    gap,
    ...useThemedCSS(theme, css),
  });

  return (
    <ul css={listStyles} {...props}>
      {children}
    </ul>
  );
};

const ListItem = ({
  css,
  avator,
  title,
  content,
  extra,
  children,
  ...props
}: ComponentPropsWithoutRef<'li'> & ListItemProps) => {
  const theme = useTheme();

  const itemStyles = useCSS({
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    ...useThemedCSS(theme, css),
  });

  return (
    <li css={itemStyles} {...props}>
      {children || (
        <>
          {avator && (
            <div
              css={useCSS({
                flex: 'none',
              })}>
              {avator}
            </div>
          )}
          {(title || content) && (
            <div
              css={useCSS({
                flex: 'auto',
              })}>
              <div>{title}</div>
              <div>{content}</div>
            </div>
          )}
          {extra && (
            <div
              css={useCSS({
                marginLeft: 'auto',
              })}>
              {extra}
            </div>
          )}
        </>
      )}
    </li>
  );
};
List.Item = ListItem;
export default List;
