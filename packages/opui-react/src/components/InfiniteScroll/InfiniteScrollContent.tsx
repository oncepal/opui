/** @jsxImportSource @emotion/react */

import { ComponentPropsWithoutRef } from "react";
import { useThemedCSS, useCSS, useTheme } from '../../styles/css';
import { ComponentBaseProps } from "../props";
export type InfiniteScrollContentProps = ComponentBaseProps & Partial<{}>;
export const InfiniteScrollContent = ({ children, css, ...props }: ComponentPropsWithoutRef<'div'> & InfiniteScrollContentProps) => {
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