import styled from '@emotion/styled'

export const CardBox = styled.div`
  border:1px solid black;
  width: 20rem;
  margin-bottom:2rem;
  margin-right: 2rem;
  display:flex;
  flex-direction:column;
  background-color:white;

  @media(max-width: 1056px){
    width: calc(50% - 2.5rem);
  }

  @media(max-width: 767px){
    width: 93%;
  }
`;