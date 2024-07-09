/** @jsxImportSource @emotion/react */
import { keyframes } from '@emotion/react';
import { Theme } from '../../styles/themes';
import { ComponentBaseProps } from '../props';

import { useThemedCSS, useCSS, useTheme } from '../../styles/hooks';

type DialogContentProps = ComponentBaseProps & {
 notCenter?:boolean
};

const DialogContent = ({
  children,notCenter,
  css,
  ...props
}: DialogContentProps) => {
  const theme = useTheme();

  const styles = useCSS({
    display: 'flex',
    alignItems: 'center',
    justifyContent: !notCenter ? 'center' : 'flex-start',
  });

  return (
    <div css={styles}>
      {  children}
    </div>
  );
};

export default DialogContent;
