/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import { ComponentBaseProps } from '../props';

import { useThemedCSS, useTheme, useCSS } from '../../styles/css';

type SliderProps = ComponentBaseProps & {
  disable?: boolean;
  defaultValue?: number;
  step?: number;
  value?: string;
  onChange?: (value: string) => void;
  max?: number;
  min?: number;
  list?: number[];
  trackColor?: string;
  thumbColor?: string;
  trackSize?: number;
  thumbSize?: number;
};

const Slider = ({
  max = 1,
  min = 0,
  step = 0.05,
  list,
  value,
  defaultValue,
  onChange,
  trackColor,
  thumbColor,
  trackSize = 10,
  thumbSize = 20,
  css,
  ...props
}: SliderProps) => {
  const theme = useTheme();

  const handleOnChange = (e: { target: { value: string } }) => {
    onChange?.(e.target.value);
  };

  const thumbDefaultStyles = `
  float:${(Number(value) - min) / (max - min) == 1 && 'right'};
  position:relative;
    width: ${thumbSize}px;
    border-radius: 50%;
    box-shadow: 0px 0px 2px 0px ${theme.colors.black};
    background: ${thumbColor || theme.colors.white};
    height: ${thumbSize}px;
    margin-top: -${(thumbSize - trackSize) / 2}px;
    &::after:
    `;

  const trackDefaultStyles = `
    height: ${trackSize}px;
    background: linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.primary}), ${theme.colors.greyLight};
    background-size: ${((Number(value) - min) / (max - min)) * 100}%, 100%;
    background-repeat: no-repeat;
    
    border-radius: 16px;`;

  const sliderStyles = useCSS`
    input[type='range'] {
      -webkit-appearance: none;
      -moz-appearance: none;
      outline: none;
      border: none;
      cursor: pointer;
      display: block;
      width: 100%;
    }

    input[type='range']::-webkit-slider-runnable-track {
      ${trackDefaultStyles}
    }

    input[type='range']::-moz-range-track {
      ${trackDefaultStyles}
    }

    input[type='range']::-webkit-slider-thumb {
      -webkit-appearance: none;
      ${thumbDefaultStyles}
    }

    input[type='range']::-moz-range-thumb {
      -moz-appearance: none;
      ${thumbDefaultStyles}
    }

    input[type='range']:focus {
      outline: none;
    }

    input[type='range']:focus::-moz-range-thumb {
    }

    input[type='range']:focus::-webkit-slider-thumb {
    }
  `;

  return (
    <div css={sliderStyles}>
      <input
        min={min}
        max={max}
        step={step}
        {...(!defaultValue && { value: value })}
        defaultValue={defaultValue}
        type='range'
        onChange={handleOnChange}
        {...props}
      />
    </div>
  );
};

export default Slider;
