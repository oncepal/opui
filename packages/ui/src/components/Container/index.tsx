/** @jsxImportSource @emotion/react */

import { ComponentBaseProps, Margin, Position, Padding, Themed } from '../props';
import { useCSS, useTheme, usePadding, usePosition, useMargin, useThemedCSS, useThemedProps } from '../../styles/css';
import { forwardRef, MouseEvent, ComponentPropsWithoutRef } from 'react';
import { jsx } from '@emotion/react';

type ContainerProps = ComponentBaseProps &
  Margin &
  Position &
  Padding & {
    main?: boolean;
    footer?: boolean;
    header?: boolean;
    section?: boolean;
    article?: boolean;
    nav?: boolean;
    w?: string;
    h?: string;
    background?: Themed<string>;
    fullHeight?: boolean;
    fullScreen?: boolean;
  };

/**
 * The universal component packer
 * ```js
 *  <Container pa='1em'>
        <Button>ok</Button>
    </Container>
 * ```
 * @param background background color
 * @param fullHeight full height or not
 * @param fullScreen full screen or not
 * @param w container width
 * @param h container height
 * @param onClick click handler
 */

const Container = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'> & ContainerProps>(
  ({ w, h, background, fullHeight = false, fullScreen = false, css, children, onClick, ...props }, ref) => {
    const theme = useTheme();

    const styles = useCSS({
      width: w,
      height: h ? h : fullHeight ? '100%' : ('auto' || 'auto'),
      minHeight: fullScreen ? '100vh' : '',
      background: useThemedProps(theme, background) || (theme.darkMode ? theme.colors.black : theme.colors.white),
      color: theme.darkMode ? theme.colors.white : theme.colors.black,
      ...useMargin(props),
      ...usePadding(props),
      ...usePosition(props),
      ...useThemedCSS(theme, css),
    });

    const handleClickContainer = (e: MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      onClick?.();
    };
    const getElement = () => {
      const { main, footer, header, section, article } = props;
      if (main) return 'main';
      else if (footer) return 'footer';
      else if (header) return 'header';
      else if (section) return 'section';
      else if (article) return 'article';
      else return 'div';
    };

    return jsx(
      getElement(),
      {
        css: styles,
        ref: ref,
        onClick: handleClickContainer,
        ...props,
      },
      children,
    );
  },
);

export default Container;
