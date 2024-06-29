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
  app: {
    maxWidth: string,
    minWidtgh: string,
    toast:{
      zIndex:string
     
    },
    dialog:{
      zIndex:string
      radius:string,
    },
    sheet:{
      zIndex:string
      radius:string,
    },
    drawer:{
      zIndex:string
     
    },
    navBar:{
      zIndex:string
      height:string,
      padding:string
    },
    bottomNavigation:{
      zIndex:string
      height:string,
      padding:string
    }
  }
  media: typeof tokens.media;
  opacity: typeof tokens.opacity;
  colors: Partial<
  typeof tokens.colors & {
      lightBackground: string;
      lightGreyText:string
      darkBackground: string;
      scrim:string;
      title: string;
      error: string;
      success: string;
      warning: string;
      desc: string;
      primary: string;
      secondary: string;
      accent: string;
      background:string
      primaryDeep: string;
    }
  >;
};

const defaultTheme: Theme = {
  darkMode: false,
  app:  {
    maxWidth: '1600px',
    minWidtgh: '50vw',
    toast:{
      zIndex:tokens.zIndices[4],
     
    },
    dialog:{
      zIndex:tokens.zIndices[3],
      radius:tokens.radius.base,
    },
    drawer:{
      zIndex:tokens.zIndices[2],
     
    },
    sheet:{
      zIndex:tokens.zIndices[2],
      radius:tokens.radius.base,
    },
    navBar:{
      zIndex:tokens.zIndices[1],
      height:'4em',
      padding:'1em 1.5em'
    },
    bottomNavigation:{
      zIndex:tokens.zIndices[1],
      height:'4em',
      padding:'1em 1.5em'
    }
  },
  colors: {
    lightBackground: tokens.colors.whiteDeep,
    lightGreyText:tokens.colors.grey,
    darkBackground:tokens.colors.greyDeep,
    background:tokens.colors.greyLight,
    title: tokens.colors.blackBlue,
    desc: tokens.colors.greyLight,
    error: tokens.colors.red,
    success: tokens.colors.green,
    scrim:'rgba(0,0,0,.2)',
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
export { defaultTheme, Theme };
