/** @jsxImportSource @emotion/react */

import { keyframes } from '@emotion/react';
import { Theme } from '../../styles/themes';

import { ComponentBaseProps } from '../props';
import { useCSS, useThemedCSS, useTheme } from '../../styles/css';

type LoadingProps = ComponentBaseProps & {
  duration?: string;
  width?: string;
  backgroudColor?: ((theme: Theme) => string) | string;
  color?: ((theme: Theme) => string) | string;
  borderWidth?: string;
};

const Loading = ({
  duration = '1.2s',
  width = '4em',
  borderWidth = '2px',
  color = '#1c4c5b',
  backgroudColor = '#f3f3f3',
  css,
  ...props
}: Omit<React.ComponentPropsWithoutRef<'div'>, 'color'> &LoadingProps ) => {
  const theme = useTheme();
  const kfSpin = keyframes({
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  });

  const styles = useCSS({
    // color,
    display: 'inline-block',
    position: 'relative',
    width: '80px',
    height: '80px',
    '& div': {
      position: 'absolute',
      width: '64px',
      height: '64px',
      margin: '8px',
      border: `8px solid ${color}`,
      borderRadius: '50%',
      animation: `${kfSpin} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite`,
      borderColor: `${color} transparent transparent transparent`,
    },
    '& div:nth-child(1)': {
      animationDelay: '-0.45s',
    },
    '& div:nth-child(2)': {
      animationDelay: '-0.35s',
    },
    '& div:nth-child(3)': {
      animationDelay: '-0.15s',
    },
    ...useThemedCSS(theme, css),
  });

  return (
    <div css={styles} {...props}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loading;
