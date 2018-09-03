import React from "react";
import { injectGlobal, ThemeProvider } from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import LayoutComponent from "./components/LayoutComponent";
import HomeComponent from "./components/HomeComponent";
import theme from "./theme";

library.add(faGithub);

injectGlobal`
  html, body {
    margin: 0;
    padding: 0;
  }

  #root {
    > div {
      min-height: 100vh
    }
  }

  body {
    font-family:  ${theme.fonts.primary};
    background: ${theme.palette.grayscale[1]};
    font-size: 100%;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family:  ${theme.fonts.heading};
    text-transform: uppercase;
  }

  a {
    text-decoration: none;
    color: ${theme.palette.secondary[0]};
  }

  ::selection {
    background: ${theme.palette.primary[0]};
  }
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <LayoutComponent>
      <HomeComponent />
    </LayoutComponent>
  </ThemeProvider>
);

export default App;
