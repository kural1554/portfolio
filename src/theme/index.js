import { extendTheme } from "@chakra-ui/react";
import colors from "./colors"; // Custom colors
import fonts from "./fonts";   // Custom fonts

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors,
  fonts,
});

export default theme;
