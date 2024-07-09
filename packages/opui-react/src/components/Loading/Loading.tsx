/** @jsxImportSource @emotion/react */

import { keyframes } from '@emotion/react';
import { Theme } from '../../styles/themes';

import { ComponentBaseProps } from '../props';
import { useCSS, useThemedCSS, useThemedProps,useTheme, useThemeTextColor } from '../../styles/hooks';
import RingLoading from './RingLoading';

type LoadingProps = ComponentBaseProps & {
  duration?: string;
  size?: string;
  color?: ((theme: Theme) => string) | string;
  borderWidth?: string;
  type?:string
};

const Loading = ({
    type,size,color,borderWidth,
    duration,
  ...props
}: Omit<React.ComponentPropsWithoutRef<'div'>, 'color'> & LoadingProps ) => {

  return (
    <RingLoading {...{size,color,borderWidth,
        duration,}}/>
  );
};

export default Loading;
