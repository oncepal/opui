import * as tokens from './tokens';

type Theme = {
  isDarkMode: boolean;
  container: {};
  button: {};
  avatar: {
    defaultBackground:string
  };
  toast: {
    zIndex: string;
  };
  dialog: {
    zIndex: string;
    radius: string;
  };
  bottomSheet: {
    zIndex: string;
    radius: string;
  };
  bottomNavigation: {
    zIndex: string;
    unactiveItemOpacity:number
    height: string;
    padding: string;
  };
  tabs:{
    itemPadding:string
    unactiveItemOpacity:number
  };
  drawer: {
    zIndex: string;
  };
  text:{
    lineHeight:number
  };
  navBar: {
    zIndex: string;
    height: string;
    padding: string;
  };
  app: {
    maxWidth: string;
    minWidtgh: string;
  };
  medium:typeof tokens.medium;
  colors: Partial<{
    darkTitle: string;
    darkDesc: string;
    darkScrim: string;
    darkBackground: string;
    darkLayout: string;
    darkGreyText: string;
   

    lightTitle: string;
    lightDesc: string;
    lightScrim: string;
    lightBackground: string;
    lightLayout: string;
    lightGreyText: string;


    textInDarkBackground: string;
    textInLightBackground: string;

    success: string;
    warning: string;
    danger: string;

    primary: string;
    secondary: string;
    accent: string;
    primaryDeep: string;
  }>;
};

const defaultTheme: Theme = {
  medium:tokens.medium,
  isDarkMode: false,
  container: {},
  button: {},
  text:{
    lineHeight:tokens.lineHeights.xs
  },
  avatar: {
    defaultBackground:tokens.colors.grey
  },
  toast: {
    zIndex: tokens.zIndices[4],
  },
  dialog: {
    zIndex: tokens.zIndices[3],
    radius: tokens.radius.base,
  },
  drawer: {
    zIndex: tokens.zIndices[2],
  },
  bottomSheet: {
    zIndex: tokens.zIndices[2],
    radius: tokens.radius.base,
  },
  navBar: {
    zIndex: tokens.zIndices[1],
    height: '4em',
    padding: '1em 1.5em',
  },
  bottomNavigation: {
    zIndex: tokens.zIndices[1],
    height: '4em',
    padding: '1em 1.5em',
    unactiveItemOpacity: tokens.opacities.half
  },
  tabs:{
    itemPadding:`${tokens.spacings.sm} ${tokens.spacings.md}`,
    unactiveItemOpacity: tokens.opacities.half
  },
  app: {
    maxWidth: '1600px',
    minWidtgh: '50vw',
  },
  colors: {
    ...{
      darkTitle: tokens.colors.white,
      darkDesc: tokens.colors.white,
      darkScrim: 'rgba(0,0,0,.6)',
      darkBackground: '#18191c',
      darkLayout: '#1e2023',
      darkGreyText: tokens.colors.greyLight,

    },
    ...{
      lightLayout: tokens.colors.whiteDeep,
      lightBackground: tokens.colors.white,
      lightGreyText: tokens.colors.grey,
    
      lightScrim: 'rgba(0,0,0,.25)',
      lightTitle: tokens.colors.black,
      lightDesc: tokens.colors.greyLight,

      textInDarkBackground: tokens.colors.white,
      textInLightBackground: tokens.colors.black,

      danger: tokens.colors.red,
      success: tokens.colors.green,
      warning: tokens.colors.yellow,

      primary: tokens.colors.purple,
      accent: tokens.colors.purpleLight,
      primaryDeep: tokens.colors.purpleDeep,
    },
  },
};
export { defaultTheme, Theme };
