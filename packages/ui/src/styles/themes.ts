import vars from './vars';

type Theme = {
  mode: 'dark' | 'light';
  border: typeof vars.borderWeights;
  fontSizes: typeof vars.fontSizes;
  zIndices: typeof vars.zIndices;
  radius: typeof vars.radius;
  spacing: typeof vars.spacing;
  lineHeights: typeof vars.lineHeights;
  letterSpacings: typeof vars.letterSpacings;
  fontWeights: typeof vars.fontWeights;
  colors: Partial<
    {
      appBackground: string;
      title: string;
      desc: string;
      primary: string;
      secondary: string;
      accent: string;
    } & typeof vars.colors
  >;
};

const theme: Theme = {
  mode: 'light',
  colors: {
    appBackground: vars.colors.whiteGrey,
    title: vars.colors.blackBlue,
    desc: vars.colors.greyLight,
    primary: vars.colors.purple,
    accent: vars.colors.greyBlue,
    ...vars.colors,
  },
  border: vars.borderWeights,
  fontSizes: vars.fontSizes,
  radius: vars.radius,
  spacing: vars.spacing,
  zIndices: vars.zIndices,
  lineHeights: vars.lineHeights,
  letterSpacings: vars.letterSpacings,
  fontWeights: vars.fontWeights,
};
export { theme, Theme };
