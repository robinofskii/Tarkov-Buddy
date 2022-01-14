import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import { defaultTheme } from '@shared/themes';
import '@fontsource/cairo/400.css';
import '@fontsource/karma/600.css';
import Layout from '@components/layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  const theme = extendTheme({ defaultTheme });

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
