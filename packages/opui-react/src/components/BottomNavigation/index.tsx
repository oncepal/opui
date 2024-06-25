/** @jsxImportSource @emotion/react */

import { createContext, Children, CSSProperties, useMemo, useContext } from 'react';
import { ComponentBaseProps } from '../props';
import { useCSS, useTheme, useThemedCSS } from '../../styles/css';
import BottomNavigationItem from './BottomNavigationItem';

type BottomNavigationProps = ComponentBaseProps & {
  onItemChange: (label: string) => void;
  activeItem: string;
};

type BottomNavigationContext = {
  handleItemClick?: (label: string) => void;
  activeItem?: string;
};

export const bottomNavigationContext = createContext<BottomNavigationContext>({});

const BottomNavigation = ({ onItemChange, activeItem, css, children, ...props }: BottomNavigationProps) => {
  const theme = useTheme();
  const styles = useCSS({
    display: 'flex',
    alignItems:'center',
    position:'fixed',
    bottom:0,
    left:0,
    right:0,
    textAlign: 'center',
    background:theme.colors.white,
    minHeight:theme.app.bottomNavigation.height,
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
