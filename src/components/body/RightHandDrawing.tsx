import styled from "styled-components";

export const RightHandDrawing = styled.div`
  width: 40px;
  height: 5px;
  background-color: black;
  position: absolute;
  top: 65px;
  right: -35px;
  rotate: -30deg;

  @media screen and (min-width: 768px) {
    width: 80px;
    height: 10px;
    top: 130px;
    right: -68px;
  }
`;
