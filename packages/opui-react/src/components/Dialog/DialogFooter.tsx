/** @jsxImportSource @emotion/react */
import { keyframes } from '@emotion/react';
import { Theme } from '../../styles/themes';
import { ComponentBaseProps } from '../props';

import { useThemedCSS, useCSS, useTheme } from '../../styles/hooks';

type DialogFooterProps = ComponentBaseProps & {
 
};

const DialogFooter = ({
  children,
  css,
  ...props
}: DialogFooterProps) => {
  const theme = useTheme();

  const styles = useCSS({
    position: 'absolute',
    top: '0',
    left: '0',
    height: '100%',
    borderRadius: 'inherit',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(255,255,255,.8)',
  });

  return (
    <footer css={styles}>
      {  children}
    </footer>
  );
};

export default DialogFooter;
