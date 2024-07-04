/** @jsxImportSource @emotion/react */
import { useContext, useState } from 'react';
import { useThemedCSS, useTheme, useCSS } from '../../styles/hooks';
import CheckBoxGroup from './CheckBoxGroup';
import { CheckboxGroupContext } from './CheckBoxGroup';
import { ComponentBaseProps } from '../props';

type CheckboxValue = string | number;

type CheckBoxProps = ComponentBaseProps & {
  disabled?: boolean;
  checked?: boolean;

  value?: CheckboxValue;
  checkColor?: string;
  shape?: 'round' | 'square';
  checkedShape?: 'default' | 'square';
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
};

const CheckBox = ({
  disabled = false,
  checked = false,
  // defaultChecked = false,
  onChange,
  children,
  value,
  checkColor,
  shape,
  checkedShape = 'default',
  css,
  ...props
}: CheckBoxProps & React.ComponentPropsWithoutRef<'label'>) => {

  const theme = useTheme()
  const groupContext = useContext(CheckboxGroupContext);
  const content: any = children;
  if (groupContext !== null && groupContext.value.length > 0 && value) {
    checked = groupContext.value.includes(value);
  }
  if (groupContext !== null && groupContext.disabled) {
    disabled = disabled || groupContext.disabled;
  }
  const hasChecked = {
    transform: checked ? 'scale(1)' : 'scale(0)',
  };
  const [ischecked, setIschecked] = useState(checked);
  const [checkedStyle, setCheckedStyle] = useState(hasChecked);
  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIschecked(e.target.checked);
    if (e.target.checked) {
      setCheckedStyle({ transform: 'scale(1)' });
    } else {
      setCheckedStyle({ transform: 'scale(0)' });
    }
    onChange?.(e);
    if (groupContext !== null && value !== undefined) {
      if (e.target.checked) {
        groupContext.check(value);
      } else {
        groupContext?.uncheck(value);
      }
    }
  };

  const checkedShapeStyle = {
    transformOrigin: 'bottom left',
    clipPath: 'polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%)',
  };
  const inputStyle = useCSS({
    '-webkit-appearance': 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    appearance: 'none',
    backgroundColor: '#fff' /* For iOS < 15 to remove gradient background */,
    margin: 0,
    font: 'inherit',
    color: checkColor ? checkColor : theme.colors.primary,
    width: '1.15em',
    height: '1.15em',
    border: `0.15em solid ${disabled ? '#00000040' : checkColor ? checkColor : theme.colors.primary}`,
    borderRadius: shape === 'square' ? '0.15em' : '50%',
    transform: 'translateY(-0.075em)',
    display: 'grid',
    placeContent: 'center',
    '::before': {
      content: '""',
      width: '0.65em',
      height: '0.65em',
      ...checkedStyle,
      borderRadius: shape === 'square' ? '0.15em' : '50%',
      transition: '120ms transform ease-in-out',
      boxShadow: `inset 1em 1em ${disabled ? '#00000040' : checkColor ? checkColor : theme.colors.primary}`,
      backgroundColor: disabled ? '#00000040' : checkColor ? checkColor : theme.colors.primary,
      ...(checkedShape === 'default' && checkedShapeStyle),
    },
  });
  const formControl = useCSS({
    
    cursor: disabled ? 'not-allowed' : 'pointer',
    color: disabled ? '#00000040' : '#000000',
    fontFamily: 'system-ui sans-serif',
    fontSize: '16px',
    fontWeight: 'bold',
   
    display: 'grid',
    gridTemplateColumns: '1em auto',
    gap: '0.5em',
    marginTop: '1em',
    ...useThemedCSS(css as any),
  });
  return (
    <label css={formControl} {...props}>
      <input
        css={inputStyle}
        id='styles'
        type='checkbox'
        value={value ? value : content}
        onChange={handleClick}
        onClick={e => {
          e.stopPropagation();
          e.nativeEvent.stopImmediatePropagation();
        }}
        checked={ischecked}
        disabled={disabled}
      />
      {children}
    </label>
  );
};

CheckBox.Group = CheckBoxGroup;
export default CheckBox;
