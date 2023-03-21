import { Theme } from './themes';
import { Flex, Margin, Padding, Position, Themed, Colors } from '../components/props';
import { css, CSSObject, useTheme as useEmotionTheme } from '@emotion/react';

export const useTheme = () => useEmotionTheme() as Theme;
export const useCSS = css;

export function useCenter(): CSSObject {
  return { display: 'flex', alignItems: 'center', justifyContent: 'center' };
}
export function useMobileStyles(theme: Theme, css: CSSObject) {
  return {
    [`@media (max-width: ${theme.media.mobile})`]: css,
  };
}
export function useMediaQuery(breakPoint: Pick<Theme, 'media'>, css: CSSObject) {
  return {
    [`@media (max-width: ${breakPoint})`]: css,
  };
}

export function useHorizontalCenter() {
  return { display: 'flex', justifyContent: 'center' };
}
export function useVerticalCenter() {
  return { display: 'flex', alignItems: 'center' };
}

export function useThemedProps<T>(theme: Theme, target?: Themed<T>) {
  return target && (typeof target == 'function' ? (target as Function)(theme) : target);
}

export function useThemedCSS(theme: Theme, target?: Themed<CSSObject>) {
  return target && (typeof target == 'function' ? target(theme) : target);
}

export function useFlex(props: Flex): CSSObject {
  const { flexItem, flex } = props;
  return { ...(flexItem && { flex: 'none' }), ...(flex && { display: 'flex' }) };
}

export function useCloudyBackground(theme: Theme) {
  return {
    backdropFilter: 'saturate(180%) blur(10px)',
    background: theme.colors.transparent,
    boxShadow: theme.darkMode ? theme.shadows.md : theme.shadows.lg,
  };
}

export function useMargin(props: Margin): CSSObject {
  const { ma, my, mt, mb, mx, ml, mr } = props;
  return { margin: ma, marginTop: mt || my, marginBottom: mb || my, marginLeft: ml || mx, marginRight: mr || mx };
}

export function usePadding(props: Padding): CSSObject {
  const { pa, py, pt, pb, px, pl, pr } = props;
  return { padding: pa, paddingTop: pt || py, paddingBottom: pb || py, paddingLeft: pl || px, paddingRight: pr || px };
}

export function usePosition(props: Position): CSSObject {
  const { relative, absolute, sticky, fixed, left, top, right, bottom } = props;
  return {
    left: left,
    top: top,
    right: right,
    bottom: bottom,
    position: relative ? 'relative' : absolute ? 'absolute' : fixed ? 'fixed' : sticky ? 'sticky' : 'static',
  };
}
