import styled from "styled-components";

export const HeadDrawing = styled.div`
  width: 25px;
  height: 25px;
  border: 5px solid black;
  border-radius: 100%;
  position: absolute;
  top: 25px;
  right: -15px;

  @media screen and (min-width: 768px) {
    width: 50px;
    height: 50px;
    border: 10px solid black;
    top: 50px;
    right: -30px;
  }
`;
