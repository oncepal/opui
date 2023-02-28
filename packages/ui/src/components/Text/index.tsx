/** @jsxImportSource @emotion/react */

import { useMemo } from 'react';
import { usePadding, useMargin, useCSS, useTheme, useThemedCSS } from '../../styles/css';

import { Theme } from '../../styles/themes';
import vars from '../../styles/vars';
import { ComponentBaseProps, Margin, Padding, Themed } from '../props';
type TextProps = ComponentBaseProps &
  Partial<{
    h1:boolean
    h2:boolean
    h3:boolean
    h4:boolean
    h5:boolean
    h6:boolean
    p:boolean
    gradient: string;
    del:boolean
    ellipsis: string;
    blockquote:boolean
    thin: boolean;
    blod: boolean;
    color: Themed<string>;
    size: number;
    maxLength: number;
    span:boolean
    i:boolean
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
      color ||
      (dark
        ? theme.colors
          ? theme.colors.white
          : vars.colors.white
        : theme.colors
        ? theme.colors.black
        : vars.colors.black)
    );
  }, [color, theme, dark]);

  const styles = useCSS({
    fontSize: size + 'rem',
    fontWeight: blod ? 700 : thin ? 200 : 500,
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
  const T = createElement()

  return (
    <p css={styles} {...props}>
      {maxLength ? (children as string).substring(0, maxLength) + ellipsis : children}
    </p>
  );
};

export default Text;
