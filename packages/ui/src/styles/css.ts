import { Theme } from './themes';
import { Flex, Margin, Padding, Position, Themed } from '../components/props';
import { css, CSSObject, useTheme as useEmotionTheme } from '@emotion/react';
import vars from './vars';

export const useTheme = () => useEmotionTheme() as Theme;
export const useCSS = css;
type Color = keyof typeof vars.colors;

export function useColor(color: Color, theme: Theme, defaultColor?: string) {
  return defaultColor || (theme ? theme.colors[color] : vars.colors[color]);
}
export function useCenter(): CSSObject {
  return { display: 'flex', alignItems: 'center', justifyContent: 'center' };
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

export function useThemedCSS(theme:Theme, target?: Themed<CSSObject>) {
  return target && (typeof target == 'function' ? target(theme) : target);
}

export function useFlex(props: Flex): CSSObject {
  const { flexItem, flex } = props;
  return { ...(flexItem && { flex: 'none' }), ...(flex && { display: 'flex' }) };
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
