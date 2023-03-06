import React, { CSSProperties } from 'react';
import { css, CSSObject } from '@emotion/react';
import { Theme } from '../styles/themes';

export type CSS = Parameters<typeof css>;
export type ColorFormat = 'rgb' | 'rgba' | 'hsl' | 'hsla';
export type Themed<T> = ((theme: Theme) => T) | T;
export type Colors =  Partial<{
  title: boolean;
  desc: boolean;
  primary: boolean;
  secondary: boolean;
  accent: boolean;
  purple: boolean
    black: boolean
    grey: boolean
    blue: boolean
    red: boolean
    green: boolean
    greyBlue: boolean
    greyLight: boolean
    whiteGrey:boolean
    white: boolean
    blackBlue: boolean
    transparent:boolean
}>
export type Padding = Partial<{
  pt: string;
  pb: string;
  pl: string;
  pr: string;
  px: string;
  py: string;
  pa: string;
}>;

export type Margin = Partial<{
  mt: string;
  mb: string;
  ml: string;
  mr: string;
  mx: string;
  my: string;
  ma: string;
}>;

export type Position = Partial<{
  left: string;
  right: string;
  top: string;
  bottom: string;
  relative: boolean;
  absolute: boolean;
  fixed: boolean;
  sticky: boolean;
  static: boolean;
}>;

export type Radius = Partial<{
  radius: number;
}>;

export type ComponentBaseProps = Partial<{
  onClick: () => any;
  className: string;
  children: React.ReactNode;
  css: Themed<CSSObject>;
}>;

export type Flex = Partial<{
  flexItem: boolean;
  flex: boolean;

}>;

export interface ColorObject {
  type: ColorFormat;
  values: any[];
}
