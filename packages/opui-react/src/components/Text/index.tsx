/** @jsxImportSource @emotion/react */

import { jsx } from '@emotion/react';
import { useMemo, createElement } from 'react';
import { usePadding, useMargin, useCSS, useTheme, useThemedCSS, useThemedProps } from '../../styles/hooks';

import * as tokens from '../../styles/tokens';
import { ComponentBaseProps, Margin, Padding, Themed } from '../props';
type TextProps = ComponentBaseProps &
  Partial<{
    opacity:Themed<number>
    h1: boolean;
    h2: boolean;
    h3: boolean;
    h4: boolean;
    h5: boolean;
    h6: boolean;
    p: boolean;
    gradient: string;
    del: boolean;
    ellipsis: string;
    blockquote: boolean;
    thin: boolean;
    blod: boolean;
    color: Themed<string>;
    size: Themed<string>;
    maxLength: number;
    span: boolean;
    i: boolean;
    nowrap: boolean;
    white: boolean;
    grey: boolean;
    left: boolean;
    center: boolean;
    right: boolean;
  }> &
  Margin &
  Padding;

/**
 * 文本组件用于使用定义明确的排版样式在界面中呈现文本和段落。它默认呈现一个 <p> 标签。
 * @param ...
 */
const Text = ({
  opacity,
  thin = false,
  white = false,
  maxLength,
  size,
  blod = false,
  gradient,
  nowrap,
  ellipsis = '...',
  left,
  center,
  grey,
  right,
  color,
  children,
  css,
  ...props
}: TextProps) => {
  const theme = useTheme();
  const styles = useCSS({
    opacity:useThemedProps(theme,opacity),
    fontSize: useThemedProps<string>(theme, size),
    lineHeight: theme.text.lineHeight,
    fontWeight: blod ? tokens.fontWeights.bold : thin ? tokens.fontWeights.thin : tokens.fontWeights.normal,
    textAlign: left ? 'left' : center ? 'center' : right ? 'right' : 'left',
    textOverflow: maxLength ? 'ellipsis' : undefined,
    whiteSpace: nowrap ? 'nowrap' : undefined,
    overflow: maxLength ? 'hidden' : undefined,
    color: gradient
      ? 'transparent'
      : useThemedProps<string>(theme, color) ||
        (white
          ? theme.colors.textInDarkBackground
          : grey
          ? theme.colors.lightGreyText
          : theme.isDarkMode
          ? theme.colors.textInDarkBackground
          : theme.colors.textInLightBackground),

    ...(gradient && {
      backgroundImage: gradient,
      backgroundClip: 'text',
    }),
    ...useMargin(props),
    ...usePadding(props),
    ...useThemedCSS(theme, css),
  });
  const getTextElement = () => {
    const { h1, h2, h3, h4, h5, h6, del, p, blockquote, i } = props;

    if (h1) return 'h1';
    else if (h2) return 'h2';
    else if (h3) return 'h3';
    else if (h4) return 'h4';
    else if (h5) return 'h5';
    else if (h6) return 'h6';
    else if (del) return 'del';
    else if (p) return 'p';
    else if (blockquote) return 'blockquote';
    else if (i) return 'i';
    else return 'span';
  };

  return jsx(
    getTextElement(),
    {
      css: styles,
      ...props,
    },
    maxLength
      ? (children + '').length > maxLength
        ? (children + '').substring(0, maxLength) + ellipsis
        : children
      : children,
  );
};

export default Text;
