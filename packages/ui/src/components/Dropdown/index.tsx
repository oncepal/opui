/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import { ComponentBaseProps } from '../props';

import { useThemedCSS, useCSS, useTheme } from '../../styles/css';

type DropdownProps = ComponentBaseProps & {
  show?: boolean;
};

const Dropdown = ({ css, children, ...props }: DropdownProps) => {
  const theme = useTheme();
  const styles = useCSS({
    ...useThemedCSS(theme, css),
  });

  return <div css={styles} {...props}></div>;
};

export default Dropdown;
