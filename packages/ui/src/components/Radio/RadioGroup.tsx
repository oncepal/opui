/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { Theme } from '../../styles/themes';
import { useTheme, css } from '@emotion/react';
import { createContext } from 'react';
import { ComponentBaseProps } from '../props';

type RadioValue = string | number;

export const RadioGroupContext = createContext<{
  value: RadioValue[];
  disabled: boolean;
  check: (val: RadioValue) => void;
  uncheck: (val: RadioValue) => void;
} | null>(null);

type CheckBoxGroupProps = ComponentBaseProps & {
  value: RadioValue | null;
  onChange: (val: RadioValue) => void;
  defaultValue?: RadioValue | null;
  disabled?: boolean;
};

const RadioGroup = ({ disabled = false, onChange, children, value, co, ...props }: CheckBoxGroupProps) => {
  const theme = useTheme();
  const [isValue, setValue] = useState(value);
  const style = css({
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    ...(co && (typeof co == 'function' ? co(theme) : co)),
  });

  if (isValue) {
    onChange(isValue);
  }

  return (
    <RadioGroupContext.Provider
      value={{
        value: value == null ? [] : [value],
        check: v => {
          setValue(v);
        },
        uncheck: v => {
          console.log('uncheck');
        },
        disabled: disabled,
      }}
      {...props}>
      {children}
    </RadioGroupContext.Provider>
  );
};

export default RadioGroup;
