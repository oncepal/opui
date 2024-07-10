/** @jsxImportSource @emotion/react */

import { useThemedCSS, useThemedProps, useCSS, useTheme, useThemeTextColor } from '../../styles/hooks';

import { ComponentBaseProps, Themed } from '../props';

type InputAppendProps = ComponentBaseProps & {
 
};

const InputAppend = ({ css, children }: InputAppendProps) => {
  const theme = useTheme();

  const style = useCSS({
    padding: theme.input.padding,
    flex: 'none',
    ...useThemedCSS(theme, css),
  });

  return <div css={style}>{children}</div>;
};

export default InputAppend;
