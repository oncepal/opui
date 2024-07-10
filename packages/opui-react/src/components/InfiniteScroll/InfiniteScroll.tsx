/** @jsxImportSource @emotion/react */

import React, { Children, DetailedReactHTMLElement, cloneElement, useState } from 'react';
import { useCSS, useTheme, useThemedCSS } from '../../styles/hooks';
import { Theme } from '../../styles/themes';
import { ComponentBaseProps } from '../props';
import { InfiniteScrollContent } from './InfiniteScrollContent';
import { InfiniteScrollEnding } from './InfiniteScrollEnding';
import { InfiniteScrollLoading } from './InfiniteScrollLoading';
import { motion } from 'framer-motion';
type InfiniteScrollProps = ComponentBaseProps & {
  threshold?: number;
  bottomed?: boolean;
  onScrollToBottom?: () => any;
  ending?: React.ReactNode;
};
/**
 * 无限滚动组件
 * 
 * 通常用于承载一个长内容页面，滚到到最下面时，触发一些行为。
 * @param threshold 触发加载事件的滚动触底距离阈值
 * @param ending bottom ending component
 * @param onScrollToBottom scroll to bottom handler
 * @param bottomed arrived or not bottom
 * @example
 * 
 * ```js
 *  <InfiniteScroll onScrollToBottom={handleLoadMore}>
 *    <InfiniteScroll.Content>
        <-- 你的自定义内容 -->
       </InfiniteScroll.Content>
       <InfiniteScroll.Ending>
         <Container>ending...</Container>
       </InfiniteScroll.Ending>
       <InfiniteScroll.Loading>
         <Container>loading...</Container>
       </InfiniteScroll.Loading>
    </InfiniteScroll>
 * ```
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
}: InfiniteScrollProps) => {
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
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      css={styles}
      onTouchMove={e => handleTouchMove(e)}
      onScroll={handleScroll}
      {...props}>
      {Children.map(children, (child: any, i) => {
        const element = child as DetailedReactHTMLElement<any, HTMLDivElement>;
        if (['InfiniteScrollLoading', 'InfiniteScrollContent', 'InfiniteScrollEnding'].includes(child.type.name)) {
          return (
            <>
              {cloneElement(element, {
                ...{ ...element.props },
              })}
            </>
          );
        }
        if (bottomed && ['InfiniteScrollEnding'].includes(child.type.name)) {
          return (
            <>
              {cloneElement(element, {
                ...{ ...element.props },
              })}
            </>
          );
        }
        return undefined;
      })}
    </motion.div>
  );
};
InfiniteScroll.Content = InfiniteScrollContent;
InfiniteScroll.Ending = InfiniteScrollEnding;
InfiniteScroll.Loading = InfiniteScrollLoading;
export default InfiniteScroll;
