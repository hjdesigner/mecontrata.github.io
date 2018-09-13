import React from "react";
import uuid from "uuid/v4";
import styled from "styled-components";
import { palette, font, size } from "styled-theme";

import PersonComponent from "../PersonComponent";

const PeopleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
  max-width: ${size("maxWidth")};

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

const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${palette("grayscale", 0)};
  font-size: 5em;
  margin: 1em 0;
`;

const PeopleComponent = props => {
  const { people } = props;
  return (
    <PeopleWrapper>
      {people.length > 0 ? (
        <h1>Front-enders</h1> &&
        people.map(person => <PersonComponent key={uuid()} data={person} />)
      ) : (
        <ErrorWrapper>:(</ErrorWrapper>
      )}
    </PeopleWrapper>
  );
};

export default PeopleComponent;
