import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { CatalogProvider } from "../hooks/useCatalog";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <CatalogProvider>
        <Component {...pageProps} />
      </CatalogProvider>
    </ChakraProvider>
  );
}

export default MyApp;
