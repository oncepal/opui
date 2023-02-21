/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import { ComponentBaseProps, Themed } from '../props';

import { useThemedCSS, useCSS, useTheme } from '../../styles/css';

import { debounce } from '../../utils';
import { useState } from 'react';

type FabProps = ComponentBaseProps &
  Partial<{
    adsorption?: boolean;
    draggable?: boolean;
    position?: {
      left: number | string;
      top: number | string;
    };
  }>;

/**
 * Fabs are container elements that contain one or more fab buttons. 
 * They should be placed in a fixed position that does not scroll with the content. 
 *
 * ```
 * <Fab>
    <Icon src='****' />
   </Fab>
 * ```
 * @param position initial position.
 * @param draggable draggable or not.
 * @param adsorption does it attach to the edge of the screen.
 */
const Fab = ({
  draggable = false,
  adsorption = false,
  position = {
    left: 0,
    top: 0,
  },
  children,
  css,
  ...props
}: FabProps) => {
  const [computedPosition, setComputedPosition] = useState(position);
  const [maxLeft, setMaxLeft] = useState(0);
  const [maxTop, setMaxTop] = useState(0);
  const [clientProperty, setClientProperty] = useState<any>(0);
  const theme = useTheme();
  const styles = useCSS({
    position: 'fixed',
    ...position,
    // zIndex: theme.szIndex.floatingWindow,
    transition: '.25s all',
    ...useThemedCSS(theme, css),
  });

  const handleTouchStart = (e: any) => {
    if (!clientProperty) {
      setClientProperty({
        documentElement: e.touches[0].target.ownerDocument.documentElement,
        clientHeight: e.touches[0].target.clientHeight,
        clientWidth: e.touches[0].target.clientWidth,
      });
      setMaxTop(e.touches[0].target.ownerDocument.documentElement.clientHeight - e.touches[0].target.clientHeight);
      setMaxLeft(e.touches[0].target.ownerDocument.documentElement.clientWidth - e.touches[0].target.clientWidth);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    debounce(
      () =>
        setComputedPosition({
          left: Math.min(maxLeft, Math.max(0, parseFloat(e.touches[0].pageX.toFixed(2)))),
          top: Math.min(maxTop, Math.max(0, parseFloat(e.touches[0].pageY.toFixed(2)))),
        }),
      2,
    );
  };

  const handleTouchEnd = () => {
    if (adsorption) {
      if (computedPosition.left >= (clientProperty.documentElement.clientWidth * 3) / 4) {
        setComputedPosition((v: any) => ({
          ...v,
          left: maxLeft,
        }));
      }
      if (computedPosition.left <= clientProperty.documentElement.clientWidth / 4) {
        setComputedPosition((v: any) => ({
          ...v,
          left: 0,
        }));
      }
    }
  };

  const touchProps = draggable
    ? {
        onTouchStart: handleTouchStart,
        onTouchEnd: handleTouchEnd,
        onTouchMove: handleTouchMove,
      }
    : {};
  return (
    <aside css={styles} {...touchProps} {...props}>
      {children}
    </aside>
  );
};

export default Fab;
