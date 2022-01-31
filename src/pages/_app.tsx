import { ChakraProvider } from "@chakra-ui/react";
import { customTheme } from "../theme";

import type { AppProps } from "next/app";

function app({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default app;
