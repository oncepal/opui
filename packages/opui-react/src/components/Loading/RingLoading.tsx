/** @jsxImportSource @emotion/react */

import { keyframes } from '@emotion/react';
import { Theme } from '../../styles/themes';

import { ComponentBaseProps } from '../props';
import { useCSS, useThemedCSS, useThemedProps,useTheme, useThemeTextColor } from '../../styles/hooks';

type LoadingProps = ComponentBaseProps & {
  duration?: string;
  size?: string;
  color?: ((theme: Theme) => string) | string;
  borderWidth?: string;
};

const RingLoading = ({
  duration = '1.2s',
  size = '2em',
  borderWidth = '3px',
  color,
  css,
  ...props
}: Omit<React.ComponentPropsWithoutRef<'div'>, 'color'> &LoadingProps ) => {
  const theme = useTheme();
  const kfSpin = keyframes({
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(1turn)',
    },
  });

  const useBorder = (type:string)=>({
    border: `${borderWidth} ${type} ${ useThemedProps(theme,color) ||useThemeTextColor(theme)}`,
      borderColor: `${useThemedProps(theme,color) ||useThemeTextColor(theme)} transparent transparent transparent`,
  })

  const styles = useCSS({
    display: 'inline-flex',
    justifyContent:'center',
    alignItems:'center',
    position: 'relative',
    width: size,
    height: size,
    '& div': {
      position: 'absolute',
      height: '100%',
      width:'100%',
      borderRadius: '50%',
      animation: `${kfSpin} .8s cubic-bezier(0.5, 0, 0.5, 1) infinite`,
      
    },
    '& div:nth-child(1)': {
      ...useBorder('solid'),
    },
    '& div:nth-child(2)': {
      ...useBorder('dashed'),
      opacity:.2,
      animationDelay: '0.15s',
    },
    ...useThemedCSS(theme, css),
  });

  return (
    <div css={styles} {...props}>
      <div></div>
      <div></div>
   
    </div>
  );
};

export default RingLoading;
