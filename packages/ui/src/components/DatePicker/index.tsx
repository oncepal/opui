/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import { ComponentBaseProps } from '../props';
import { useThemedCSS, useCSS, useTheme } from '../../styles/css';
import { useState } from 'react';

type DatePickerProps = ComponentBaseProps &
  Partial<{
    onlyImg?: boolean;
    className: string;
    children: React.ReactNode;
    placeholder: string;
    formater: (date: string) => string;
    onChange: (date: string, e: React.ChangeEvent<HTMLInputElement>) => any;
  }>;

const DatePicker = ({
  onlyImg,
  accept,
  onChange,
  formater,
  children,
  placeholder,
  css,
  ...props
}: Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'placeholder'> & DatePickerProps) => {
  const [value, setValue] = useState('');
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(formater ? formater(e.target.value) : e.target.value);
    onChange?.(formater ? formater(e.target.value) : e.target.value, e);
  };
  const theme = useTheme();
  const styles = useCSS({
    cursor: ' pointer',
    ...useThemedCSS(theme, css),
  });

  return (
    <label css={styles} aria-label='file DatePicker input'>
      <input type='datetime-local' hidden onChange={handleDateChange} {...props} />
      {value || placeholder}
    </label>
  );
};

export default DatePicker;
