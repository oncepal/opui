/** @jsxImportSource @emotion/react */

import { ComponentBaseProps, Margin, Themed } from '../props';
import { ComponentPropsWithoutRef, MouseEvent } from 'react';
import { useThemedCSS, useCSS, useTheme, useMargin, useThemedProps, useFlexCenter } from '../../styles/hooks';
import * as tokens from '../../styles/tokens'
type ButtonEvent = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => any;
};

type ButtonProps = ComponentBaseProps &
  Margin &
  ButtonEvent & {
    padding?: string;
    fullWidth?: boolean;
    disabled?: boolean;
    text?: boolean;
    outlined?: boolean;
    icon?: boolean;
    rounded?: boolean;
    radius?: Themed<string>;
    color?: Themed<string>;
    gradient?: string;
  };

/**
 * 
 * 按钮允许用户执行操作并通过单击进行选择。
 * ```js
 * <Button>submit</Button>
 * ```
 * @param fullWidth 占满宽度
 * @param disabled 不可点击
 * @param text text类型按钮
 * @param outlined outlined 类型按钮
 * @param rounded rounded 类型按钮
 * @param radius border radius
 * @param icon icon类型按钮
 * @param color 自适应表现色
 * @param padding 内边距
 */
const Button = ({
  fullWidth = false,
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
}: Omit<ComponentPropsWithoutRef<'button'>, 'color'> & ButtonProps) => {
  const theme = useTheme();

  const styles = useCSS({
    ...useFlexCenter(),
    textAlign: 'center',
    display: fullWidth ? 'flex' : 'inline-flex',
    gap: tokens.spacings.xs,
    minWidth: fullWidth ? '100%' : '',
    lineHeight: tokens.lineHeights.base,
    fontWeight: tokens.fontWeights.medium,
    
    width: icon ? tokens.spacings.xl : '',
    height: icon ? tokens.spacings.xl : '',
    padding: text || icon ? padding || '' : padding || theme.button.padding,
    border: outlined ? `1px solid ${useThemedProps(theme, color) || theme.colors.primary}` : 'none',
    borderRadius: useThemedProps(theme, radius) || (rounded ? tokens.radius.rounded : tokens.radius.md),
    color:
      text || icon || outlined
        ? useThemedProps(theme, color) || theme.colors.primary
        : gradient
        ? theme.isDarkMode
          ? theme.colors.textInDarkBackground
          : theme.colors.textInLightBackground
        : theme.isDarkMode
        ? theme.colors.textInDarkBackground
        : theme.colors.textInDarkBackground,
    background:
      text || icon || outlined ? 'transparent' : gradient || useThemedProps(theme, color) || theme.colors.primary,
    cursor: disabled ? 'not-allowed' : 'pointer',
    ':hover': {
      filter: 'brightness(.9)',
    },
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
