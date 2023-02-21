/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import { ComponentBaseProps, Themed } from '../props';

import { useThemedCSS, useCSS, useTheme, useColor } from '../../styles/css';
import vars from '../../styles/vars';

type IconProps = ComponentBaseProps & {
  width?: string;
  height?: string;
  color?: string;
  src?: string;

  onClick?: () => any;
};
const Icon = ({ width, height, color, css, src, onClick, ...props }: IconProps) => {
  const theme = useTheme();
  const styles = useCSS({
    display: 'inline-block',
    width: width,
    height: height,
    backgroundColor: color,
    mask: `url(${src}) no-repeat`,
    maskSize: '100% 100%',
    ...useThemedCSS(theme, css),
  });

  const handleClickIcon = () => {
    onClick?.();
  };
  return <div css={styles} onClick={handleClickIcon} {...props} />;
};

export default Icon;
