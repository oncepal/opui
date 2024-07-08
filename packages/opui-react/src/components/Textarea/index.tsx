/** @jsxImportSource @emotion/react */

import * as React from 'react';
import { ComponentBaseProps, Themed } from '../props';
import { useCSS, useTheme, useThemedCSS, useThemedProps } from '../../styles/hooks';
import { Theme } from '../../styles/themes';
type TextareaProps = ComponentBaseProps & {
  color?:Themed<string>
  background?:Themed<string>
  showCount?: boolean | ((length: number, maxLength?: number) => React.ReactNode);
  onChange?: (value: string, event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

/**
 * Textarea component is a multi-line Input which allows you to write large texts.
 * @param ...
 */
const Textarea = ({
  color,
  background,
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
    backgroundColor:useThemedProps(theme,background) ||( !theme.isDarkMode ? theme.colors.lightBackground : theme.colors.darkBackground),
    color: useThemedProps(theme,color) ||(!theme.isDarkMode ? theme.colors.textInDarkBackground : theme.colors.textInLightBackground),
    ...useThemedCSS(theme, css),
  });

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(e.target.value, e);
  };

  return <textarea {...props} css={styles} className={className} onChange={handleTextAreaChange} />;
};

export default Textarea;
