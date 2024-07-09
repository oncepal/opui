
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

type CarouselIndicatorProps = ComponentBaseProps & {};

const CarouselIndicator = ({
    css,
    className,
    ...props
  }: React.ComponentPropsWithoutRef<'span'> & CarouselIndicatorProps) => {
    const theme = useTheme();
    const context = useContext(carouselContext);
    const styles = useCSS({
      position: 'absolute',
      height: '1px',
      background: tokens.colors.purple,
      left: 0,
      bottom: 0,
  
      ...useThemedCSS(theme, css),
    });
  
    return <span css={styles} {...props} />;
  };
export default CarouselIndicator  