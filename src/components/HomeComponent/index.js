import React, { Component } from "react";
import styled from "styled-components";
import { palette, font } from "styled-theme";

import { getPeople } from "../../service";
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
  state = {
    loading: true,
    people: []
  };

  async componentDidMount() {
    await getPeople()
      .then(people => this.setState({ people, loading: false }))
      .catch(error => this.setState({ loading: false }));
  }

  render() {
    const { loading, people } = this.state;

    return (
      <HomeWrapper>
        <h1>Front-enders</h1>
        {loading ? (
          <LogoComponent height={100} fg="#fff" bg="#000" loading />
        ) : (
          <PeopleComponent people={people} />
        )}
      </HomeWrapper>
    );
  }
}
export default HomeComponent;
