/** @jsxImportSource @emotion/react */
import { keyframes } from '@emotion/react';
import { Theme } from '../../styles/themes';
import { ComponentBaseProps } from '../props';

import { useThemedCSS, useCSS, useTheme } from '../../styles/hooks';

type DialogFooterProps = ComponentBaseProps & {
  left?: boolean;
  center?: boolean;
};

const DialogFooter = ({ center, left, children, css, ...props }: DialogFooterProps) => {
  const theme = useTheme();

  const styles = useCSS({
    display: 'flex',
    alignItems: 'center',
    justifyContent: center ? 'center' : left ? 'flex-start' : 'flex-end',
  });

  return <footer css={styles}>{children}</footer>;
};

export default DialogFooter;
