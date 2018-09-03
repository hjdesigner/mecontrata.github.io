import React from "react";
import styled from "styled-components";
import { size } from "styled-theme";

import PersonComponent from "../PersonComponent";

const PeopleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
  max-width: ${size("maxWidth")};
`;

const PeopleComponent = props => {
  const { people } = props;
  return (
    <PeopleWrapper>
      {people.length > 0 &&
        people.map(person => (
          <PersonComponent key={person.username} data={person} />
        ))}
    </PeopleWrapper>
  );
};

export default PeopleComponent;
