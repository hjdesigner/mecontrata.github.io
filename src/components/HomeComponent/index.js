import React, { Component } from "react";
import styled from "styled-components";
import { palette, font } from "styled-theme";

import { store, setLoading, getPeople } from "../../store";
import LogoComponent from "../LogoComponent";
import PeopleComponent from "../PeopleComponent";

const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${palette("grayscale", 0, true)};

  h1 {
    font-size: 1.4rem;
    font-weight: 400;
    margin: 2rem 0;
    font-family: ${font("heading")};
    color: ${palette("grayscale", 0)};
    text-transform: uppercase;
    text-align: center;
  }
`;

class HomeComponent extends Component {
  componentDidMount() {
    getPeople();
  }

  render() {
    return (
      <HomeWrapper>
        <h1>Novos front-enders</h1>
        {store.get(
          state =>
            state.loading ? (
              <LogoComponent height={100} fg="#fff" bg="#000" loading />
            ) : (
              <PeopleComponent />
            )
        )}
      </HomeWrapper>
    );
  }
}
export default HomeComponent;
