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

type SwiperProps = ComponentBaseProps & {
  onChange?: () => void;
};
type SwiperIndicatorProps = ComponentBaseProps & {};

type SwipeItemProps = ComponentBaseProps & {
  onClick?: () => void;
  css?: (theme: Theme, isCurrentItem: boolean) => CSSProperties;
};

type SwiperContext = {
  handleItemClick?: () => void;
};

const swiperContext = createContext<SwiperContext>({});

const Swiper = ({ onChange, css, children, ...props }: SwiperProps) => {
  const theme = useTheme();
  const styles = useCSS({
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    '& > div': {
      transform: `translateX(0%)`,
      transition: 'transform .25s',
      willChange: 'transform',
    },
    ...useThemedCSS(theme, css),
  });
  const context = useMemo(() => {
    const tabItems = Children.toArray(children).filter((c: any) => c.type.name == 'SwipeItem');
    return {
      handleItemClick: () => {
        onChange?.();
      },
    };
  }, [children]);

  return (
    <swiperContext.Provider value={context}>
      <div css={styles} {...props}>
        <div>
          {Children.map(children, (child: any, i) => {
            if (child.type.name == 'SwipeItem') {
              return child;
            }
            return undefined;
          })}
        </div>
        {Children.map(children, (child: any, i) => {
          if (child.type.name == 'SwiperIndicator') {
            return child;
          }
          return undefined;
        })}
      </div>
    </swiperContext.Provider>
  );
};

const SwipeItem = ({ onClick, css, children, ...props }: SwipeItemProps) => {
  const theme = useTheme();
  const context = useContext(swiperContext);
  const SwiperIndicatorStyles = useCSS({
    flex: 1,
    textAlign: 'center',
    padding: '.8em 1em',
    ...useThemedCSS(theme, css),
  });

  const handleClickItem = () => {
    onClick?.();
  };

  return (
    <div css={SwiperIndicatorStyles} onClick={handleClickItem} {...props}>
      {children}
    </div>
  );
};

const SwiperIndicator = ({
  css,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'span'> & SwiperIndicatorProps) => {
  const theme = useTheme();
  const context = useContext(swiperContext);
  const SwiperIndicatorStyles = useCSS({
    position: 'absolute',
    height: '1px',
    background: vars.colors.purple,
    left: 0,
    bottom: 0,

    ...useThemedCSS(theme, css),
  });

  return <span css={SwiperIndicatorStyles} {...props} />;
};

Swiper.Item = SwipeItem;
Swiper.Indicator = SwiperIndicator;
export default Swiper;
