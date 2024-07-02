/** @jsxImportSource @emotion/react */

import { ReactNode, useEffect, useState } from 'react';
import { ComponentBaseProps } from '../props';
import { useCSS, useThemedCSS, useTheme, useMobileStyles } from '../../styles/css';
import { throttle } from '@oncepal/utils';
type PickerItemProps = ComponentBaseProps & {
  content?: ReactNode;
};

const PickerItem = ({ content, css, children, ...props }: PickerItemProps) => {
    const theme = useTheme();
    const styles = useCSS({
      flex: 1.5,
  
      ...useThemedCSS(theme, css),
    });
    return (
      <div css={styles} {...props}>
        {children}
      </div>
    );
  };
  
  export default PickerItem