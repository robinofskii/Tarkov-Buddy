declare module '@mui/material/styles' {
  interface Theme {
    palette?: {
      type: string;
      primary: {
        main: string;
      };
      secondary: {
        main: string;
      };
      info: {
        main: string;
      };
      warning: {
        main: string;
      };
      error: {
        main: string;
      };
    };
    props: {
      MuiAppBar: {
        color: string;
      };
    };
    typography: {
      h1: {
        fontFamily: string;
      };
      fontFamily: string;
      subtitle1: {
        fontFamily: string;
      };
      subtitle2: {
        fontFamily: string;
      };
      body1: {
        fontFamily: string;
      };
      body2: {
        fontFamily: string;
      };
      caption: {
        fontFamily: string;
      };
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    palette?: {
      type: string;
      primary: {
        main: string;
      };
      secondary: {
        main: string;
      };
      info: {
        main: string;
      };
      warning: {
        main: string;
      };
      error: {
        main: string;
      };
    };
    props: {
      MuiAppBar: {
        color: string;
      };
    };
    typography: {
      h1: {
        fontFamily: string;
      };
      fontFamily: string;
      subtitle1: {
        fontFamily: string;
      };
      subtitle2: {
        fontFamily: string;
      };
      body1: {
        fontFamily: string;
      };
      body2: {
        fontFamily: string;
      };
      caption: {
        fontFamily: string;
      };
    };
  }
}
