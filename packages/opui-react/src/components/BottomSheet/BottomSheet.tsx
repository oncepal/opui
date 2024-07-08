/** @jsxImportSource @emotion/react */

import { ComponentBaseProps } from '../props';
import { useThemedCSS, useCSS, useTheme } from '../../styles/hooks';
import { AnimatePresence, motion } from 'framer-motion';
import BottomSheetScrim from './BottomSheetScrim';
import BottomSheetDragHandler from './BottomSheetDragHandler';

export type BottomSheetProps = Omit<ComponentBaseProps, 'onClick'> & {
  height?: string;
  isOpened: boolean;
  notDragHandler?: boolean;
  notScrim?: boolean;
  blur?: boolean;
  closeOnClickScrim?: boolean;
  onClose?: () => any;
};

export const transition = { type: 'tween', duration: 0.2 };

/**
 * 显示固定在屏幕底部的次要内容
 * @param height 整个BottomSheet内容的高度
 * @param isOpened 是否打开
 * @param blur 背景是否虚化
 * @param closeOnClickScrim 单击背景是否关闭
 * @param notScrim 不展示一个遮罩背景
 * @param notDragHandler 不展示拖拽控制器
 * @param onClose 关闭控制方法
 * @returns ReactNode
 */
export const BottomSheet = ({
  height = '40vh',
  isOpened = false,
  blur = false,
  closeOnClickScrim = true,
  notScrim,
  notDragHandler,
  onClose,
  children,
  css,
  ...props
}: BottomSheetProps) => {
  const theme = useTheme();

  const styles = useCSS({
    touchAction: 'none',
    background: theme.isDarkMode?theme.colors.darkBackground:theme.colors.lightBackground,
    position: 'fixed',
    zIndex: theme.bottomSheet.zIndex,
    height,
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: theme.bottomSheet.radius,
    borderTopRightRadius: theme.bottomSheet.radius,
    padding: '1em',
    ...useThemedCSS(theme, css),
  });

  return (
    <AnimatePresence>
      {isOpened && (
        <>
          {!notScrim && <BottomSheetScrim blur={blur} closeOnClickScrim={closeOnClickScrim} onClose={onClose} />}
          <motion.aside
            transition={transition}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            css={styles}
            {...props}>
            {!notDragHandler && <BottomSheetDragHandler />}
            {children}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};
