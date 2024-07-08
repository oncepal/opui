/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import { ComponentBaseProps, Themed } from '../props';

import { useThemedCSS, useCSS, useTheme, useThemedProps } from '../../styles/hooks';
import * as tokens from '../../styles/tokens';
import { css } from '@emotion/react';

import { forwardRef, ComponentPropsWithoutRef, CSSProperties } from 'react';
import { motion } from 'framer-motion';
import AvatarGroup from './AvatarGroup';

type AvatarProps = ComponentBaseProps & {
  src?: string;
  radius?: Themed<string>;
  color?: Themed<string>;
  size?: Themed<string>;
  name?: string;
  bordered?: boolean;
  disabled?: boolean;
  dense?:boolean
};

/**
 * Avatar组件用于表示用户，并显示头像图片或名字。
 * ```js
 * <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      <Avatar name="Junior" size="2em"/>
 * ```
 * @param src The content of the badge.
 * @param radius The size of the badge
 * @param color if show the badge content
 * @param size badge x-offset
 * @param name badge y-offset
 * @param bordered badge position relative to its children.
 * @param disabled badge background color
 * @param dense 边框是否紧贴
 */
const Avatar = ({
  size = '2em',
  radius = '9999px',
  css,
  color,
  dense = true,
  src,
  disabled,
  bordered,
  name,
  children,
  className,
  ...props
}: AvatarProps) => {
  const theme = useTheme(); 
  const styles = useCSS({
    borderRadius:useThemedProps(theme, radius),
    display: 'inline-flex',
    alignItems:'center',
    justifyContent:'center',
    ...(bordered && { border: '2px solid ' + (useThemedProps(theme, color)|| theme.avatar.defaultBackground),padding:!dense?'2px':"" }),
    ...useThemedCSS(theme, css),
  });

  const contentStyles = useCSS({
    display: 'inline-flex',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:useThemedProps(theme, radius),
    height: useThemedProps(theme, size),
    width: useThemedProps(theme, size),
    color:theme.colors.textInDarkBackground,
    background: useThemedProps(theme, color) || theme.avatar.defaultBackground,
  })

  return (
    <motion.div css={styles} {...props}>
      <div css={contentStyles}>
        {src ? <img src={src} /> : name}
        </div>
    </motion.div>
  );
};

Avatar.Group = AvatarGroup
export default Avatar;
