/** @jsxImportSource @emotion/react */

import { useThemedCSS, useThemedProps, useCSS, useTheme, useThemeTextColor } from '../../styles/hooks';

import { ComponentBaseProps, Themed } from '../props';

type InputAppendProps = ComponentBaseProps & {
  color?: Themed<string>;
};

/**
 * inputs fields are used to get the user input in a text field.
 * @param ...
 */
const InputAppend = ({ color, css, children }: InputAppendProps) => {
  const theme = useTheme();

  const padding = '.5rem 1rem .5rem 1rem';

  const style = useCSS({
    padding,
    flex:'none',

    ...useThemedCSS(theme, css),
  });

  return <div css={style}>{children}</div>;
};

export default InputAppend;
