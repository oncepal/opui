/** @jsxImportSource @emotion/react */

import { keyframes } from '@emotion/react';
import { Theme } from '../../styles/themes';

import { ComponentBaseProps } from '../props';
import { useCSS, useThemedCSS, useThemedProps, useTheme, useThemeTextColor } from '../../styles/hooks';
import RingLoading from './RingLoading';

type LoadingProps = ComponentBaseProps & {
  duration?: string;
  size?: string;
  color?: ((theme: Theme) => string) | string;
  borderWidth?: string;
  type?: string;
};

const Loading = ({
  type,
  size,
  color,
  borderWidth,
  duration,
  ...props
}: LoadingProps) => {
  const theme = useTheme()
  const styles = useCSS({
    height:'100%'
  })
    return (
    <div css={styles}>
        
      <RingLoading {...{ size, color, borderWidth, duration }} />
    </div>
  );
};

export default Loading;
