/** @jsxImportSource @emotion/react */

import { createContext, Children, CSSProperties, useMemo, useContext } from 'react';
import { ComponentBaseProps } from '../props';
import { useCSS, useTheme, useThemedCSS } from '../../styles/hooks';
import { Theme } from '../../styles/themes';

import { bottomNavigationContext } from './BottomNavigation';
import { motion } from 'framer-motion';

type BottomNavigationItemProps = ComponentBaseProps & {
    label:string
   
    activeColor?:(theme: Theme) => string;
    unActiveColor?:(theme: Theme) => string;
   
    onClick?: (label: string) => void;
    css?: (theme: Theme, isCurrentItem: boolean) => CSSProperties;
  };
  

const BottomNavigationItem = ({ activeColor,unActiveColor,label, onClick, css, children, ...props }: BottomNavigationItemProps) => {
    const theme = useTheme();
    const context = useContext(bottomNavigationContext);
  
    const styles = useCSS({
      flex: 1,
      textAlign: 'center',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      color:  context.activeItem == label
          ? (activeColor?activeColor(theme): theme.colors.textInLightBackground) 
          : (unActiveColor?unActiveColor(theme):theme.colors.textInLightBackground),
      ...(context.activeItem != label && {opacity:theme.bottomNavigation.unactiveItemOpacity}),
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