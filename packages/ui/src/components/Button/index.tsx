/** @jsxImportSource @emotion/react */

import { ComponentBaseProps, Margin, Themed } from '../props';
import vars from '../../styles/vars';
import { forwardRef, useMemo, ComponentPropsWithoutRef, MouseEvent } from 'react';
import { useThemedCSS, useCSS, useTheme, useMargin } from '../../styles/css';

type ButtonEvent = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => any;
};

type ButtonProps = ComponentBaseProps &
  Margin &
  ButtonEvent & {
    padding?: string;
    block?: boolean;
    disabled?: boolean;
    textColor?: string;
    text?: boolean;
    outlined?: boolean;
    icon?: boolean;
    rounded?: boolean;
    radius?: string;
    color?: Themed<string>;
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
 * @param textColor button text color
 * @param onClick click handler
 */
const Button = ({
  block = false,
  disabled = false,
  text = false,
  outlined = false,
  rounded = false,
  textColor,
  radius,
  css,
  icon = false,
  color,
  padding = '.2em 1em',
  children,
  onClick,
  ...props
}: ComponentPropsWithoutRef<'button'> & ButtonProps) => {
  const theme = useTheme();

  const computedBackgroundColor = useMemo(
    () => color || (theme.colors ? theme.colors.primary : vars.colors.purple),
    [color],
  );

  const styles = useCSS({
    verticalAlign: 'middle',
    textAlign: 'center',
    display: block ? 'block' : '',
    minWidth: block ? '100%' : '',
    width: icon ? (theme.spacing ? theme.spacing.xl : vars.spacing.xl) : '',
    height: icon ? (theme.spacing ? theme.spacing.xl : vars.spacing.xl) : '',
    padding: text || icon ? '' : padding,
    border: outlined ? `1px solid ${computedBackgroundColor}` : 'none',
    borderRadius: radius || (rounded ? (theme ? theme.radius.rounded : vars.radius.rounded) : vars.radius.base),
    color:
      text || outlined ? computedBackgroundColor : textColor || (theme.colors ? theme.colors.white : vars.colors.white),
    background: text || outlined ? 'transparent' : computedBackgroundColor,
    cursor: disabled ? 'not-allowed' : 'pointer',
    ...useMargin(props),
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
