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
    height: string;
    padding: string;
  };
  drawer: {
    zIndex: string;
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
  colors: Partial<{
    darkTitle: string;
    darkDesc: string;
    darkScrim: string;
    darkBackground: string;
    darkLayout: string;
    darkGreyText: string;
    darkText: string;

    lightTitle: string;
    lightDesc: string;
    lightScrim: string;
    lightBackground: string;
    lightLayout: string;
    lightGreyText: string;
    lightText: string;

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
  isDarkMode: false,
  container: {},
  button: {},
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
      darkText: tokens.colors.white,
    },
    ...{
      lightLayout: '',
      lightBackground: tokens.colors.whiteDeep,
      lightGreyText: tokens.colors.grey,
      lightText: tokens.colors.grey,
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
