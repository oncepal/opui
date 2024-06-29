/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import { ComponentBaseProps } from '../props';

import { useThemedCSS, useCSS, useTheme } from '../../styles/css';
import { createContext, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import BottomSheetScrim from './BottomSheetScrim';

export type BottomSheetProps = ComponentBaseProps & {
  height?: string;
  open: boolean;
  scrim?: boolean;
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
  scrim = true,
  onClose,
  children,
  onClick,
  css,
  ...props
}: BottomSheetProps) => {
  const theme = useTheme();

  // The CSS properties of drawer content container,
  const contentStyles = useCSS({
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
          {scrim && <BottomSheetScrim blur={blur} closeOnClickScrim={closeOnClickScrim} onClose={onClose} />}
          <motion.div
            onClick={handleClickContent}
            transition={transition}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            css={contentStyles}
            {...props}>
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
