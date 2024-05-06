/** @jsxImportSource @emotion/react */

import { keyframes } from '@emotion/react';
import React from 'react';
import { useCSS, useTheme, useThemedCSS } from '../../styles/css';
import { Theme } from '../../styles/themes';
import { ComponentBaseProps } from '../props';

type ProgressProps = ComponentBaseProps & {
  radius?: number;
  height?: string;
  percent?: number;
  backgroundColor?: string;
  color?: string;
  animated?: boolean;
  tips?: string;
  content?: string;
};

/**
 * The Progress component allows you to view the progress of any activity.
 * ```
 *  <Progress color="primary" percent={75} />
 * ```
 * @param radius progress border radius
 * @param content progress content text
 * @param tips progress tips content
 * @param height progress height
 * @param percent progress border radius
 * @param backgroundColor progress backgroundColor
 * @param color progress color

 */
const Progress = ({
  content = '',
  tips = '',
  radius = 999,
  height = '1em',
  percent = 0,
  backgroundColor,
  color,
  animated = false,
  className,
  css,
  ...props
}: ProgressProps & React.ComponentPropsWithoutRef<'div'>) => {
  const theme = useTheme();
  const kf = keyframes({
    from: {
      width: '0%',
    },
    to: {
      width: percent + '%',
    },
  });

  const kfText = keyframes({
    from: {
      left: '0%',
    },
    to: {
      left: `calc(${percent}% - ${Math.max(0, content.length - 2.5)}em)`,
    },
  });
  const kfTips = keyframes({
    from: {
      left: '0%',
    },
    to: {
      left: `calc(${percent}% - ${Math.max(0, tips.length / 2)}em)`,
    },
  });
  const styles = useCSS({
    position: 'relative',
    height: height,
    backgroundColor: backgroundColor || theme.colors.accent,
    '& > .progress-bar': {
      height: height,
      width: percent + '%',
      backgroundColor: color || theme?.colors?.primary || '#5568FE',
      animation: animated ? `${kf} 1.5s` : '',
    },
    '&, &>.progress-bar': {
      borderRadius: radius,
    },
    ...(content.length > 0 && {
      '& > .progress-content': {
        fontSize: '.8rem',
        position: 'absolute',
        left: `calc(${percent}% - ${Math.max(0, content.length - 2.5)}em)`,
        top: 0,
        bottom: 0,
        color: color || theme?.colors?.white || '#FEFEFE',
        animation: animated ? `${kfText} 1.5s` : '',
      },
    }),
    ...(tips.length > 0 && {
      '& > .progress-tips': {
        fontSize: '.8rem',
        position: 'absolute',
        left: `calc(${percent}% - ${Math.max(0, tips.length / 2)}em)`,
        animation: animated ? `${kfTips} 1.5s` : '',
        transform: 'translateY(-230%)',
        padding: '2px 16px',
        borderRadius: '4px',
        backgroundColor: color || theme?.colors?.primary || '#5568FE',
        color: color || theme?.colors?.white || '#FEFEFE',
        '&:before': {
          content: '""',
          width: 0,
          height: 0,
          border: '.6em solid transparent',
          borderTopColor: color || theme?.colors?.primary || '#5568FE',
          position: 'absolute',
          bottom: 0,
          transform: 'translateX(5%) translateY(80%)',
        },
      },
    }),
    ...useThemedCSS(theme, css),
  });

  return (
    <div css={styles} role='progressbar' {...props}>
      <div className='progress-bar' />
      {content && <div className='progress-content'>{content}</div>}
      {tips && <div className='progress-tips'>{tips}</div>}
    </div>
  );
};

export default Progress;
