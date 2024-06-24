import tokens from './tokens';

type Theme = {
  darkMode: boolean;
  border: typeof tokens.borderWeights;
  fontSizes: typeof tokens.fontSizes;
  zIndices: typeof tokens.zIndices;
  radius: typeof tokens.radius;
  spacing: typeof tokens.spacing;
  lineHeights: typeof tokens.lineHeights;
  letterSpacings: typeof tokens.letterSpacings;
  fontWeights: typeof tokens.fontWeights;
  shadows: typeof tokens.shadows;
  dropShadows: typeof tokens.dropShadows;
  app: typeof tokens.app;
  media: typeof tokens.media;
  opacity: typeof tokens.opacity;
  colors: Partial<
    {
      appBackground: string;
      title: string;
      error: string;
      success: string;
      warning: string;
      desc: string;
      primary: string;
      secondary: string;
      accent: string;
      darkBackground:string
      background:string
      primaryDeep: string;
    } & typeof tokens.colors
  >;
};

const theme: Theme = {
  darkMode: false,
  app: tokens.app,
  colors: {
    appBackground: tokens.colors.whiteGrey,
    darkBackground:tokens.colors.greyDeep,
    background:tokens.colors.greyLight,
    title: tokens.colors.blackBlue,
    desc: tokens.colors.greyLight,
    error: tokens.colors.red,
    success: tokens.colors.green,
    warning: tokens.colors.yellow,
    primary: tokens.colors.purple,
    accent: tokens.colors.purpleLight,
    primaryDeep: tokens.colors.purpleDeep,
    ...tokens.colors,
  },
  media: tokens.media,
  opacity: tokens.opacity,
  border: tokens.borderWeights,
  fontSizes: tokens.fontSizes,
  radius: tokens.radius,
  spacing: tokens.spacing,
  zIndices: tokens.zIndices,
  lineHeights: tokens.lineHeights,
  letterSpacings: tokens.letterSpacings,
  fontWeights: tokens.fontWeights,
  shadows: tokens.shadows,
  dropShadows: tokens.dropShadows,
};
export { theme, Theme };
