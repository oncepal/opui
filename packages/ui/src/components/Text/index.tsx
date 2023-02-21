/** @jsxImportSource @emotion/react */

import { useMemo } from 'react';
import { usePadding, useMargin, useCSS, useTheme, useThemedCSS } from '../../styles/css';

import { Theme } from '../../styles/themes';
import vars from '../../styles/vars';
import { ComponentBaseProps, Margin, Padding, Themed } from '../props';
type TextProps = ComponentBaseProps &
  Partial<{
    gradient: string;
    ellipsis: string;
    thin: boolean;
    blod: boolean;
    color: Themed<string>;
    size: number;
    maxLength: number;
    dark: boolean;
  }> &
  Margin &
  Padding;

/**
 * Text component is the used to render text and paragraphs within an interface using well-defined typographic styles. It renders a <p> tag by default.
 * @param ...
 */
const Text = ({
  thin = false,
  dark = false,
  maxLength,
  size = 1,
  blod = false,
  gradient,
  ellipsis = '...',
  color,
  children,
  css,
  ...props
}: TextProps) => {
  const theme = useTheme();
  const computedColor: any = useMemo(() => {
    return (
      color || (dark ? (theme ? theme.color.white : vars.color.white) : theme ? theme.color.black : vars.color.black)
    );
  }, [color, theme, dark]);

  const styles = useCSS({
    fontSize: size + 'rem',
    fontWeight: blod ? 700 : thin ? 200 : 500,
    display: 'inline',
    ...useMargin(props),
    ...usePadding(props),
    textOverflow: maxLength ? 'ellipsis' : undefined,
    whiteSpace: maxLength ? 'nowrap' : undefined,
    overflow: maxLength ? 'hidden' : undefined,
    color: gradient ? 'transparent' : computedColor,
    ...(gradient && {
      backgroundImage: gradient,
      backgroundClip: 'text',
    }),
    ...useThemedCSS(theme, css),
  });

  return (
    <p css={styles} {...props}>
      {maxLength ? (children as string).substring(0, maxLength) + ellipsis : children}
    </p>
  );
};

export default Text;
