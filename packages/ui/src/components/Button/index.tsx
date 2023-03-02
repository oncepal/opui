/** @jsxImportSource @emotion/react */

import { ComponentBaseProps, Margin, Themed } from '../props';
import vars from '../../styles/vars';
import { forwardRef, useMemo, ComponentPropsWithoutRef, MouseEvent } from 'react';
import { useThemedCSS, useCSS, useTheme, useMargin, useThemedProp } from '../../styles/css';

type ButtonEvent = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => any;
};

type ButtonProps = ComponentBaseProps &
  Margin &
  ButtonEvent & {
    padding?: string;
    block?: boolean;
    disabled?: boolean;
    text?: boolean;
    outlined?: boolean;
    icon?: boolean;
    rounded?: boolean;
    radius?: string;
    color?: Themed<string>;
    gradient?: string;
  };

/**
 * Buttons allow users to perform actions and choose with a single tap.
 * ```js
 * <Button>submit</Button>
 * ```
 * @param block full width
 * @param disabled button disabled
 * @param text text button style
 * @param outlined outlined button style
 * @param rounded rounded button style
 * @param radius button border radius
 * @param icon icon button style
 * @param color button color
 * @param padding button size

 * @param onClick click handler
 */
const Button = ({
  block = false,
  disabled = false,
  text = false,
  outlined = false,
  rounded = false,
  gradient,
  radius,
  css,
  icon = false,
  color,
  padding,
  children,
  onClick,
  ...props
}: ComponentPropsWithoutRef<'button'> & ButtonProps) => {
  const theme = useTheme();

  const styles = useCSS({
    textAlign: 'center',
    display: block ? 'block' : '',
    minWidth: block ? '100%' : '',
    lineHeight: '1.5em',
    fontWeight: theme.fontWeights.medium,
    width: icon ? theme.spacing.xl : '',
    height: icon ? theme.spacing.xl : '',
    padding: text || icon ? '' : padding || `${theme.spacing[3]} ${theme.spacing.md}`,
    border: outlined ? `1px solid ${useThemedProp(theme, color) || theme.colors.primary}` : 'none',
    borderRadius: radius || (rounded ? theme.radius.rounded : theme.radius.base),
    color:
      useThemedProp(theme, color) ||
      (text || icon || outlined
        ? theme.colors.primary
        : gradient
        ? theme.darkMode
          ? theme.colors.white
          : theme.colors.black
        : theme.darkMode
        ? theme.colors.white
        : theme.colors.primary),
    background:
      text || icon || outlined ? 'transparent' : gradient || useThemedProp(theme, color) || theme.colors.primary,
    cursor: disabled ? 'not-allowed' : 'pointer',
    ...useMargin(props),
    ':hover': {
      filter: 'brightness(1.1)',
    },

    ...useThemedCSS(theme, css),
  });

  const handleClickButton = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onClick?.();
  };

  return (
    <button onClick={handleClickButton} css={styles} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
