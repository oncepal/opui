/** @jsxImportSource @emotion/react */

import { ComponentBaseProps, Themed } from '../props';
import { ComponentPropsWithoutRef, MouseEvent } from 'react';
import { useCSS, useTheme, useThemedCSS, useThemedProps } from '../../styles/hooks';
import * as tokens from '../../styles/tokens'
export type ChipProps = ComponentBaseProps & {
  outlined?: boolean;
  color?: Themed<string>;
  radius?: Themed<string>;
  hollow?: boolean;
  show?: boolean;
  rounded?: boolean;
};
/**
 * Chips appear in form fields
 *
 * ```js
 * <Chip color="#eee">greet!</Chip>
 * ```
 * @param outlined outlined style
 * @param color tag color
 * @param hollow weather the background hollow out
 * @param radius tag border radius size
 */
const Chip = ({
  outlined = false,
  show = true,
  rounded,
  radius,
  color,
  css,
  children,
  onClick,
  ...props
}: Omit<ComponentPropsWithoutRef<'span'>, 'color'> & ChipProps) => {
  const theme = useTheme();
  const getComputedColor = () => useThemedProps(theme, color) || theme.colors.primary;
  const styles =  useCSS({
    position: 'relative',
    display: show ? 'inline-flex' : 'none',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'fit-content',
    padding: '0.2rem 0.6rem',
    borderRadius: useThemedProps(theme, radius) || (rounded ? tokens.radius.rounded : tokens.radius.base),
    ...(!outlined
      ? {
          background: getComputedColor(),
          color: theme.colors.textInDarkBackground,
        }
      : {
          border: '1px solid ' + getComputedColor(),
          color: getComputedColor(),
        }),

    ...useThemedCSS(theme, css),
  });
  
  const handleClickChip = (e: MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    onClick?.();
  };

  return (
    <span onClick={handleClickChip} css={styles} {...props}>
      {children}
    </span>
  );
};

export default Chip;
