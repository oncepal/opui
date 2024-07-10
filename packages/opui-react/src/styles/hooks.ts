import { Theme } from './themes';
import { Flex, Margin, Padding, Position, Themed, Colors } from '../components/props';
import { css, CSSObject, useTheme as useEmotionTheme } from '@emotion/react';
import * as tokens from './tokens';
export const useTheme = () => useEmotionTheme() as Theme;
export const useCSS = css;

export function useFlexCenter() {
  return { alignItems: 'center', justifyContent: 'center' };
}
export function useThemeTextColor(theme: Theme, color?: Themed<string>) {
  return (
    useThemedProps(theme, color) ||
    (theme.isDarkMode ? theme.colors.textInDarkBackground : theme.colors.textInLightBackground)
  );
}
export function useThemeBackgourndColor(theme: Theme) {
  return theme.isDarkMode ? theme.colors.darkBackground : theme.colors.lightBackground;
}
export function useThemeLayoutColor(theme: Theme) {
  return theme.isDarkMode ? theme.colors.darkLayout : theme.colors.lightLayout;
}
export function useCenter(): CSSObject {
  return { display: 'flex', alignItems: 'center', justifyContent: 'center' };
}
export function useMobileStyles(theme: Theme, css: CSSObject) {
  return {
    [`@medium (max-width: ${theme.medium.mobile})`]: css,
  };
}
export function useMediaQuery(breakPoint: Pick<Theme, 'medium'>, css: CSSObject) {
  return {
    [`@medium (max-width: ${breakPoint})`]: css,
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

export function useTransition(target?: string) {
  return { transition: 'all .25s' };
}

export function useFlex(props: Flex): CSSObject {
  const { flexItem, flex } = props;
  return { ...(flexItem && { flex: 'none' }), ...(flex && { display: 'flex' }) };
}

export function useCloudyBackground(theme: Theme) {
  return {
    backdropFilter: 'saturate(180%) blur(10px)',
    background: tokens.colors.transparent,
    boxShadow: theme.isDarkMode ? tokens.shadows.md : tokens.shadows.lg,
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
