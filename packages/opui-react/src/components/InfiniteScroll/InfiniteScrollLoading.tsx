/** @jsxImportSource @emotion/react */

import { ComponentPropsWithoutRef } from "react";
import { useThemedCSS, useCSS, useTheme } from '../../styles/css';
import { ComponentBaseProps } from "../props";
export type InfiniteScrollLoadingProps = ComponentBaseProps & Partial<{}>;
export const InfiniteScrollLoading = ({ children, css, ...props }: ComponentPropsWithoutRef<'div'> & InfiniteScrollLoadingProps) => {
    const theme = useTheme();
    const styles = useCSS({
      display: 'inline-flex',      
      ...useThemedCSS(theme, css),
    });
  
    return (
      <div css={styles} {...props}>
        {children}
      </div>
    );
  };