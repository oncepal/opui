/** @jsxImportSource @emotion/react */

import { keyframes } from '@emotion/react';
import { Theme } from '../../styles/themes';

import { ComponentBaseProps } from '../props';
import { useCSS, useThemedCSS, useTheme } from '../../styles/css';

type LoadingProps = ComponentBaseProps & {
  bit?: boolean;
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
  color = '#555',
  backgroudColor = '#f3f3f3',
  bit = false,
  css,
  ...props
}: LoadingProps & Omit<React.ComponentPropsWithoutRef<'div'>, 'color'>) => {
  const theme = useTheme();
  const kfSpin = keyframes({
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  });
  const kfBit = keyframes({
    '0%, 20%, 80%, 100%': {
      transform: 'scale(1)',
    },
    '50%': {
      transform: 'scale(1.5)',
    },
  });
  const styles = useCSS({
    '& .nomal': {
      border: `${borderWidth} solid ${
        typeof backgroudColor == 'string' ? backgroudColor : (backgroudColor as (theme: Theme) => string)(theme)
      }`,
      borderTop: `${borderWidth} solid ${
        typeof color == 'function' ? (color as (theme: Theme) => string)(theme) : color
      }`,
      borderRadius: '50%',
      width: width,
      height: width,
      animation: `${kfSpin} ${duration} linear infinite`,
    },
    '& .bit': {
      display: 'inline-block',
      position: 'relative',
      width: width,
      height: width,
      '& span': {
        position: 'absolute',
        width: '6px',
        height: '6px',
        background: typeof color == 'function' ? (color as (theme: Theme) => string)(theme) : color,
        borderRadius: '50%',
        animation: `${kfBit} ${duration} linear infinite`,
        '&:nth-child(1)': {
          animationDelay: '0s',
          top: '37px',
          left: '66px',
        },
        '&:nth-child(2)': {
          animationDelay: '-0.1s',
          top: '22px',
          left: '62px',
        },
        '&:nth-child(3)': {
          animationDelay: '-0.2s',
          top: '11px',
          left: '52px',
        },
        '&:nth-child(4)': {
          animationDelay: '-0.3s',
          top: '7px',
          left: '37px',
        },
        '&:nth-child(5)': {
          animationDelay: '-0.4s',
          top: '11px',
          left: '22px',
        },
        '&:nth-child(6)': {
          animationDelay: '-0.5s',
          top: '22px',
          left: '11px',
        },
        '&:nth-child(7)': {
          animationDelay: '-0.6s',
          top: '37px',
          left: '7px',
        },
        '&:nth-child(8)': {
          animationDelay: '-0.7s',
          top: '52px',
          left: '11px',
        },
        '&:nth-child(9)': {
          animationDelay: '-0.8s',
          top: '62px',
          left: '22px',
        },
        '&:nth-child(10)': {
          animationDelay: '-0.9s',
          top: '66px',
          left: '37px',
        },
        '&:nth-child(11)': {
          animationDelay: '-1s',
          top: '62px',
          left: '52px',
        },
        '&:nth-child(12)': {
          animationDelay: '-1.1s',
          top: '52px',
          left: '62px',
        },
      },
    },

    ...useThemedCSS(theme, css),
  });

  return (
    <div css={styles} {...props}>
      {!bit ? (
        <div className={`nomal`} />
      ) : (
        <div className={`bit`}>
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      )}
    </div>
  );
};

export default Loading;
