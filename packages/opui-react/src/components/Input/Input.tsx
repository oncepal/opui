/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import { useState, ReactNode, CSSProperties, useMemo, useEffect, useRef } from 'react';
import { useThemedCSS, useThemedProps, useCSS, useTheme, useThemeTextColor } from '../../styles/hooks';
import * as tokens from '../../styles/tokens';
import { ComponentBaseProps, Themed, ThemedCSS } from '../props';
import Icon from '../Icon';

type InputProps = ComponentBaseProps & {
  readOnly?: boolean;
  type?: 'number' | 'text' | 'password' | 'tel' | 'email' | 'url';
  clearable?: boolean;
  flex?: number;
  gap?: string;
  label?: ReactNode;
  message?: ReactNode;
  loading?: boolean;
  maxLength?: number;
  verify?: (value: string, e?: React.ChangeEvent<HTMLInputElement>) => boolean;
  format?: (value: string, e?: React.ChangeEvent<HTMLInputElement>) => string;
  onChange: (value: string, e?: React.ChangeEvent<HTMLInputElement>) => any;
  prepend?: ReactNode;
  append?: ReactNode;
  value: any;
  outlined?: boolean;
  contain?: boolean;
  disabled?: boolean;
  zeroStart?: boolean;
  rounded?: boolean;
  radius?: string;
  placeholder?: ReactNode;
  containerStyle?: ThemedCSS;
  contentStyle?: ThemedCSS;
  inputStyle?: ThemedCSS;
  prependStyle?: ThemedCSS;
  appendStyle?: ThemedCSS;
};

/**
 * inputs fields are used to get the user input in a text field.
 * @param ...
 */
const Input = ({
  type,
  prepend,
  clearable,
  append,
  label,
  message,
  rounded,
  loading,
  radius,
  value,
  placeholder,
  contain = true,
  maxLength,
  outlined = false,
  zeroStart = false,
  format,
  verify,
  disabled,
  readOnly,
  onChange,
  inputStyle,
  containerStyle,
  contentStyle,
  prependStyle,
  appendStyle,
}: InputProps) => {
  const theme = useTheme();

  const [showMessage, setShowMessage] = useState(false);
  const [focus, setFocus] = useState(false);
  const inputRef = useRef(null);

  const inputStyles = useCSS({
    padding: theme.input.padding,
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    color: useThemeTextColor(theme),
    ...useThemedCSS(theme, inputStyle),
  });

  const containerStyles = useCSS({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    ...useThemedCSS(theme, containerStyle),
  });

  const contentStyles = useCSS({
    position: 'relative',
    display: 'inline-flex',
    width: '100%',
    alignItems: 'center',
    backgroundColor: contain
      ? theme.isDarkMode
        ? theme.colors.darkBackground
        : theme.colors.lightBackground
      : 'transparent',
    ...(outlined && { border: `1px solid ${useThemeTextColor(theme)}` }),
    borderRadius: useThemedProps(theme, radius) || (rounded ? tokens.radius.rounded : tokens.radius.md),
    color: useThemeTextColor(theme),
    ...useThemedCSS(theme, contentStyle),
  });
  const labelStyles = useCSS({
    padding: theme.input.padding,
  });
  const prependStyles = useCSS({
    padding: theme.input.padding,
    flex: 'none',
    ...useThemedCSS(theme, prependStyle),
  });

  const appendStyles = useCSS({
    padding: theme.input.padding,
    flex: 'none',
    ...useThemedCSS(theme, appendStyle),
  });
  const messageStyles = useCSS({
    color: showMessage ? theme.colors.danger : '',
  });
  const clearButtonStyles = useCSS({
    padding: theme.input.padding,
  });

  const placeholderStyles = useCSS({
    position: 'absolute',
    left: 0,
    padding: theme.input.padding,
    transition: 'all .25s ease-out',
    textAlign: 'left',
    userSelect: 'none',
    cursor: 'text',
    pointerEvents: 'none',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    if (verify && !verify(value, e)) {
      setShowMessage(true);
    } else {
      setShowMessage(false);
    }

    let r =
      type == 'number'
        ? value.length > 1
          ? zeroStart
            ? value
            : value[0] == '0'
            ? value.substring(1)
            : value
          : value
        : format?.(value, e) || value;

    if (maxLength) r = r.slice(0, maxLength);

    onChange?.(r, e);
  };

  return (
    <div css={containerStyles}>
      {label && <div css={labelStyles}>{label}</div>}
      <div css={contentStyles}>
        {prepend && <div css={prependStyles}>{prepend}</div>}
        <div css={inputStyles}>
          <input
            ref={inputRef}
            style={{ flex: 1, width: '100%', color: 'inherit' }}
            onBlur={() => {
              setFocus(false);
            }}
            onFocus={() => setFocus(true)}
            value={value}
            type={type}
            onChange={handleInputChange}
            disabled={disabled}
            readOnly={readOnly}
          />
          {placeholder && !value && <div css={placeholderStyles}>{placeholder}</div>}
          {clearable && value && (
            <div
              css={clearButtonStyles}
              onClick={() => {
                onChange?.('');
              }}>
              <Icon type='close-circle' />
            </div>
          )}
        </div>

        {append && <div css={appendStyles}>{append}</div>}
      </div>
      {showMessage && <div css={messageStyles}>{message}</div>}
    </div>
  );
};

export default Input;
