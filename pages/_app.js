import "../styles/globals.css";
import "swiper/css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const darkModeOnlyMode = extendTheme({ config });

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
