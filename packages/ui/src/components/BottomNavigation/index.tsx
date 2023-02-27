/** @jsxImportSource @emotion/react */

import { createContext, Children, CSSProperties, useMemo, useContext } from 'react';
import { ComponentBaseProps } from '../props';
import { useCSS, useTheme, useThemedCSS } from '../../styles/css';
import { Theme } from '../../styles/themes';
import vars from '../../styles/vars';

type BottomNavigationProps = ComponentBaseProps & {
  onItemChange: (label: string) => void;
  activeItem: string;
};

type BottomNavigationItemProps = ComponentBaseProps & {
  label: string;
  disabled?: boolean;
  onClick?: (label: string) => void;
  css?: (theme: Theme, isCurrentItem: boolean) => CSSProperties;
};

type BottomNavigationContext = {
  handleItemClick?: (label: string) => void;
  activeItem?: string;
};

const tabsContext = createContext<BottomNavigationContext>({});

const BottomNavigation = ({ onItemChange, activeItem, css, children, ...props }: BottomNavigationProps) => {
  const theme = useTheme();
  const styles = useCSS({
    display: 'flex',
    position: 'relative',
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

const BottomNavigationItem = ({ label, disabled, onClick, css, children, ...props }: BottomNavigationItemProps) => {
  const theme = useTheme();
  const context = useContext(tabsContext);
  const tabsIndicatorStyles = useCSS({
    flex: 1,
    textAlign: 'center',
    padding: '.8em 1em',
    color: disabled
      ? context.activeItem == label
        ? theme.colors.primary || vars.colors.purple
        : theme.colors.black || vars.colors.black
      : theme.colors.grey || vars.colors.grey,
    ...useThemedCSS(theme, css),
  });

  const handleClickItem = () => {
    onClick?.(label);
    context.handleItemClick?.(label);
  };

  return (
    <div css={tabsIndicatorStyles} onClick={handleClickItem} {...props}>
      {label}
    </div>
  );
};

BottomNavigation.Item = BottomNavigationItem;

export default BottomNavigation;
