
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
import { carouselContext } from './Carousel';

type CarouselItemProps = ComponentBaseProps & {
    onClick?: () => void;
    css?: (theme: Theme, isCurrentItem: boolean) => CSSProperties;
  };

  const CarouselItem = ({ onClick, css, children, ...props }: CarouselItemProps) => {
    const theme = useTheme();
    const context = useContext(carouselContext);
    const styles = useCSS({
      flex: 1,
      textAlign: 'center',
      padding: '.8em 1em',
      ...useThemedCSS(theme, css),
    });
  
    const handleClickItem = () => {
      onClick?.();
    };
  
    return (
      <div css={styles} onClick={handleClickItem} {...props}>
        {children}
      </div>
    );
  };
  
export default CarouselItem  