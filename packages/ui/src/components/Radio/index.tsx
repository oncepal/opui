/** @jsxImportSource @emotion/react */
import { useContext, useState } from 'react';
import { Theme } from '../../styles/themes';
import { useTheme, css } from '@emotion/react';
import RadioGroup from './RadioGroup';
import { RadioGroupContext } from './RadioGroup';
import { ComponentBaseProps } from '../props';

type RadioValue = string | number;

type RadioProps = ComponentBaseProps & {
  disabled?: boolean;
  checked?: boolean;

  value?: RadioValue;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
};

const Radio = ({
  disabled = false,
  checked = false,
  defaultChecked = false,
  onChange,
  children,
  value,
  co,
  ...props
}: RadioProps & React.ComponentPropsWithoutRef<'label'>) => {
  const content: any = children;
  const [ischecked, setIschecked] = useState(checked);
  const groupContext = useContext(RadioGroupContext);
  if (groupContext !== null && groupContext.value && value) {
    checked = groupContext.value.includes(value);
  }
  if (groupContext !== null && groupContext.disabled) {
    disabled = disabled || groupContext.disabled;
  }
  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (groupContext !== null && value !== undefined) {
      if (e.target.value) {
        groupContext.check(value);
      } else {
        groupContext?.uncheck(value);
      }
    } else {
      setIschecked(e.target.checked);
      onChange?.(e);
    }
  };
  const theme = useTheme();
  const inputStyle = css({
    width: '18px',
    height: '18px',
    marginRight: '8px',
    position: 'relative',
    top: '4px',
    cursor: disabled ? 'not-allowed' : 'pointer',
  });
  const labelStyle = css({
    ...(co && (typeof co == 'function' ? co(theme) : co)),
    padding: 9,
    cursor: disabled ? 'not-allowed' : 'pointer',
    color: disabled ? '#00000040' : '#000000',
  });
  return (
    <label css={labelStyle} {...props}>
      <input
        css={inputStyle}
        type='radio'
        name={groupContext !== null ? 'radio' : undefined}
        value={value ? value : content}
        onChange={handleClick}
        onClick={e => {
          e.stopPropagation();
          e.nativeEvent.stopImmediatePropagation();
        }}
        checked={groupContext !== null ? checked : ischecked}
        disabled={disabled}
      />
      {children}
    </label>
  );
};
Radio.Group = RadioGroup;
export default Radio;
