/** @jsxImportSource @emotion/react */

import { ReactNode, useEffect, useState } from 'react';
import { ComponentBaseProps } from '../props';
import { useCSS, useThemedCSS, useTheme, useMobileStyles } from '../../styles/hooks';

type NavBarItemProps = ComponentBaseProps & {
  content?: ReactNode;
};

const NavBarContent = ({ content, css, children, ...props }: NavBarItemProps) => {
    const theme = useTheme();
    const styles = useCSS({
      display: 'flex',
      justifyContent: 'center',
      flex: 1,
      ...useThemedCSS(theme, css),
    });
    return (
      <div css={styles} {...props}>
        {children}
      </div>
    );
  };


  export default NavBarContent