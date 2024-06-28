import styled from 'styled-components'

export const ButtonStyled = styled.button`
  padding: 8px 24px;
  border-radius: 8px;
  border: 1px solid black;
  background-color: #fff;

  font-size: 16px;
  font-weight: 500;

  transition: 0.25s;

  &:hover, &:active {
    cursor: pointer;
    background-color: orange;
    color: #fff;
    transform: scale(1.1);
  }

  @media screen and (min-width: 768px){
  padding: 12px 24px;
    font-size: 20px;
  }

  @media screen and (min-width: 1440px){
    padding: 16px 30px;
    font-size: 24px;
  }
`