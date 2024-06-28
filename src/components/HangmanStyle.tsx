import styled from "styled-components";

export const HangmanWordStyle = styled.p`
  display: flex;
  gap: 0.25em;
  /* font-size: 6rem; */
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  font-family: "monospace";
  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: 3.5rem;
  }
`;
