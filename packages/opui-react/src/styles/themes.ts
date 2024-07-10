import * as tokens from './tokens';

type Theme = {
  isDarkMode: boolean;
  container: {};
  button: {
    padding:string
  };
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
  input:{
    padding:string,
    placeholderOpacity:number
    lightBackground:string,
    lightFocusBackground:string
    darkBackground:string
    darkFocusBackground:string

  },
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

  }>;
};

const defaultTheme: Theme = {
  medium:tokens.medium,
  isDarkMode: false,
  container: {},
  button: {
    padding:`${tokens.spacings.xs} ${tokens.spacings.md}`
  },
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
    height: tokens.spacings[18],
    padding: `${tokens.spacings.md} ${tokens.spacings[10]}`
  },
  bottomNavigation: {
    zIndex: tokens.zIndices[1],
    height: tokens.spacings[18],
    padding: `${tokens.spacings.md} ${tokens.spacings[10]}`,
    unactiveItemOpacity: tokens.opacities.half
  },
  tabs:{
    itemPadding:`${tokens.spacings.sm} ${tokens.spacings.md}`,
    unactiveItemOpacity: tokens.opacities.half
  },
  input:{
    padding:`${tokens.spacings.xs} ${tokens.spacings.sm}`,
    placeholderOpacity:tokens.opacities.half,
    lightBackground:tokens.colors.whiteDeep,
    lightFocusBackground:tokens.colors.whiteDeep2,
    darkBackground:tokens.colors.greyDeep,
    darkFocusBackground:tokens.colors.greyDeep2,
  },
  app: {
    maxWidth: tokens.medium.mobile,
    minWidtgh: '50vw',
  },
  colors: {
    ...{
      darkTitle: tokens.colors.white,
      darkDesc: tokens.colors.white,
      darkScrim: tokens.colors.transparentDeep2,
      darkBackground: tokens.colors.black,
      darkLayout:tokens.colors.blackLight,
      darkGreyText: tokens.colors.whiteDeep,

    },
    ...{
      lightLayout: tokens.colors.white,
      lightBackground: tokens.colors.whiteDeep,
      lightGreyText: tokens.colors.whiteDeep,
    
      lightScrim: tokens.colors.transparentDeep,
      lightTitle: tokens.colors.black,
      lightDesc: tokens.colors.greyLight,

      textInDarkBackground: tokens.colors.white,
      textInLightBackground: tokens.colors.black,

      danger: tokens.colors.red,
      success: tokens.colors.green,
      warning: tokens.colors.yellow,

      primary: tokens.colors.blue,
      accent: tokens.colors.blueLight,
    },
  },
};
export { defaultTheme, Theme };
