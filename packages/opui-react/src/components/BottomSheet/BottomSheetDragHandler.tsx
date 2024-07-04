/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import { ComponentBaseProps } from '../props';

import { useThemedCSS, useCSS, useTheme } from '../../styles/hooks';
import { createContext, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BottomSheetProps, transition } from './BottomSheet';

type BottomSheetDragHandlerProps = {}

const BottomSheetDragHandler = ({ ...props }: BottomSheetDragHandlerProps) => {
  const theme = useTheme();

  const styles = useCSS({
    touchAction: 'none',
    position: 'absolute',
    top:'1em',
    width:'5em',
    height:'1em',
    background: theme.colors.grey,
  });


  return (
    <motion.div
      css={styles}

    />
  );
};

export default BottomSheetDragHandler;
