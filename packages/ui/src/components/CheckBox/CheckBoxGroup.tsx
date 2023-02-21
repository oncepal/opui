/** @jsxImportSource @emotion/react */

import { useState, createContext } from 'react';
import { Theme } from '../../styles/themes';
import { useTheme, css } from '@emotion/react';
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

const CheckBoxGroup = ({ disabled = false, onChange, children, value = [], co }: CheckBoxGroupProps) => {
  const theme = useTheme();
  const [isValue, setValue] = useState<CheckboxValue[]>(value);
  const style = css({
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    ...(co && (typeof co == 'function' ? co(theme) : co)),
  });
  if (isValue.length > 0) {
    onChange?.(isValue);
  }
  console.log('isValue:', isValue);
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
