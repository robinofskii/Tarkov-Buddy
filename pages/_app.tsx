import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import { defaultTheme } from "@shared/themes";
import "@fontsource/cairo/400.css";
import "@fontsource/karma/600.css";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = extendTheme({ defaultTheme });

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
