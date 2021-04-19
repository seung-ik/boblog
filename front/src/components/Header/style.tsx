import styled from '@emotion/styled'

export const HeaderConatiner = styled.div`
  width:1024px;
  border :1px solid black;

  @media(max-width: 1056px){
    width: calc(100% - 2rem);
  }

  display : flex;
  justify-content : space-between;

  & .header-right-side{
    display:flex;
  }
  
`;