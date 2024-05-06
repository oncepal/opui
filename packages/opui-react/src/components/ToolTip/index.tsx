/** @jsxImportSource @emotion/react */

import { useEffect, useState } from 'react';

import { ComponentBaseProps } from '../props';
import { useCSS, useTheme, useThemedCSS, useThemedProps } from '../../styles/css';
import { Theme } from '../../styles/themes';
import vars from '../../styles/vars';

type TooltipProps = ComponentBaseProps & {
  backgroundColor?: ((theme: Theme) => string) | string;
  color?: ((theme: Theme) => string) | string;
  content?: React.ReactNode;
  width?: string;
  show?: boolean;
  position?: 'top' | 'left' | 'right' | 'bottom';
};

/**
 * Tooltips displays informative text when users hover, focus, or click an element.
 * ```js
 * <Tooltip content={"hellow"}>
      <Button>
        Do hover here
      </Button>
    </Tooltip>
 * ```
 * @param backgroundColor tooltip background color
 * @param color tooltip text color
 * @param width tooltip width color
 * @param position tooltip show position
 * @param content tooltip content text

 */
const ToolTip = ({
  css,
  children,
  className,
  backgroundColor = '#000',
  color = '#fff',
  width = '70px',
  position = 'right',
  show,
  content,
  ...props
}: TooltipProps & Omit<React.ComponentPropsWithoutRef<'div'>, 'color'>) => {
  const [computedPosition, setComputedPosition] = useState({});
  const [afterPosition, setAfterPosition] = useState({});
  const theme = useTheme();
  const styles = useCSS({
    position: 'relative',
    display: 'inline-block',
    ...useThemedCSS(theme, css),
    '& .tooltiptext': {
      visibility: show ? 'visible' : 'hidden',
      fontSize: '12px',
      width: width,
      backgroundColor:
      useThemedProps(theme,backgroundColor)||theme.colors.black,
      color: useThemedProps(theme,color)||theme.colors.white,
      textAlign: 'center',
      borderRadius: '6px',
      padding: '5px',
      position: 'absolute',
      ...computedPosition,
      zIndex: 1,
      '&::after': {
        content: '""',
        position: 'absolute',
        ...afterPosition,
        borderWidth: '5px',
        borderStyle: 'solid',
        borderColor: 'transparent black transparent transparent',
      },
    },
    '&:hover .tooltiptext': {
      visibility: show ? 'visible' : 'hidden',
    },
  });
  useEffect(() => {
    switch (position) {
      case 'top':
        setComputedPosition({
          top: '-3em',
          left: '0.6em',
        });
        setAfterPosition({
          top: '2.8em',
          right: '6.5em',
          marginTop: '-7.5px',
          transform: 'rotate(270deg)',
        });
        break;
      case 'left':
        setComputedPosition({
          top: '-5px',
          left: '-8.5em',
        });
        setAfterPosition({
          top: '50%',
          right: '-0.86em',
          marginTop: '-5px',
          transform: 'rotate(180deg)',
        });
        break;
      case 'bottom':
        setComputedPosition({
          bottom: '-3.5em',
          left: '0.6em',
        });
        setAfterPosition({
          top: '-0.2em',
          right: '6.5em',
          marginTop: '-7.5px',
          transform: 'rotate(90deg)',
        });
        break;
      case 'right':
        setComputedPosition({
          top: '-5px',
          left: '180%',
        });
        setAfterPosition({
          top: '50%',
          right: '100%',
          marginTop: '-5px',
        });
        break;
      default:
        break;
    }
  }, [position]);
  return (
    <div css={styles} {...props}>
      {children}
      <span className={`tooltiptext`}>{content}</span>
    </div>
  );
};
export default ToolTip;
