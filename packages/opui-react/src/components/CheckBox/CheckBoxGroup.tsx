/** @jsxImportSource @emotion/react */

import { useState, createContext } from 'react';
import { Theme } from '../../styles/themes';
import { useThemedCSS, useTheme, useCSS } from '../../styles/hooks';
import { ComponentBaseProps } from '../props';
type CheckboxValue = string | number;

export const CheckboxGroupContext = createContext<{
  value: CheckboxValue[];
  disabled: boolean;
  check: (val: CheckboxValue) => void;
  uncheck: (val: CheckboxValue) => void;
} | null>(null);

type CheckBoxGroupProps = ComponentBaseProps & {
  disabled?: boolean;
  value?: CheckboxValue[];
  defaultValue?: CheckboxValue[];

  onChange?: ((val: CheckboxValue[]) => void) | undefined;
};

const CheckBoxGroup = ({ disabled = false, onChange, children, value = [], css }: CheckBoxGroupProps) => {
  const theme = useTheme();
  const [isValue, setValue] = useState<CheckboxValue[]>(value);
  const style = useCSS({
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    ...useThemedCSS(theme, css),

  });
  if (isValue.length > 0) {
    onChange?.(isValue);
  }
  return (
    <CheckboxGroupContext.Provider
      value={{
        value: isValue,
        disabled: disabled,
        check: v => {
          setValue([...isValue, v]);
        },
        uncheck: v => {
          setValue(isValue.filter(item => item !== v));
        },
      }}>
      {children}
    </CheckboxGroupContext.Provider>
  );
};

export default CheckBoxGroup;
