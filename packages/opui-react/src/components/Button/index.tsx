/** @jsxImportSource @emotion/react */

import { ComponentBaseProps, Margin, Themed } from '../props';
import { forwardRef, useMemo, ComponentPropsWithoutRef, MouseEvent } from 'react';
import { useThemedCSS, useCSS, useTheme, useMargin, useThemedProps } from '../../styles/css';

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
    radius?: Themed<string>;
    color?: Themed<string>;
    gradient?: string;
  };

/**
 * 
按钮允许用户执行操作并通过单击进行选择。
 * ```js
 * <Button>submit</Button>
 * ```
 * @param block 占满宽度
 * @param disabled 不可点击
 * @param text text 类型按钮
 * @param outlined outlined 类型按钮
 * @param rounded rounded 类型按钮
 * @param radius 按钮的 border radius
 * @param icon icon 类型按钮
 * @param color 背景色
 * @param padding button 内边距尺寸
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
}: Omit<ComponentPropsWithoutRef<'button'>, 'color'> & ButtonProps) => {
  const theme = useTheme();

  const styles = useCSS({
    textAlign: 'center',
    display: block ? 'flex' : 'inline-flex',
    gap: theme.spacing[3],
    minWidth: block ? '100%' : '',
    lineHeight: theme.lineHeights.base,
    fontWeight: theme.fontWeights.medium,
    alignItems: 'center',
    justifyContent:'center',
    width: icon ? theme.spacing.xl : '',
    height: icon ? theme.spacing.xl : '',
    padding: text || icon ? padding || '' : padding || `${theme.spacing.xs} ${theme.spacing.md}`,
    border: outlined ? `1px solid ${useThemedProps(theme, color) || theme.colors.primary}` : 'none',
    borderRadius: useThemedProps(theme, radius) || (rounded ? theme.radius.rounded : theme.radius.base),
    color:
      text || icon || outlined
        ? useThemedProps(theme, color) || theme.colors.primary
        : gradient
        ? theme.darkMode
          ? theme.colors.white
          : theme.colors.black
        : theme.darkMode
        ? theme.colors.white
        : theme.colors.white,
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
