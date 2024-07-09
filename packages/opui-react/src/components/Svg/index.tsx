/** @jsxImportSource @emotion/react */

import { ComponentBaseProps, Margin, Padding, Themed } from '../props';
import { useThemedCSS, useCSS, useTheme, useMargin, usePadding, useThemedProps } from '../../styles/hooks';
import { ComponentPropsWithoutRef } from 'react';
import * as tokens from '../../styles/tokens'
type SvgProps = ComponentBaseProps &
  Margin &
  Padding & {
    width?: string;
    height?: string;
    color?: Themed<string>;
    src?: string;
    onClick?: () => any;
  };
const Svg = ({
  width,
  height,
  color,
  css,
  src,
  onClick,
  ...props
}: Omit<ComponentPropsWithoutRef<'div'>, 'color'> & SvgProps) => {
  const theme = useTheme();
  const styles = useCSS({
    display: 'inline-block',
    width: width || height || tokens.spacings[10],
    height: height || width || tokens.spacings[10],
    backgroundColor: useThemedProps(theme, color) || tokens.colors.grey,
    mask: `url(${src}) no-repeat`,
    maskSize: '100% 100%',
    ...usePadding(props),
    ...useMargin(props),
    ...useThemedCSS(theme, css),
  });

  const handleClickSvg = () => {
    onClick?.();
  };
  return <div css={styles} onClick={handleClickSvg} {...props} />;
};

export default Svg;
