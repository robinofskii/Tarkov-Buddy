import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      primary: string;
      positive: string;
      negative: string;
    };
  }
}

// You are also able to use a 3rd party theme this way:
import "@emotion/react";
import { LibTheme } from "some-lib";

declare module "@emotion/react" {
  export interface Theme extends LibTheme {
    colors: {
      primary: string;
      secondary: string;
      success: string;
      info: string;
      danger: string;
      text: string;
      background: string;
    };
    typography: {
      heading: string;
      title: string;
      subtitle: string;
      paragraph: string;
    };
  }
}
