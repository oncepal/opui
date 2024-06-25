/** @jsxImportSource @emotion/react */

import { createContext, Children, CSSProperties, useMemo, useContext } from 'react';
import { ComponentBaseProps } from '../props';
import { useCSS, useTheme, useThemedCSS } from '../../styles/css';
import { Theme } from '../../styles/themes';

import { tabsContext } from '.';
import { motion } from 'framer-motion';

type BottomNavigationItemProps = ComponentBaseProps & {
    label: string;
    disabled?: boolean;
    activeColor?:(theme: Theme) => string;
    unActiveColor?:(theme: Theme) => string;
    disabledColor?:(theme: Theme) => string;
    onClick?: (label: string) => void;
    css?: (theme: Theme, isCurrentItem: boolean) => CSSProperties;
  };
  

const BottomNavigationItem = ({ activeColor,unActiveColor,disabledColor,label, disabled, onClick, css, children, ...props }: BottomNavigationItemProps) => {
    const theme = useTheme();
    const context = useContext(tabsContext);

    const styles = useCSS({
      flex: 1,
      textAlign: 'center',
      padding: '.8em 1em',
      color: !disabled
        ? context.activeItem == label
          ? (activeColor?activeColor(theme): theme.colors.primary) 
          : (unActiveColor?unActiveColor(theme):theme.colors.black)
        : (disabledColor?disabledColor(theme):theme.colors.grey) ,
      ...useThemedCSS(theme, css),
    });
  
    const handleClickItem = () => {
      onClick?.(label);
      context.handleItemClick?.(label);
    };
  
    return (
      <motion.div whileTap={{ scale: 0.95 }} css={styles} onClick={handleClickItem} {...props}>
        {children || label}
      </motion.div>
    );
  };


export default BottomNavigationItem