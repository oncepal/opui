/** @jsxImportSource @emotion/react */
import { keyframes } from '@emotion/react';
import { Theme } from '../../styles/themes';
import { ComponentBaseProps } from '../props';

import { useThemedCSS, useCSS, useTheme } from '../../styles/hooks';
import tokens from '../../styles/tokens';
import DialogLoading from './DialogLoading';
import { Children, DetailedReactHTMLElement, cloneElement } from 'react';
import DialogScrim from './DialogScrim';
import { AnimatePresence } from 'framer-motion';
import DialogCloser from './DialogCloser';
import DialogHeader from './DialogHeader';
import DialogContent from './DialogContent';
import DialogFooter from './DialogFooter';
export type DialogProps = ComponentBaseProps & {
  open: boolean;
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
  open = false,
  closeOnClickScrim = false,
  loading,
  notCloser,
  notCenter,
  notScrim,
  onClose,
  animationType = 'slide',
  children,
  css,
  ...props
}: DialogProps) => {
  const theme = useTheme();

  const styles = useCSS({
    zIndex: theme.app.dialog.zIndex,
  });

  return (
    <AnimatePresence>
      {open && (
        <>
          {!notScrim && <DialogScrim closeOnClickScrim={closeOnClickScrim} />}

          <aside css={styles}>
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
          </aside>
        </>
      )}
    </AnimatePresence>
  );
};

Dialog.Footer = DialogFooter;
Dialog.Content = DialogContent;
Dialog.Header = DialogHeader;
export default Dialog;
