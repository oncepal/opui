/** @jsxImportSource @emotion/react */

import { ComponentPropsWithoutRef } from "react";
import { useThemedCSS, useCSS, useTheme } from '../../styles/hooks';
import { ComponentBaseProps } from "../props";
export type InfiniteScrollEndingProps = ComponentBaseProps & Partial<{}>;
export const InfiniteScrollEnding = ({ children, css, ...props }: ComponentPropsWithoutRef<'div'> & InfiniteScrollEndingProps) => {
    const theme = useTheme();
    const styles = useCSS({
     
      ...useThemedCSS(theme, css),
    });
  
    return (
      <div css={styles} {...props}>
        {children}
      </div>
    );
  };