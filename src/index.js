import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "@emotion/react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  // <ThemeProvider>
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  // </ThemeProvider>,
  document.getElementById("root")
);
