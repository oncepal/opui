/** @jsxImportSource @emotion/react */

import { ComponentBaseProps, Margin, Padding, Themed } from '../props';
import { useThemedCSS, useCSS, useTheme, useMargin,usePadding, useThemedProps } from '../../styles/css';

type IconProps = ComponentBaseProps & Margin & Padding & {
  width?: string;
  height?: string;
  color?: Themed<string>;
  src?: string;
  onClick?: () => any;
};
const Icon = ({ width, height, color, css, src, onClick, ...props }: IconProps) => {
  const theme = useTheme();
  const styles = useCSS({
    display: 'inline-block',
    width: width||height||theme.spacing[10],
    height: height||width||theme.spacing[10],
    backgroundColor: useThemedProps(theme,color)||theme.colors.grey,
    mask: `url(${src}) no-repeat`,
    maskSize: '100% 100%',
    ...usePadding(props),
    ...useMargin(props),
    ...useThemedCSS(theme, css),
  });

  const handleClickIcon = () => {
    onClick?.();
  };
  return <div css={styles} onClick={handleClickIcon} {...props} />;
};

export default Icon;
