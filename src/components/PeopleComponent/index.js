import React from "react";
import styled from "styled-components";
import { palette, font, size } from "styled-theme";

import { store } from "../../store";
import PersonComponent from "../PersonComponent";

const PeopleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
  max-width: ${size("maxWidth")};
`;

const PeopleComponent = () => (
  <PeopleWrapper>
    {store.get(state =>
      state.people.map(person => (
        <PersonComponent key={person.username} data={person} />
      ))
    )}
  </PeopleWrapper>
);

export default PeopleComponent;
