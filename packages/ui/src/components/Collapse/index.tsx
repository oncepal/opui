/** @jsxImportSource @emotion/react */

import React from 'react';
import arrowSVG from '../../icons/arrow-up.svg';
import {  useCSS, useTheme } from '../../styles/css';
import Icon from '../Icon';
import { ComponentBaseProps } from '../props';

type CollapseProps = ComponentBaseProps & {
  title?: React.ReactNode | (() => React.ReactNode) | string;
  expand: boolean;
  animated?: boolean;
  trigger?: React.ReactNode | (() => React.ReactNode);
  onChange: () => void;
};

/**
 * Collapse display a list of high-level options that can expand/collapse to reveal more information.
 * ```js
 *  <Collapse title="Option A">
        <Text>
          Lorem ipsum dolor sit amet
        </Text>
    </Collapse>
 * ```
 * @param title collapse title content
 * @param animated enable or disable the collapse animation
 * @param expand manage the expand behaivor by prop
 * @param trigger trigger component overide
 */
const Collapse = ({ title, animated = true, expand = false, trigger, children, ...props }: CollapseProps) => {
  const theme = useTheme();

  const handleClickTrigger = () => {
    props?.onChange?.();
  };
  const renderTrigger = () => {
    if (trigger)
      return React.cloneElement(typeof trigger === 'function' ? trigger() : trigger, {
        css: useCSS({
          marginLeft: 'auto',
          transformOrigin: '50% 50%',
          transform: `rotate(${expand ? '0deg' : '180deg'})`,
        }),
      });
    else
      return (
        <Icon
          width='1.2em'
          height='1.2em'
          color={theme.color.black}
          src={arrowSVG}
          css={{
            marginLeft: 'auto',
            transition: 'transform .1s',
            transform: `rotate(${expand ? '0deg' : '180deg'})`,
          }}
          onClick={handleClickTrigger}
        />
      );
  };

  const renderChildren = () => {
    if (animated) return <div>{children}</div>;

    return children;
  };

  const renderTitle = () => {
    return typeof title == 'function' ? (
      title()
    ) : typeof title == 'string' ? (
      <div className='title'>{title}</div>
    ) : (
      title
    );
  };
  return (
    <div>
      <div
        css={useCSS({
          display: 'flex',
          alignItems: 'center',
          '& > .title': {
            flex: '1',
          },
        })}>
        {renderTitle()}
        {renderTrigger()}
      </div>
      {expand && renderChildren()}
    </div>
  );
};

export default Collapse;
