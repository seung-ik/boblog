import styled from '@emotion/styled'

export const HeaderConatiner = styled.div`
  width:1024px;
  height: 64px;
  font-family: monospace;
  font-size:1.4rem;

  @media(max-width: 1056px){
    width: calc(100% - 2rem);
  }

  display : flex;
  justify-content : space-between;
  align-items:center;

  & .header-right-side{
    display:flex;
    align-items:center;
    height:64px;
  }

  & .header-search-icon{
    margin-right:0.8em;
  }
  
`;

export const LoginButton = styled.button`
  border:none;
  outline:none;
  color:white;
  background-color:black;
  font-size:1rem;
  height:2rem;
  padding:0 1rem;
  border-radius:1rem;
  font-weigth:bold;
  word-break: keep-all;
`;