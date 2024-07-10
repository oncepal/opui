/** @jsxImportSource @emotion/react */

import { Semantic, ComponentBaseProps, Margin, Position, Padding, Themed } from '../props';
import { useCSS, useTheme, usePadding, usePosition, useMargin, useThemedCSS, useThemedProps } from '../../styles/hooks';
import { forwardRef, MouseEvent, ComponentPropsWithoutRef } from 'react';
import { jsx } from '@emotion/react';

type ContainerProps = ComponentBaseProps &
  Margin &
  Position &
  Padding &
  Semantic & {
    gradient?: string;
    layout?:boolean
    inline?: boolean;
    width?: string;
    height?: string;
    radius?: Themed<string>;
    background?: Themed<string>;
    fullHeight?: boolean;
    fullScreen?: boolean;
    center?:boolean
  };

/**
 * 通用元件包装机，一个加强版的万能标签，拥有各种可自定义的功能尺寸以及标签本身。
 * 用法：
 * ```js
 *  <Container header pa='1em'>
        <Button>ok</Button>
    </Container>
 * ```
 * @param layout 作为layout，默认作为背景
 * @param background 背景
 * @param fullHeight 是否100%高度
 * @param fullScreen 是否全屏高度
 * @param width 宽度
 * @param height 高度
 * @param center 子元素是否剧中
 * @param onClick click handler
 */

const Container = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'> & ContainerProps>(
  (
    {
      width,
      height,
      inline,
      radius,
      gradient,
      background,
      fullHeight = false,
      layout=true,
      fullScreen = false,
      center,
      css,
      children,
      onClick,
      ...props
    },
    ref,
  ) => {
    const theme = useTheme();

    const styles = useCSS({
      display: inline ? 'inlen-flex' : 'block',
      borderRadius: useThemedProps(theme, radius),
      width,
      height: height ? height : fullHeight ? '100%' : 'auto' || 'auto',
      minHeight: fullScreen ? '100vh' : '',
      background:
        gradient || useThemedProps(theme, background) || (theme.isDarkMode ? (layout?theme.colors.darkLayout:theme.colors.darkBackground) : (layout?theme.colors.lightLayout:theme.colors.lightBackground)),
      color: theme.isDarkMode ? theme.colors.textInDarkBackground : theme.colors.textInLightBackground,
      ...(center && {display:'flex',justifyContent:'center',alignItems:'center'}),
      ...useMargin(props),
      ...usePadding(props),
      ...usePosition(props),
      ...useThemedCSS(theme, css),
    });

    const handleClickContainer = (e: MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      onClick?.();
    };

    const getElement = () => {
      const { main=false, footer=false, header=false, section=false, article=false } = props;
      if (main) return 'main';
      else if (footer) return 'footer';
      else if (header) return 'header';
      else if (section) return 'section';
      else if (article) return 'article';
      else return 'motion.div';
    };

    return jsx(
      getElement(),
      {
        css: styles,
        ref: ref,
        onClick: handleClickContainer,
        ...props,
      },
      children,
    );
  },
);

export default Container;
