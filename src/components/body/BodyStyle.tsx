import styled from "styled-components";

export const BodyDrawing = styled.div`
  width: 5px;
  height: 60px;
  position: absolute;
  background-color: black;
  top: 59px;
  right: 0;

  @media screen and (min-width: 768px) {
    width: 10px;
    height: 120px;
    top: 118px;
  }
`;

// width: "10px", height: "120px", background: "black",position: "absolute",top: "118px", right: 0
