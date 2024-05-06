/** @jsxImportSource @emotion/react */

import React, { useState } from 'react';
import { useCSS, useTheme, useThemedCSS } from '../../styles/css';
import { Theme } from '../../styles/themes';
import { ComponentBaseProps } from '../props';
type InfiniteScrollProps = ComponentBaseProps & {
  threshold?: number;
  bottomed?: boolean;
  onScrollToBottom?: () => any;
  ending?: React.ReactNode;
};
/**
 * PullRefresh provides pull-to-refresh functionality on a content component. 
 * The pull-to-refresh pattern lets a user pull down on a list of data in order to retrieve more data.
 * ```js
 *  <InfiniteScroll onRefresh={()=>{}}>
      <-- your component -->
    </InfiniteScroll>
 * ```
 * @param threshold load trigger value
 * @param ending bottom ending component
 * @param onScrollToBottom scroll to bottom handler
 * @param bottomed arrived or not bottom
 */
const InfiniteScroll = ({
  ending,
  threshold = 40,
  onScrollToBottom,
  bottomed = false,
  css,
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & InfiniteScrollProps) => {
  const theme = useTheme();
  const [scrollTop, setScrollTop] = useState(0);
  const styles = useCSS({
    height: '100%',
    overflow: 'auto',
    scrollBehavior: 'smooth',
    overscrollBehavior: 'contain',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    ...useThemedCSS(theme, css),
  });

  const handleScrollToBottom = () => {
    onScrollToBottom?.();
  };

  const handleScroll = (e: any) => {
    const element = e.target;
    setScrollTop(element.scrollTop);
    if (element.scrollTop + element.clientHeight + threshold < element.scrollHeight) return;
    handleScrollToBottom();
  };
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (scrollTop > 0) e.stopPropagation();
  };
  return (
    <div css={styles} onTouchMove={e => handleTouchMove(e)} onScroll={handleScroll} {...props}>
      {children}
      {bottomed && ending}
    </div>
  );
};

export default InfiniteScroll;
