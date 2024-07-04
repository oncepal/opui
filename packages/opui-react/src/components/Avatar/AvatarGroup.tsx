/** @jsxImportSource @emotion/react */

import React, { Children, DetailedReactHTMLElement, cloneElement, useState } from 'react';
import { useCSS, useTheme, useThemedCSS } from '../../styles/hooks';
import { Theme } from '../../styles/themes';
import { ComponentBaseProps } from '../props';
import Avatar from './Avatar';
import { transform } from '@babel/core';

type AvatarGroupProps = ComponentBaseProps & {
  gap?: number;
  bordered?: boolean;
  max?: number;
  total?: number;
  dense?:boolean
};
/**
 * 头像群组
 * @param gap avatar之间的紧凑度
 * @param bordered avatar统一设置是否有边框
 * @param max 最多展示多少人
 * @param total 一共有多少人
 * @param dense 边框是否紧贴
 * @example
 * 
 * ```js
 *  <AvatarGroup bordered>
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
    </AvatarGroup>
 * ```
 */
const AvatarGroup = ({ dense,max, total, bordered=true, gap = 50, css, className, children, ...props }: AvatarGroupProps) => {
  const theme = useTheme();
  const styles = useCSS({
    display: 'flex',
    alignItems: 'center',
    ...useThemedCSS(theme, css),
  });

  return (
    <div css={styles} {...props}>
      {Children.map(
        (max ? Children.toArray(children).slice(0, max) : Children.toArray(children)).concat(
          total ? [<Avatar name={total + ''} bordered={bordered} />] : [],
        ),
        (child: any, i) => {
          const element = child as DetailedReactHTMLElement<any, HTMLDivElement>;
          if (['Avatar'].includes(child.type.name)) {
            return (
              <>
                {cloneElement(element, {
                  ...{
                    ...element.props,
                    bordered,
                    dense,
                    css: {
                      transform: `translateX(-${i * gap}%)`,
                    },
                  },
                })}
              </>
            );
          }

          return undefined;
        },
      )}
    </div>
  );
};

export default AvatarGroup;
