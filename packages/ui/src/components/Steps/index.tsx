/** @jsxImportSource @emotion/react */

import { css, useTheme } from '@emotion/react';
import { Theme } from '../../styles/themes';
import React, { ReactNode, useState } from 'react';
import { Step, StepProps } from './Step';
import { ComponentBaseProps } from '../props';

type StepsProps = ComponentBaseProps & {
  type?: 'default' | 'navigation';

  current?: number;
  direction?: 'horizontal' | 'vertical';
  iconPrefix?: string;
  initial?: number;
  labelPlacement?: 'horizontal' | 'vertical';
  prefixCls?: string;
  responsive?: boolean;
  size?: 'default' | 'small';
  status?: 'wait' | 'process' | 'finish' | 'error';

  dashed?: boolean;

  onChange?: ((num: any) => void) | undefined;
};

const Steps = ({
  co,
  current = 0,
  direction = 'horizontal',
  initial = 0,
  labelPlacement = 'horizontal',
  children,
  dashed = false,
  onChange,
  ...props
}: StepsProps & React.ComponentPropsWithoutRef<'div'>) => {
  const theme = useTheme();
  const color = theme.colors.primary;
  let n = 0;
  const styles = css({
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    '& .icon': {
      position: 'relative',
      boxSizing: 'border-box',
      top: -4,
    },
    '& .circle': {
      width: 25,
      height: 25,
      borderStyle: 'solid',
      borderWidth: 1,
      borderRadius: '50%',
      position: 'absolute',
      left: -8,
      top: -4,
    },
    '& .wait': {
      borderColor: 'gray',
    },
    '& .finish': {
      borderColor: color,
    },
    '& .process': {
      borderColor: color,
    },
    '& .error': {
      borderColor: 'red',
    },
    '& .text-finish': {
      color: color,
    },
    '& .text-process': {
      color: color,
    },
    '& .text-wait': {
      color: 'gray',
    },
    '& .text-error': {
      color: 'red',
    },
    '& .text-pos': {
      position: 'absolute',
      top: '-3px',
    },
    ...(co && (typeof co == 'function' ? co(theme) : co)),
  });

  const handleClick = ({ currentTarget }: React.MouseEvent<HTMLButtonElement>) => {
    if (currentTarget) {
      n = Number(currentTarget.value) + 1;
      onChange?.(n);
    }
  };
  const nat = React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) {
      return child;
    }
    const props = child.props as StepProps;
    let status = props.status || 'wait';
    const isDashed = props.isDashed || dashed;
    if (index + 1 < current) {
      status = props.status || 'finish';
    } else if (index + 1 === current) {
      status = props.status || 'process';
    }

    const icon =
      props.icon ??
      (onChange ? (
        <button className={`circle ${status}`} value={index} onClick={handleClick}>
          <span className={`text-${status}`}>{index + 1}</span>
        </button>
      ) : (
        <label>
          <span className={`circle ${status}`} />
          <span className={`text-${status} text-pos`}>{index + 1}</span>
        </label>
      ));
    return React.cloneElement(child, {
      status,
      icon,
      isDashed,
    });
  });
  return (
    <div css={styles} {...props}>
      {nat}
    </div>
  );
};
Steps.Step = Step;
export default Steps;
