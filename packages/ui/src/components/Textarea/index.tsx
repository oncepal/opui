/** @jsxImportSource @emotion/react */

import * as React from 'react';
import { ComponentBaseProps } from '../props';
import { useCSS, useTheme, useThemedCSS } from '../../styles/css';
import { Theme } from '../../styles/themes';
type TextareaProps = ComponentBaseProps & {
  showCount?: boolean | ((length: number, maxLength?: number) => React.ReactNode);
  onChange?: (value: string, event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

/**
 * Textarea component is a multi-line Input which allows you to write large texts.
 * @param ...
 */
const Textarea = ({
  css,
  showCount,
  className,
  onChange,
  ...props
}: Omit<React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, 'onChange'> &
  TextareaProps) => {
  const theme = useTheme();
  const styles = useCSS({
    width: '100%',
    padding: '12px',
    backgroundColor: !theme.darkMode ? theme.colors.greyLight : theme.colors.white,
    color: !theme.darkMode ? theme.colors.black : theme.colors.white,
    ...useThemedCSS(theme, css),
  });

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(e.target.value, e);
  };

  return <textarea {...props} css={styles} className={className} onChange={handleTextAreaChange} />;
};

export default Textarea;
