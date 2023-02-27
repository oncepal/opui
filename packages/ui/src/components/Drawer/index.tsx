/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import { ComponentBaseProps } from '../props';

import { useThemedCSS, useCSS, useTheme } from '../../styles/css';
import { useEffect, useState } from 'react';

type DrawerProps = ComponentBaseProps & {
  width?: string;
  height?: string;
  position?: 'left' | 'right' | 'top' | 'bottom';
  open?: boolean;
  mask?: boolean;

  onClose?: () => any;
};

/**
 * BottomNavigation drawers (or "sidebars") provide access to destinations and app functionality,
 * such as switching accounts. They can either be permanently on-screen or
 * controlled by a navigation menu icon..
 * The component is initially not visible on the screen,
 * but can be pulled in from the side of the window specified by
 * the position prop and its width can be set by the width prop.
 * ```
 * const [drawerOpen, setDrawerOpen] = useState(false);
 * <Drawer
 *     open={drawerOpen}
 *     position='bottom'
 *     onClose={() => setDrawerOpen(v => !v)}
 *     co={t => ({
 *       paddingTop: '8px',
 *       borderTopLeftRadius: '8px',
 *       borderTopRightRadius: '8px',
 *     })}>
 *     <Card>Main Content</Card>
 * </Drawer>
 * ```
 *
 * @param mask weather the component has a mask.
 * @returns <aside/>
 */
const Drawer = ({
  width = '60vw',
  height = '40vh',
  position = 'left',
  open = false,
  mask = true,
  onClose,
  children,

  css,
  ...props
}: DrawerProps) => {
  const theme = useTheme();

  // Main style of drawer container
  const [contentStyle, setContentStyle] = useState({});
  const [openStyle, setOpenStyle] = useState({});

  // The CSS properties of drawer content container,
  const contentStyles = useCSS({
    touchAction: 'none',
    background: theme.colors.white || 'white',
    position: 'fixed',
    // zIndex: theme.zIndex.drawer,
    transition: 'all .25s cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    ...contentStyle,
    ...(open ? openStyle : {}),
    ...useThemedCSS(theme, css),
  });

  /**
   * The CSS properties of the background layer,
   * mainly the fixed layout and the corresponding color, animation
   */
  const maskStyles = useCSS({
    touchAction: 'none',
    position: 'fixed',
    // zIndex: theme.zIndex.drawer,
    inset: 0,
    backgroundColor: 'rgba(0,0,0,.5)',
    opacity: 1,
    visibility: open ? 'visible' : 'hidden',
    transition: 'opacity .25s cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  });

  const handleClickmask = (e: any) => {
    onClose?.();
  };

  useEffect(() => {
    // Calculate the corresponding position and length according to several attributes
    switch (position) {
      case 'right':
        setContentStyle({
          width: width,
          height: '100%',
          right: '-100%',
          top: '0',
          bottom: '0',
        });
        setOpenStyle({ right: 0 });
        break;
      case 'top':
        setContentStyle({
          width: '100%',
          height: height,
          left: 0,
          right: 0,
          top: '-100%',
        });
        setOpenStyle({ top: 0 });
        break;
      case 'bottom':
        setContentStyle({
          width: '100%',
          height: height,
          left: 0,
          right: 0,
          bottom: '-100%',
        });
        setOpenStyle({ bottom: 0 });
        break;
      case 'left':
        setContentStyle({
          width: width,
          height: '100%',
          left: '-100%',
          top: '0',
          bottom: '0',
        });
        setOpenStyle({ left: 0 });
        break;
      default:
        break;
    }
  }, [position, width, height]);

  return (
    <aside {...props}>
      {mask && <div css={maskStyles} onClick={handleClickmask}></div>}
      <div css={contentStyles}>{children}</div>
    </aside>
  );
};

export default Drawer;
