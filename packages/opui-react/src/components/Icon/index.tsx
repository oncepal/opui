/** @jsxImportSource @emotion/react */

import { ComponentBaseProps, Margin, Padding, Themed } from '../props';
import { useThemedCSS, useCSS, useTheme, useMargin, usePadding, useThemedProps } from '../../styles/css';
import { ComponentPropsWithoutRef } from 'react';
type IconProps = Omit<ComponentBaseProps,'className'> &
  Margin &
  Padding & {
    width?: string;
    height?: string;
    size?:Themed<string>
    color?: Themed<string>;
    type?: string;
    src?:string
    onClick?: () => any;
  };
const Icon = ({
  width,
  height,
  color,size,
  css,src,
  type,
  onClick,
  ...props
}: Omit<ComponentPropsWithoutRef<'i'>, 'color'> & IconProps) => {
  const theme = useTheme();
  const styles = useCSS({
    width,
    height,
    fontSize:useThemedProps(theme,size),
    color:useThemedProps(theme,color),
    ...usePadding(props),
    ...useMargin(props),
    ...useThemedCSS(theme, css),
  });

  const handleClickIcon = () => {
    onClick?.();
  }; 
  
  return <i css={styles}  className={type} onClick={handleClickIcon} {...props} />
};

export default Icon;
