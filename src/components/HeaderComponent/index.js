import React from "react";
import styled from "styled-components";
import { palette, font } from "styled-theme";

import NavComponent from "../NavComponent";

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  height: 230px;
  background: ${palette("primary", 0)};
  color: ${palette("grayscale", 1, true)};
  padding 1rem;
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
  background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

  h1 {
    font-size: 2rem;
    font-weight: 400;
    margin: 3rem 0 1rem 0;
    font-family: ${font("heading")};
    color: ${palette("secondary", 0)};
    text-transform: uppercase;
    align-self: center;
    text-align: center;
  }
`;

const HeaderComponent = () => (
  <HeaderWrapper>
    <NavComponent />
    <h1>Who you gonna hire?</h1>
  </HeaderWrapper>
);

export default HeaderComponent;
