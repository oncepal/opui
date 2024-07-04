/** @jsxImportSource @emotion/react */
import { keyframes } from '@emotion/react';
import { Theme } from '../../styles/themes';
import { ComponentBaseProps } from '../props';

import { useThemedCSS, useCSS, useTheme } from '../../styles/hooks';
import { DialogProps } from './Dialog';

type DialogCloserProps = Pick<DialogProps, 'css' | 'onClose'>;

const DialogCloser = ({ onClose, css, ...props }: DialogCloserProps) => {
  const theme = useTheme();

  const styles = useCSS({
    position: 'absolute',
    top: '-6px',
    right: '-6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '12px',
    transition: 'all .25s ease',
  });
  const handleClickClose = () => {
    onClose?.();
  };
  return <button css={styles} onClick={handleClickClose}></button>;
};

export default DialogCloser;
