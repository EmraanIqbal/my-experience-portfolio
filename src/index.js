import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "@emotion/react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import { extendTheme } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
});
const theme = extendTheme({ breakpoints });

ReactDOM.render(
  // <ThemeProvider>
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  // </ThemeProvider>,
  document.getElementById("root")
);
