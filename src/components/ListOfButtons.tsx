import styled from 'styled-components'

export const ListOfButtons = styled.div`
display: flex;
gap: 16px;
align-items: center;
justify-content: center;

flex-wrap: wrap;

 @media screen and (min-width: 320px){
    max-width: 380px;
 }

  @media screen and (min-width: 768px){
    max-width: 700px;
    gap: 24px;
 }

   @media screen and (min-width: 1440px){
    max-width: 1280px;
    gap: 32px;
 }
`
