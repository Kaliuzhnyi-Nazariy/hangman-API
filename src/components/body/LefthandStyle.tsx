import styled from "styled-components";

export const LeftHandDrawing = styled.div`
  width: 40px;
  height: 5px;
  background-color: black;
  position: absolute;
  top: 65px;
  right: -0;
  rotate: 30deg;

  @media screen and (min-width: 768px) {
    width: 80px;
    height: 10px;
    top: 130px;
  }
`;
