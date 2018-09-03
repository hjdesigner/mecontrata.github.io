import React, { Component } from "react";
import styled from "styled-components";
import { palette } from "styled-theme";

import { getPeople } from "../../service";
import LogoComponent from "../LogoComponent";
import PeopleComponent from "../PeopleComponent";

const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${palette("grayscale", 0, true)};
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
