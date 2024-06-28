import styled from 'styled-components'

export const Keyboard = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: .5rem;
    
    @media screen and (min-width: 768px){
         display: grid;
          grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
}
`