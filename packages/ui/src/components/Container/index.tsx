/** @jsxImportSource @emotion/react */

import { ComponentBaseProps, Margin, Position, Padding, Themed } from '../props';
import { useCSS, useTheme, usePadding, usePosition, useMargin, useThemedCSS, useThemedValue } from '../../styles/css';
import { forwardRef, MouseEvent, ComponentPropsWithoutRef } from 'react';

type ContainerProps = ComponentBaseProps &
  Margin &
  Position &
  Padding & {
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
 * @returns
 */

const Container = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'> & ContainerProps>(
  ({ w, h, background, fullHeight = false, fullScreen = false, css, children, onClick, ...props }, ref) => {
    const theme = useTheme();
    const styles = useCSS({
      width: w,
      height: h ? h : fullHeight ? '100%' : fullScreen ? '100vh' : 'auto',
      ...useMargin(props),
      ...usePadding(props),
      ...usePosition(props),
      background: useThemedValue(theme, background),
      ...useThemedCSS(theme, css),
    });

    const handleClickContainer = (e: MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      onClick?.();
    };

    return (
      <div ref={ref} onClick={handleClickContainer} css={styles} {...props}>
        {children}
      </div>
    );
  },
);

export default Container;
