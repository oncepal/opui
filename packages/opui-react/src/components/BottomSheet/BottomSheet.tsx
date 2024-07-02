/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import { ComponentBaseProps } from '../props';

import { useThemedCSS, useCSS, useTheme } from '../../styles/css';
import { createContext, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import BottomSheetScrim from './BottomSheetScrim';
import BottomSheetDragHandler from './BottomSheetDragHandler';

export type BottomSheetProps = ComponentBaseProps & {
  height?: string;
  open: boolean;
  
  notDragHandler?:boolean
  
  notScrim?: boolean;
  blur?: boolean;
  closeOnClickScrim?: boolean;
  onClose?: () => any;
};
export const transition = { type: 'tween', duration: 0.2 };

export const BottomSheet = ({
  height = '40vh',
  open = false,
  blur = false,
  closeOnClickScrim = true,
  notScrim,
  notDragHandler,
  onClose,
  children,
  onClick,
  css,
  ...props
}: BottomSheetProps) => {
  const theme = useTheme();

  const styles = useCSS({
    touchAction: 'none',
    background: theme.colors.white,
    position: 'fixed',
    zIndex: theme.app.sheet.zIndex,
    height,
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: theme.app.sheet.radius,
    borderTopRightRadius: theme.app.sheet.radius,
    padding: '1em',
    ...useThemedCSS(theme, css),
  });

  const handleClickContent = (e: any) => {
    onClick?.();
  };
  return (
    <AnimatePresence>
      {open && (
        <>
          {!notScrim && <BottomSheetScrim blur={blur} closeOnClickScrim={closeOnClickScrim} onClose={onClose} />}
          <motion.aside
            onClick={handleClickContent}
            transition={transition}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            css={styles}
            {...props}>
            {!notDragHandler && <BottomSheetDragHandler/> }
            {children}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};
