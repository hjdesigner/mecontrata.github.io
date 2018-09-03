import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { palette, font, size } from "styled-theme";

import LogoComponent from "../LogoComponent";

const NavWrapper = styled.nav`
  display: flex;
  justify-content: center;

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: ${size("maxWidth")};
    margin: 0;
    padding: 0;
  }
  li {
    a {
      font-size: 2em;
    }
  }
`;

const NavComponent = () => (
  <NavWrapper>
    <ul>
      <li>
        <LogoComponent height={50} fg="#7045AF" bg="#76DBD1" />
      </li>
      <li>
        <a
          href="https://github.com/mecontrata/mecontrata.github.io"
          target="_blank"
        >
          <FontAwesomeIcon icon={{ prefix: "fab", iconName: "github" }} />
        </a>
      </li>
    </ul>
  </NavWrapper>
);

export default NavComponent;
