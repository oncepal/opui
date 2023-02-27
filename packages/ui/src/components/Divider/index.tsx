/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import { ReactNode } from 'react';
import { ComponentBaseProps, Flex, Margin, Padding } from '../props';
import { useMemo } from 'react';
import vars from '../../styles/vars';
import { usePadding, useMargin, useFlex, useCSS, useTheme, useThemedCSS } from '../../styles/css';

type DividerProps = ComponentBaseProps &
  Margin &
  Padding &
  Flex &
  Partial<{
    size: number;
    vertical: boolean;
    color: string;
    dashed: boolean;
    text: ReactNode;
  }>;

/**
 * A divider is a thin line that groups content in lists and layouts.
 * common renders as an <hr> by default.
 *
 * example:
 * ```js
 * <Divider color="red" size={6} />
 * ```
 * main props:
 * @param size Thickness of dividing line.
 */
const Divider = ({
  text,
  size = 1,
  vertical = false,
  dashed = false,
  color,
  css,
  children,
  ...props
}: DividerProps) => {
  const theme = useTheme();
  // Use border properties in different positions to easily and concisely simulate dividing lines
  const borderStyles = useMemo(
    () =>
      vertical
        ? {
            display: 'inline-flex',
            justifyContent: 'center',
            borderLeft: `${size}px ${dashed ? 'dashed' : 'solid'}  ${
              color || (theme ? theme.colors.greyLight : vars.colors.greyLight)
            }`,
          }
        : {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',

            borderTop: `${size}px ${dashed ? 'dashed' : 'solid'}  ${
              color || (theme ? theme.colors.greyLight : vars.colors.greyLight)
            }`,
          },
    [size, dashed, color],
  );
  const dividerStyles = useCSS({
    ...borderStyles,
    ...useMargin(props),
    ...usePadding(props),
    ...useFlex(props),
    ...(children && {
      '& > *': {
        height: 'fit-content',
        padding: vertical ? '.5em 0' : '0 .5em',
        background: vars.colors.white,
        textAlign: 'center',
        transform: vertical ? 'translate3d(-50%,50%,0)' : 'translateY(-50%)',
      },
    }),
    ...useThemedCSS(theme, css),
  });
  const childrenStyles = useCSS({
    height: 'fit-content',
    padding: vertical ? '.5em 0' : '0 .5em',
    background: vars.colors.white,
    textAlign: 'center',
    transform: vertical ? 'translate3d(-50%,50%,0)' : 'translateY(-50%)',
  });
  return (
    <div css={dividerStyles} {...props}>
      {children && <span css={childrenStyles}>{children}</span>}
    </div>
  );
};

export default Divider;
