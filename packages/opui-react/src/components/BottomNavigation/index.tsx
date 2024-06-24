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

export const tabsContext = createContext<BottomNavigationContext>({});

const BottomNavigation = ({ onItemChange, activeItem, css, children, ...props }: BottomNavigationProps) => {
  const theme = useTheme();
  const styles = useCSS({
    display: 'flex',
    position:'fixed',
    bottom:0,
    left:0,
    right:0,
    textAlign: 'center',
    padding: theme.app.bottomNavigation.padding,
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
    <tabsContext.Provider value={context}>
      <div css={styles} {...props}>
        {children}
      </div>
    </tabsContext.Provider>
  );
};



BottomNavigation.Item = BottomNavigationItem;

export default BottomNavigation;
