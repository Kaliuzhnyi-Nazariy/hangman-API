import styled from "styled-components";

export const RopeOfHangmanMachine = styled.div`
  height: 25px;
  width: 5px;
  background-color: black;
  position: absolute;
  top: 0;
  right: 0;

  @media screen and (min-width: 768px) {
    height: 50px;
    width: 10px;
  }
`;

export const TopOfHangmanMachine = styled.div`
  height: 5px;
  width: 100px;
  background-color: black;
  margin-left: 60px;

  @media screen and (min-width: 768px) {
    height: 10px;
    width: 200px;
    margin-left: 120px;
  }
`;

export const MiddleOfHangmanMachine = styled.div`
  height: 200px;
  width: 5px;
  background-color: black;
  margin-left: 60px;

  @media screen and (min-width: 768px) {
    height: 400px;
    width: 10px;
    margin-left: 120px;
  }
`;

export const BottomOfHangmanMachine = styled.div`
  height: 5px;
  width: 125px;
  background-color: black;

  @media screen and (min-width: 768px) {
    height: 10px;
    width: 250px;
  }
`;
