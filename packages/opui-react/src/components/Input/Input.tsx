/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import { useState, ReactNode, CSSProperties, useMemo, useEffect } from 'react';
import { useThemedCSS, useThemedProps, useCSS, useTheme, useThemeTextColor } from '../../styles/hooks';
import * as tokens from '../../styles/tokens';
import { ComponentBaseProps, Themed, ThemedCSS } from '../props';
import Icon from '../Icon';
import InputPlaceholder from './InputPlaceholder';

type InputProps = ComponentBaseProps & {
  readOnly?: boolean;
  type?: 'number' | 'text' | 'password' | 'tel' | 'email' | 'url';
  clearable?: boolean;
  flex?: number;
  gap?: string;
  label?: ReactNode;
  message?: ReactNode;
  closable?: boolean;
  loading?: boolean;
  maxLength?: number;
  verify?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => boolean;
  format?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => string;
  onChange: (value: string, e: React.ChangeEvent<HTMLInputElement>) => any;
  prefix?: ReactNode;
  suffix?: ReactNode;
  value: any;
  outlined?: boolean;
  contain?: boolean;
  disabled?: boolean;
  zeroStart?: boolean;
  rounded?: boolean;
  radius?: string;
  placeholder?: ReactNode;
  placeholderStyle?: ThemedCSS;
  containerStyle?: ThemedCSS;
  contentStyle?: ThemedCSS;
  messageStyle?: ThemedCSS;
  labelStyle?: ThemedCSS;
  inputStyle?: ThemedCSS;
  prefixStyle?: ThemedCSS;
  suffixStyle?: ThemedCSS;
};

/**
 * inputs fields are used to get the user input in a text field.
 * @param ...
 */
const Input = ({
  type,
  prefix,
  suffix,
  label,
  message,
  closable,
  rounded,
  loading,
  radius,
  value,
  placeholder,
  contain,
  maxLength,
  outlined = false,
  zeroStart = false,
  format,
  verify,
  disabled,
  readOnly,
  onChange,
  inputStyle,
  messageStyle,
  containerStyle,
  placeholderStyle,
  contentStyle,
  labelStyle,
  prefixStyle,
  suffixStyle,
}: InputProps) => {
  const theme = useTheme();
  const [showClose, setShowClose] = useState(closable);
  const [showMessage, setShowMessage] = useState(false);
  const [focus, setFocus] = useState(false);
  const [innerValue, setInnerValue] = useState('');
  const padding = '.5rem 1rem .5rem 1rem';
  const inputStyles = useCSS({
    padding,
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    // color: theme.isDarkMode ? theme.colors.white : theme.colors.black,
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
    border: outlined ? `1px solid ${useThemeTextColor(theme)}` : '',
    borderRadius: useThemedProps(theme, radius) || (rounded ? tokens.radius.rounded : ''),
    color: useThemeTextColor(theme),
    ...useThemedCSS(theme, contentStyle),
  });
  const labelStyles = useCSS({
    ...useThemedCSS(theme, labelStyle),
  });
  const prefixStyles = useCSS({
    flex: 'none',
    ...useThemedCSS(theme, prefixStyle),
  });

  const suffixStyles = useCSS({
    padding,
    flex: 'none',
    ...useThemedCSS(theme, suffixStyle),
  });
  const messageStyles = useCSS({
    color: showMessage ? theme.colors.danger : '',
    ...useThemedCSS(theme, messageStyle),
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
    setInnerValue(r);
    onChange?.(r, e);
  };

  useEffect(() => {
    if (innerValue == '' && !!showClose) {
      setShowClose(false);
    } else if (closable) {
      setShowClose(true);
    }
  }, [innerValue]);

  return (
    <div css={containerStyles}>
      {label && <div css={labelStyles}>{label}</div>}
      <div css={contentStyles}>
        {prefix && <div css={prefixStyles}>{prefix}</div>}
        <div css={inputStyles}>
          <input
            style={{ flex: 1, width: '100%', color: 'inherit' }}
            onBlur={() => {
              innerValue.length == 0 && setFocus(false);
            }}
            onFocus={() => setFocus(true)}
            value={value || innerValue}
            type={type}
            onChange={handleInputChange}
            disabled={disabled}
            readOnly={readOnly}
          />
          {placeholder && !value && <InputPlaceholder>{placeholder}</InputPlaceholder>}
        </div>

        {(suffix || showClose) && (
          <div
            css={suffixStyles}
            onClick={() => {
              showClose && handleInputChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>);
            }}>
            {showClose ? <Icon type='close-circle' /> : suffix}
          </div>
        )}
      </div>
      {showMessage && <div css={messageStyles}>{message}</div>}
    </div>
  );
};

export default Input;
