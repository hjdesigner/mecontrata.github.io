import React from "react";
import styled from "styled-components";
import { palette, font } from "styled-theme";

import HeaderComponent from "../HeaderComponent";
import FooterComponent from "../FooterComponent";

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  font-family: ${font("primary")};

  main {
    flex-grow: 1;
    padding: 1em;
  }
`;

const Layout = ({ children }) => (
  <LayoutWrapper>
    <HeaderComponent />
    <main>{children}</main>
    <FooterComponent />
  </LayoutWrapper>
);

export default Layout;
