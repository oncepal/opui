import vars from './vars';

type Theme = {
  darkMode: boolean;
  border: typeof vars.borderWeights;
  fontSizes: typeof vars.fontSizes;
  zIndices: typeof vars.zIndices;
  radius: typeof vars.radius;
  spacing: typeof vars.spacing;
  lineHeights: typeof vars.lineHeights;
  letterSpacings: typeof vars.letterSpacings;
  fontWeights: typeof vars.fontWeights;
  shadows: typeof vars.shadows;
  dropShadows: typeof vars.dropShadows;
  opacity:typeof vars.opacity
  colors: Partial<
    {
      appBackground: string;
      title: string;
      error:string
      success:string
      warning:string
      desc: string;
      primary: string;
      secondary: string;
      accent: string;
      primaryDeep:string
    } & typeof vars.colors
  >;
};

const theme: Theme = {
  darkMode: false,
  colors: {
    appBackground: vars.colors.whiteGrey,
    title: vars.colors.blackBlue,
    desc: vars.colors.greyLight,
    error:vars.colors.red,
    success:vars.colors.green,
    warning:vars.colors.yellow,
    primary: vars.colors.purple,
    accent: vars.colors.purpleLight,
    primaryDeep:vars.colors.purpleDeep,
    ...vars.colors,
  },
  opacity:vars.opacity,
  border: vars.borderWeights,
  fontSizes: vars.fontSizes,
  radius: vars.radius,
  spacing: vars.spacing,
  zIndices: vars.zIndices,
  lineHeights: vars.lineHeights,
  letterSpacings: vars.letterSpacings,
  fontWeights: vars.fontWeights,
  shadows: vars.shadows,
  dropShadows: vars.dropShadows,
};
export { theme, Theme };
