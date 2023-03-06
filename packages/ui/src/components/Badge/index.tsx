/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import { ComponentBaseProps, Themed } from '../props';

import { useThemedCSS, useCSS, useTheme, useThemedProps } from '../../styles/css';
import vars from '../../styles/vars';
import { css } from '@emotion/react';
import { size, position } from 'polished';
import { forwardRef, ComponentPropsWithoutRef } from 'react';

type BadgeProps = ComponentBaseProps & {
  size?: number;
  show?: boolean;
  color?: Themed<string>;
  offsetX?: string | number;
  offsetY?: string | number;
  position?: 'top' | 'left' | 'bottom' | 'right' | 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  content?: React.ReactNode;
};

/**
 * Badges are used as a small numerical value or status descriptor for UI elements.
 * ```js
 * <Badge color="#eee" content={5}>
      <Image
        src="https://i.pravatar.cc/300?u=a042581f4e29026707d"
      />
    </Badge>
 * ```
 * @param content The content of the badge.
 * @param size The size of the badge
 * @param show if show the badge content
 * @param offsetX badge x-offset
 * @param offsetY badge y-offset
 * @param position badge position relative to its children.
 * @param offsetY badge background color
 */
const Badge = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'> & BadgeProps>(
  (
    {
      size = 14,
      show = true,
      css,
      offsetX,
      offsetY,
      color,
      position = 'top-right',
      content,
      children,
      className,
      ...props
    },
    ref,
  ) => {
    const theme = useTheme();
    const getInset = () => {
      switch (position) {
        case 'top':
          return {
            left: offsetX || 0,
            top: offsetY || 0,
            transform: 'translate3d(-50%,-50%,0)',
          };
        case 'left':
          return {
            left: offsetX || 0,
            top: offsetY || 0,
            transform: 'translate3d(-50%,-0%,0)',
          };
        case 'bottom':
          return {
            left: offsetX || 0,
            top: offsetY || 0,
            transform: 'translate3d(-50%,-50%,0)',
          };
        case 'right':
          return {
            left: offsetX || 0,
            top: offsetY || 0,
            transform: 'translate3d(-50%,-50%,0)',
          };

        case 'top-left':
          return {
            left: offsetX || 0,
            top: offsetY || 0,
            transform: 'translate3d(-50%,-50%,0)',
          };
        case 'top-right':
          return {
            right: offsetX || 0,
            top: offsetY || 0,
            transform: 'translate3d(50%,-50%,0)',
          };
        case 'bottom-left':
          return {
            left: offsetX || 0,
            bottom: offsetY || 0,
            transform: 'translate3d(-50%,50%,0)',
          };
        case 'bottom-right':
          return {
            right: offsetX || 0,
            bottom: offsetY || 0,
            transform: 'translate3d(50%,50%,0)',
          };
        default:
          return {
            right: offsetX || 0,
            top: offsetY || 0,
            transform: 'translate3d(50%,-50%,0)',
          };
      }
    };
    const badgeStyles = useCSS({
      display: 'inline-flex',
      position: 'relative',
      '& > *:first-of-child': {
        borderRadius: vars.radius.rounded,
        visibility: show ? 'visible' : 'hidden',
        background: useThemedProps(theme,color),
        color: theme.colors.white,
        lineHeight: `${size}px`,
        minWidth: `${size}px`,
        fontSize: '12px',
        height: `${size}px`,
        textAlign: 'center',
        position: 'absolute',
        ...getInset(),
        boxShadow: `0 0 0 1px ${theme.colors.white}`,
        transition: 'visibility all .3s',
        ...useThemedCSS(theme, css),
      },
    });
    return (
      <div ref={ref} css={badgeStyles} {...props}>
        {['string', 'number'].includes(typeof content) || !content ? <span>{content}</span> : content}
        {children}
      </div>
    );
  },
);

export default Badge;
