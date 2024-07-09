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
  import { useCSS, useTheme, useThemedCSS } from '../../styles/hooks';
  import { Theme } from '../../styles/themes';
  import * as tokens from '../../styles/tokens';
  import CarouselIndicator from './CarouselIndicator';
import CarouselItem from './CarouselItem';
  
  type CarouselProps = ComponentBaseProps & {
    onChange?: () => void;
  };
  
  
  type CarouselItemProps = ComponentBaseProps & {
    onClick?: () => void;
    css?: (theme: Theme, isCurrentItem: boolean) => CSSProperties;
  };
  
  type CarouselContext = {
    handleItemClick?: () => void;
  };
  
  export const carouselContext = createContext<CarouselContext>({});
  
  const Carousel = ({ onChange, css, children, ...props }: CarouselProps) => {
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
      const tabItems = Children.toArray(children).filter((c: any) => c.type.name == 'CarouselItem');
      return {
        handleItemClick: () => {
          onChange?.();
        },
      };
    }, [children]);
  
    return (
      <carouselContext.Provider value={context}>
        <div css={styles} {...props}>
          <div>
            {Children.map(children, (child: any, i) => {
              if (child.type.name == 'CarouselItem') {
                return child;
              }
              return undefined;
            })}
          </div>
          {Children.map(children, (child: any, i) => {
            if (child.type.name == 'CarouselIndicator') {
              return child;
            }
            return undefined;
          })}
        </div>
      </carouselContext.Provider>
    );
  };
  

  
  Carousel.Item = CarouselItem;
  Carousel.Indicator = CarouselIndicator;
  export default Carousel;
  