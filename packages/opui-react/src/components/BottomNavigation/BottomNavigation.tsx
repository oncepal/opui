/** @jsxImportSource @emotion/react */

import { createContext, Children, CSSProperties, useMemo, useContext } from 'react';
import { ComponentBaseProps } from '../props';
import { useCSS, useTheme, useThemedCSS } from '../../styles/hooks';
import BottomNavigationItem from './BottomNavigationItem';

type BottomNavigationProps = ComponentBaseProps & {
  fixed?:boolean
  onItemChange: (label: string) => void;
  activeItem: string;
};

type BottomNavigationContext = {
  handleItemClick?: (label: string) => void;
  activeItem?: string;
};

export const bottomNavigationContext = createContext<BottomNavigationContext>({});

const BottomNavigation = ({ fixed,onItemChange, activeItem, css, children, ...props }: BottomNavigationProps) => {
  const theme = useTheme();
  const styles = useCSS({
    display: 'flex',
    alignItems:'center',
    justifyContent:'space-around',
    position:fixed?'fixed':'initial',
    ...(fixed && {bottom:0,
    left:0,
    right:0}),
    zIndex:theme.bottomNavigation.zIndex,
    textAlign: 'center',
    background:theme.isDarkMode?theme.colors.darkBackground:theme.colors.lightBackground,
    minHeight:theme.bottomNavigation.height,
    ...useThemedCSS(theme, css),
  });
  const context = useMemo(() => {
    const tabItems = Children.toArray(children).filter((c: any) => c.type.name == 'BottomNavigationItem');
    return {
      handleItemClick: (label: string) => {
        onItemChange(label);
      },

      activeItem,
    };
  }, [children]);

  return (
    <bottomNavigationContext.Provider value={context}>
      <div css={styles} {...props}>
        {children}
      </div>
    </bottomNavigationContext.Provider>
  );
};



BottomNavigation.Item = BottomNavigationItem;

export default BottomNavigation;
