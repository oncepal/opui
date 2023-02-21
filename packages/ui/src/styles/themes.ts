import vars from './vars';

type Theme = {
  mode: 'dark' | 'light';
  border: typeof vars.borderWeights;
  fontSizes: typeof vars.fontSizes;
  zIndex: typeof vars.zIndex;
  radius: typeof vars.radius;
  spacing: typeof vars.spacing;
  lineHeights: typeof vars.lineHeights;
  letterSpacings: typeof vars.letterSpacings;
  fontWeights: typeof vars.fontWeights;
  color: Partial<
    {
      appBackground: string;
      title: string;
      desc: string;
      primary: string;
      secondary: string;
      accent: string;
    } & typeof vars.color
  >;
};

const theme: Theme = {
  mode: 'light',
  color: {
    appBackground: vars.color.whiteGrey,
    title: vars.color.blackBlue,
    desc: vars.color.greyLight,
    primary: vars.color.purple,
    accent: vars.color.greyBlue,
    ...vars.color,
  },
  border: vars.borderWeights,
  fontSizes: vars.fontSizes,
  radius: vars.radius,
  spacing: vars.spacing,
  zIndex: vars.zIndex,
  lineHeights: vars.lineHeights,
  letterSpacings: vars.letterSpacings,
  fontWeights: vars.fontWeights,
};
export { theme, Theme };
