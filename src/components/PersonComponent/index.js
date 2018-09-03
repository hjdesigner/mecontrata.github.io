import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { palette, font } from "styled-theme";

const PersonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${palette("grayscale", 0, true)};
  color: ${palette("grayscale", 0)};
  padding: 2em;
  margin: 0.5em;
  transition: all 0.1s ease-in-out;

  :hover {
    transform: translateY(-5px);
    box-shadow: 0px 5px 40px 0px rgba(51, 51, 51, 0.1);
  }

  img {
    width: 100px;
    height: 100px;
    clip-path: polygon(0 5%, 95% 0, 100% 95%, 5% 100%);
  }

  h2 {
    margin: 0;
    margin-top: 1em;
    font-size: 1em;
  }

  a {
    margin: 0;
    margin-top: 0.3em;

    svg {
    margin-right: 0.3em;
    }
  }

  p {
    margin: 0;
    margin-top: 0.3em;
    font-size: 0.8em;
  }
`;

const PersonComponent = props => {
  const { name, username, avatar, location } = props.data;
  return (
    <PersonWrapper>
      <img src={avatar} alt={name} />
      <h2>{name}</h2>
      <a href={`https://github.com/${username}`} target="_blank">
        <FontAwesomeIcon icon={["fab", "github"]} />@{username}
      </a>
      <p>{location}</p>
    </PersonWrapper>
  );
};

export default PersonComponent;
