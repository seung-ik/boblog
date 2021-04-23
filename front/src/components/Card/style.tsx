import styled from '@emotion/styled'

export const CardBox = styled.div`
  border-radius:6px;
  width: 20rem;
  margin-bottom:2rem;
  margin-right: 2rem;
  display:flex;
  flex-direction:column;
  background-color:white;
  box-shadow:rgb(0 0 0 / 4%) 0px 4px 16px 0px;

  @media(max-width: 1056px){
    width: calc(50% - 2.5rem);
  }

  @media(max-width: 767px){
    width: 93%;
  }
`;