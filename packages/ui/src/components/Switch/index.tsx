/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import { ComponentBaseProps, Themed } from '../props';
import { CSSProperties, memo, ReactNode, useCallback, useMemo } from 'react';
import vars from '../../styles/vars';
import { useCenter, useThemedCSS, useTheme, useCSS, useThemedProps } from '../../styles/css';
import { darken } from 'polished';
import { rotate } from '../../styles/keyframes';

type SwitchProps = ComponentBaseProps & {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
  on?: boolean;
  trackColorOff?: Themed<string>;
  trackColorOn?: Themed<string>;
  trackMinWidth?: string;
  trackHeight?: string;
  thumbWidth?: string;
  thumbHeight?: string;
  thumbActiveOffset?: string;
  thumbStartPosition?: string;
  radius?: string;
  disabled?: boolean;
  loading?: boolean;
  textOn?: ReactNode;
  textOff?: ReactNode;
  thumbStyles?: Themed<CSSProperties>;
  trackStyles?: Themed<CSSProperties>;
};
/**
 * A Switch is a visual toggle between two mutually exclusive states — on and off,
 * ```js
 * const [on, setOn] = useState(false);
 *
 * <Switch
 *   on={on}
 *   onChange={() => setOn(v => !v)}
 *   trackColorOn="red"
 *  />
 * ```
 *
 * @param thumbActiveOffset thumb width changing with press .
 * @param thumbStartPosition thumb start position on the track's left.
 */
const Switch = memo(
  ({
    on = false,
    onChange,
    trackColorOff,
    trackColorOn,
    trackMinWidth = '3em',
    trackHeight = '1.75em',
    thumbStyles,
    trackStyles,
    thumbWidth = '1.25em',
    thumbHeight = '1.25em',
    textOn,
    textOff,
    radius,
    className,
    loading,
    thumbActiveOffset = '0.3125em',
    thumbStartPosition = '4px',
    css,
    disabled,
    ...props
  }: SwitchProps) => {
    const theme = useTheme();

    const getTrackColorOff = useCallback(() => {
      return theme
        ? useThemedProps<string>(theme, trackColorOff) || theme.colors.greyLight
        : useThemedProps<string>(theme, trackColorOff) || vars.colors.greyLight;
    }, [trackColorOff]);

    const loadingStyles = useMemo(
      () => ({
        content: '""',
        borderRadius: radius || (theme ? theme.radius.rounded : '999px'),
        borderTop: '3px solid transparent',
        borderRight: '3px solid transparent',
        animation: `${rotate()} .6s ease .25s infinite`,
        transition: 'all .25s ease',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }),
      [radius],
    );

    const styles = useCSS({
      //switch track css implement
      overflow: 'hidden',
      padding: '5px',
      display: 'inline-flex',
      alignItems: 'center',
      cursor: 'pointer',
      // ensure the min-width contain the text
      minWidth: loading ? trackHeight : trackMinWidth,
      width: loading ? trackHeight : '',
      height: trackHeight,
      opacity: disabled ? 0.1 : 1,
      background: getTrackColorOff(),
      borderRadius: radius || theme.radius.rounded,
      position: 'relative',
      transition: 'all .25s ease',

      // render loading component
      ...(loading && {
        '&::after': {
          border: `3px solid ${trackColorOn || theme.colors.primary}`,
          // ...loadingStyles,
          zIndex: 2,
        },
        '&::before': {
          border: `3px dashed ${trackColorOn || theme.colors.primary}`,
          // ...loadingStyles,
          zIndex: 1,
        },
      }),
      ...(!disabled && {
        '&:hover': {
          background: darken(0.05, getTrackColorOff()),
          transition: 'all .25s ease',
        },
      }),
      // hide the input apperance
      '& > input': {
        display: 'none',
      },

      // switch track's click animation
      '&:active': {
        transform: 'scale(0.85)',
        transition: 'all .25s ease',
      },

      // switch track's click thumb style
      ...(!loading && {
        '&:active > .switch-thumb': {
          width: `calc(${thumbWidth} + ${thumbActiveOffset})`,
          transform: on ? `translateX(-${thumbActiveOffset})` : '',
        },
      }),

      '& > .switch-text': {
        position: 'relative',

        padding: '5px 5px 5px 25px',
        color: on ? theme.colors.white : theme.colors.black,
        ...useCenter(),
        visibility: loading ? 'hidden' : 'visible',
      },

      // text in 'on' styles
      '& > .on': {
        opacity: on ? 1 : 0,
        padding: on ? '5px 25px 5px 5px' : '5px 5px 5px 25px',
        position: on ? 'relative' : 'absolute',
        transform: on ? '' : 'translate(-100%)',
      },
      // text in 'off' styles
      '& > .off': {
        transition: 'all .25s ease',
        opacity: on ? 0 : 1,
        position: on ? 'absolute' : 'relative',
        transform: on ? 'translate(100%)' : '',
      },

      '& > .switch-thumb': {
        width: thumbWidth,
        height: thumbHeight,
        borderRadius: radius || theme.radius.rounded,
        transition: 'all .25s ease',
        position: 'absolute',
        left: on ? `calc(calc(100% - ${thumbStartPosition}) - ${thumbWidth})` : thumbStartPosition,
        background: theme.colors.white,
        ...useCenter(),
        ...useThemedProps(theme, thumbStyles),
      },

      '& .switch-track': {
        width: '100%',
        height: 'auto',
        position: 'absolute',
        background: trackColorOn || theme.colors.primary,
        transform: 'scale(1)',
        left: on ? '0%' : '-100%',
        transition: `all .25s ease`,
        borderRadius: radius || theme.radius.rounded,
        paddingBottom: '100%',
        visibility: loading ? 'hidden' : 'visible',
        ...useThemedProps(theme, trackStyles),
      },

      ...useThemedCSS(theme, css),
    });

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e);
    };

    return (
      <label css={styles} className={className}>
        <input checked={on} onChange={handleOnChange} type='checkbox' {...props} />
        <div className='switch-track' />
        <div className='switch-text on'>{textOn}</div>
        <div className='switch-text off'>{textOff}</div>
        <div className='switch-thumb' />
      </label>
    );
  },
);

export default Switch;
