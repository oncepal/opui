/** @jsxImportSource @emotion/react */

import { ReactNode, useEffect, useState } from 'react';
import { ComponentBaseProps } from '../props';
import { useCSS, useThemedCSS, useTheme, useMobileStyles } from '../../styles/hooks';

type NavBarItemProps = ComponentBaseProps & {
  content?: ReactNode;
};

const NavBarBrand = ({ content, css, children, ...props }: NavBarItemProps) => {
    const theme = useTheme();
    const styles = useCSS({
      display: 'flex',
      alignItems: 'center',
      flex: 1.5,
      ...useThemedCSS(theme, css),
    });
    return (
      <div css={styles} {...props}>
        {children}
      </div>
    );
  };

  export default NavBarBrand