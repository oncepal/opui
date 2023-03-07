/** @jsxImportSource @emotion/react */

import { jsx } from '@emotion/react';
import { useMemo, createElement } from 'react';
import { usePadding, useMargin, useCSS, useTheme, useThemedCSS, useThemedProps } from '../../styles/css';

import vars from '../../styles/vars';
import { ComponentBaseProps, Margin, Padding, Themed } from '../props';
type TextProps = ComponentBaseProps &
  Partial<{
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
    white: boolean;
  }> &
  Margin &
  Padding;

/**
 * Text component is the used to render text and paragraphs within an interface using well-defined typographic styles. It renders a <p> tag by default.
 * @param ...
 */
const Text = ({
  thin = false,
  white = false,
  maxLength,
  size,
  blod = false,
  gradient,
  ellipsis = '...',
  color,
  children,
  css,
  ...props
}: TextProps) => {
  const theme = useTheme();
  const styles = useCSS({
    fontSize: useThemedProps<string>(theme, size),
    lineHeight: theme.lineHeights.base,
    fontWeight: blod ? theme.fontWeights.bold : thin ? theme.fontWeights.thin : theme.fontWeights.normal,
    ...useMargin(props),
    ...usePadding(props),
    textOverflow: maxLength ? 'ellipsis' : undefined,
    whiteSpace: maxLength ? 'nowrap' : undefined,
    overflow: maxLength ? 'hidden' : undefined,
    color: gradient
      ? 'transparent'
      : useThemedProps<string>(theme, color) ||
        (white ? theme.colors.white : theme.darkMode ? theme.colors.white : theme.colors.black),
    ...(gradient && {
      backgroundImage: gradient,
      backgroundClip: 'text',
    }),
    ...useThemedCSS(theme, css),
  });
  const getTextElement = () => {
    const { h1, h2, h3, h4, h5, h6, del, span, blockquote, i } = props;

    if (h1) return 'h1';
    else if (h2) return 'h2';
    else if (h3) return 'h3';
    else if (h4) return 'h4';
    else if (h5) return 'h5';
    else if (h6) return 'h6';
    else if (del) return 'del';
    else if (span) return 'span';
    else if (blockquote) return 'blockquote';
    else if (i) return 'i';
    else return 'p';
  };

  return jsx(
    getTextElement(),
    {
      css: styles,
      ...props,
    },
    maxLength ? (children as string).substring(0, maxLength) + ellipsis : children,
  );
};

export default Text;
