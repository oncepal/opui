/** @jsxImportSource @emotion/react */

import { useThemedCSS, useThemedProps, useCSS, useTheme, useThemeTextColor } from '../../styles/hooks';

import { ComponentBaseProps, Themed } from '../props';

type InputPrependProps = ComponentBaseProps & {
 
};

const InputPrepend = ({ css, children }: InputPrependProps) => {
  const theme = useTheme();

  const style = useCSS({
    padding: theme.input.padding,
    flex: 'none',
    ...useThemedCSS(theme, css),
  });

  return <div css={style}>{children}</div>;
};

export default InputPrepend;
