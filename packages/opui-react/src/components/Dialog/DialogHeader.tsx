/** @jsxImportSource @emotion/react */
import { keyframes } from '@emotion/react';
import { Theme } from '../../styles/themes';
import { ComponentBaseProps } from '../props';

import { useThemedCSS, useCSS, useTheme } from '../../styles/hooks';

type DialogHeaderProps = ComponentBaseProps & {
  notCenter?: boolean;
};

const DialogHeader = ({ children, notCenter, css, ...props }: DialogHeaderProps) => {
  const theme = useTheme();

  const styles = useCSS({
    display: 'flex',
    alignItems: 'center',
    justifyContent: !notCenter ? 'center' : 'flex-start',
  });

  return <header css={styles}>{children}</header>;
};

export default DialogHeader;
