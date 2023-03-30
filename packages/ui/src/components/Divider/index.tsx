/** @jsxImportSource @emotion/react */

import { ReactNode } from 'react';
import { ComponentBaseProps, Flex, Margin, Padding, Themed } from '../props';
import { useMemo } from 'react';
import vars from '../../styles/vars';
import { usePadding, useMargin, useFlex, useCSS, useTheme, useThemedCSS, useThemedProps } from '../../styles/css';

type DividerProps = ComponentBaseProps &
  Margin &
  Padding &
  Flex &
  Partial<{
    size: Themed<string>;
    vertical: boolean;
    color: Themed<string>;
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
  size = '1px',
  vertical = false,
  dashed = false,
  color,
  css,
  children,
  ...props
}: DividerProps) => {
  const theme = useTheme();
  // Use border properties in different positions to easily and concisely simulate dividing lines
  const borderStyles = vertical
    ? {
        display: 'inline-flex',
        justifyContent: 'center',
        borderLeft: `${useThemedProps(theme, size)} ${dashed ? 'dashed' : 'solid'} ${
          useThemedProps(theme, color) || theme.colors.greyLight
        }
        `,
        height: useThemedProps(theme, size),
      }
    : {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        borderTop: `${useThemedProps(theme, size)} ${dashed ? 'dashed' : 'solid'} ${
          useThemedProps(theme, color) || theme.colors.greyLight
        }`,
      };

  const dividerStyles = useCSS({
    ...borderStyles,
    ...useMargin(props),
    ...usePadding(props),
    ...useFlex(props),
    ...useThemedCSS(theme, css),
  });
  const childrenStyles = useCSS({
    height: 'fit-content',
    padding: vertical ? '.5em 0' : '0 .5em',
    background: theme.darkMode ? theme.colors.black : theme.colors.white,
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
