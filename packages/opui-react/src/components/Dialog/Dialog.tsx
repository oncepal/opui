/** @jsxImportSource @emotion/react */
import { keyframes } from '@emotion/react';
import { Theme } from '../../styles/themes';
import { ComponentBaseProps } from '../props';

import { useThemedCSS, useCSS, useTheme } from '../../styles/hooks';
import * as tokens from '../../styles/tokens';
import DialogLoading from './DialogLoading';
import { Children, DetailedReactHTMLElement, cloneElement } from 'react';
import DialogScrim from './DialogScrim';
import { AnimatePresence, motion } from 'framer-motion';
import DialogCloser from './DialogCloser';
import DialogHeader from './DialogHeader';
import DialogContent from './DialogContent';
import DialogFooter from './DialogFooter';
export type DialogProps = ComponentBaseProps & {
  isOpened: boolean;
  notScrim?: boolean;
  loading?: boolean;
  notCloser?: boolean;
  notCenter?: boolean;
  width?: string;
  fullScreen?: boolean;
  closeOnClickScrim?: boolean;
  blur?: boolean;
  radius?: string;
  animationType?: 'none' | 'slide' | 'fade' | string;
  onClose?: () => void;
};
export const transition = { type: 'tween', duration: 0.2 };
/*
 * Displays a dialog with a custom content that requires attention or provides additional information.
 * ```js
 *
 * ```
 */
const Dialog = ({
  isOpened = false,
  closeOnClickScrim = false,
  loading,
  notCloser,
  notCenter,
  notScrim,
  onClose,
  blur,
  animationType = 'slide',
  children,
  css,
  ...props
}: DialogProps) => {
  const theme = useTheme();

  const styles = useCSS({
    touchAction: 'none',
    position: 'fixed',
    zIndex: theme.dialog.zIndex,
    inset: 0,
    backdropFilter: blur ? 'blur(4px)' : '',
    background: theme.isDarkMode?theme.colors.darkScrim:theme.colors.lightScrim,
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  });

  return (
    <AnimatePresence>
      {isOpened && (
        <>
          {!notScrim && <DialogScrim closeOnClickScrim={closeOnClickScrim} />}

          <motion.aside css={styles}>
            {Children.map(children, (child: any, i) => {
              const element = child as DetailedReactHTMLElement<any, HTMLDivElement>;
              if (['DialogContent', 'DialogHeader', 'DialogFooter'].includes(child.type.name)) {
                return (
                  <>
                    {cloneElement(element, {
                      ...{ ...element.props },
                    })}
                  </>
                );
              }
              return undefined;
            })}
            {!notCloser && <DialogCloser />}
            {loading && <DialogLoading />}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

Dialog.Footer = DialogFooter;
Dialog.Content = DialogContent;
Dialog.Header = DialogHeader;
export default Dialog;
