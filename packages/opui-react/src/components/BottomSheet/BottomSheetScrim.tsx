/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import { ComponentBaseProps } from '../props';

import { useThemedCSS, useCSS, useTheme } from '../../styles/css';
import { createContext, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BottomSheetProps, transition } from './BottomSheet';

type BottomSheetScrimProps = Pick<BottomSheetProps, 'closeOnClickScrim' | 'blur' | 'onClose'>;

const BottomSheetScrim = ({ closeOnClickScrim, blur, onClose, ...props }: BottomSheetScrimProps) => {
  const theme = useTheme();

  const scrimStyles = useCSS({
    touchAction: 'none',
    position: 'fixed',
    zIndex: theme.app.sheet.zIndex,
    inset: 0,
    backdropFilter: blur ? 'blur(4px)' : '',
    background: theme.colors.scrim,
  });

  const handleClickScrim = (e: any) => {
    closeOnClickScrim && onClose?.();
  };

  return (
    <motion.aside
      css={scrimStyles}
      transition={transition}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleClickScrim}
    />
  );
};

export default BottomSheetScrim;
