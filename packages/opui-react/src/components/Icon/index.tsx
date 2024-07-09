/** @jsxImportSource @emotion/react */

import { ComponentBaseProps, Margin, Padding, Themed } from '../props';
import { useThemedCSS, useCSS, useTheme, useMargin, usePadding, useThemedProps } from '../../styles/hooks';
import { ComponentPropsWithoutRef } from 'react';
import CheckBox from '../CheckBox';
import { motion } from 'framer-motion';
type IconProps = Omit<ComponentBaseProps, 'className'> &
  Margin &
  Padding & {
    solid?: boolean;
    width?: string;
    height?: string;
    size?: Themed<string>;
    white?: boolean;
    color?: Themed<string>;
    type:
      | 'safe'
      | 'loading'
      | 'plus'
      | 'male'
      | 'female'
      | 'back'
      | 'close'
      | 'close-circle'
      | 'home'
      | 'search'
      | 'user'
      | 'face'
      | 'message';
    src?: string;
    onClick?: () => any;
  };
const Icon = ({
  width,
  height,
  color,
  white,
  solid,
  size,
  css,
  src,
  type,
  onClick,
  ...props
}: // Omit<ComponentPropsWithoutRef<'i'>, 'color'> &
IconProps) => {
  const theme = useTheme();
  const styles = useCSS({
    width,
    height,
    fontSize: useThemedProps(theme, size),
    color:
      useThemedProps<string>(theme, color) ||
      (white ? theme.colors.textInDarkBackground : theme.isDarkMode ? theme.colors.textInDarkBackground : theme.colors.textInLightBackground),
    ...(['close', 'close-circle'].includes(type) && { transform: 'rotate(45deg)' }),
    ...usePadding(props),
    ...useMargin(props),
    ...useThemedCSS(theme, css),
  });

  const handleClickIcon = () => {
    onClick?.();
  };

  const getIconType = () => {
    let prefix = 'bx bx';

    switch (type) {
      case 'safe':
        return 'bx bx-check-shield';
      case 'back':
        return 'bx bx-chevron-left';
      case 'home':
        return 'bx bx-home';
      case 'search':
        return 'bx bx-search';
      case 'user':
        return 'bx bx-user';
      case 'face':
        return 'bx bx-face';
      case 'close':
        return 'bx bx-plus';
      case 'close-circle':
        return 'bx bx-plus-circle';
      case 'plus':
        return 'bx bx-plus';
      case 'female':
        return 'bx bx-female-sign';
      case 'male':
        return 'bx bx-male-sign';
      case 'message':
        return 'bx bx-message-dots';

        break;

      default:
        return '';
        break;
    }
  };

  return <motion.i css={styles} className={src || getIconType()} onClick={handleClickIcon} {...props}></motion.i>;
};

export default Icon;
