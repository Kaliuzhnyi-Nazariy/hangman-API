import styled from "styled-components";

export const RightLegDrawing = styled.div`
  width: 40px;
  height: 5px;
  background-color: black;
  position: absolute;
  top: 132px;
  right: -7px;
  rotate: -60deg;

  @media screen and (min-width: 768px) {
    width: 80px;
    height: 10px;
    top: 264px;
    right: -15px;
  }
`;
