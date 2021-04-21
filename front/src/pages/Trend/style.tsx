import styled from '@emotion/styled'

export const Container = styled.div`
  border: 1px solid black;
  height:100vh;
  display: flex;
  flex-direction : column;
  align-items:center;

  & .click-main-button{
    border-bottom:2px solid black;

    & > .main-pick-button{
      color:black;
    }
  }

  & .main-body{
    width:1024px;

    @media(max-width: 1056px){
      width: calc(100% - 2rem);
    }
  }

  & #buttons{
    margin-top:1.5rem;
    display:flex;
  }

  & .main-pick-button{
    font-size:1.2rem;
    height:2.5rem;
    color:rgb(176,182,187);
    width: 7rem;
    display:flex;
    justify-content:center;

    >span {
      margin-right:5px;
    }
  }
`;