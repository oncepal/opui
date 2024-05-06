/** @jsxImportSource @emotion/react */

import {
  createContext,
  Children,
  CSSProperties,
  cloneElement,
  ComponentPropsWithoutRef,
  DetailedReactHTMLElement,
  useMemo,
  useContext,
} from 'react';
import { ComponentBaseProps } from '../props';
import { useCSS, useTheme, useThemedCSS } from '../../styles/css';
import { Theme } from '../../styles/themes';
import vars from '../../styles/vars';

type TabsProps = ComponentBaseProps & {
  onTabsChange: (label: string) => void;
  activeTab: string;
};
type TabsIndicatorProps = ComponentBaseProps & {};

type TabItemProps = ComponentBaseProps & {
  label: string;
  disabled?: boolean;
  onClick?: (label: string) => void;
  css?: (theme: Theme, isCurrentTab: boolean) => CSSProperties;
};

type TabsContext = {
  handleTabClick?: (label: string) => void;
  indicatorTranslateX?: any;
  indicatorWidth?: number;
  activeTab?: string;
};

const tabsContext = createContext<TabsContext>({});

const Tabs = ({ onTabsChange, activeTab, css, children, ...props }: TabsProps) => {
  const theme = useTheme();
  const styles = useCSS({
    display: 'flex',
    position: 'relative',
    ...useThemedCSS(theme, css),
  });
  const context = useMemo(() => {
    const tabItems = Children.toArray(children).filter((c: any) => c.type.name == 'TabItem');
    return {
      handleTabClick: (label: string) => {
        onTabsChange(label);
      },
      indicatorTranslateX: tabItems.reduce((a: number, v: any, i: number) => {
        if (v.props.label == activeTab) {
          a = i * 100;
        }
        return a;
      }, 0),
      activeTab,
      indicatorWidth: 100 / tabItems.length,
    };
  }, [children]);

  return (
    <tabsContext.Provider value={context}>
      <div css={styles} {...props}>
        {Children.map(children, (child: any, i) => {
          const element = child as DetailedReactHTMLElement<any, HTMLElement>;

          if (child.type.name == 'TabItem') {
            return cloneElement(element, {
              ...{ ...element.props },
            });
          }

          if (child.type.name == 'TabsIndicator') {
            return cloneElement(element, {
              ...{ ...element.props },
            });
          }
          return undefined;
        })}
      </div>
    </tabsContext.Provider>
  );
};

const TabItem = ({ label, disabled, onClick, css, children, ...props }: TabItemProps) => {
  const theme = useTheme();
  const context = useContext(tabsContext);
  const tabsIndicatorStyles = useCSS({
    flex: 1,
    textAlign: 'center',
    padding: '.8em 1em',
    color: disabled
      ? context.activeTab == label
        ? theme.colors.primary || vars.colors.purple
        : theme.colors.black || vars.colors.black
      : theme.colors.grey || vars.colors.grey,
    ...useThemedCSS(theme, css),
  });

  const handleClickTab = () => {
    onClick?.(label);
    context.handleTabClick?.(label);
  };

  return (
    <div css={tabsIndicatorStyles} onClick={handleClickTab} {...props}>
      {label}
    </div>
  );
};

const TabsIndicator = ({ css, className, ...props }: React.ComponentPropsWithoutRef<'span'> & TabsIndicatorProps) => {
  const theme = useTheme();
  const context = useContext(tabsContext);
  const tabsIndicatorStyles = useCSS({
    width: context.indicatorWidth + '%',
    position: 'absolute',
    height: '1px',
    background: vars.colors.purple,
    left: 0,
    bottom: 0,
    transform: `translateX(${context.indicatorTranslateX}%)`,
    transition: 'transform .25s',
    willChange: 'transform',
    ...useThemedCSS(theme, css),
  });

  return <span css={tabsIndicatorStyles} {...props} />;
};

Tabs.Item = TabItem;
Tabs.Indicator = TabsIndicator;
export default Tabs;
