import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "@emotion/react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  html: {
    background: "rgb(250, 202, 246)",
  },
});

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  document.getElementById("root")
);
