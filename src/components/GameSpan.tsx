import styled from 'styled-components'

export const GameSpan = styled.span`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

background-color: rgba(255, 255, 255, 0.6);
padding: 32px 16px;
border-radius: 24px;
backdrop-filter: blur(4px);

@media screen and (min-width: 320px){
    max-width: 250px;
}

@media screen and (min-width: 375px){
    max-width: 80%;
}
`