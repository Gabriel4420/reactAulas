import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1{
    font-size:24px;
    font-weight: bold;
    font-family: "Helvetica Neue",Helvetica;
    color:white;
  }

  p{
    font-size:18px;
  }

  ul{
    list-style:none !important;
    line-height: 30px;
  }
`;

export const InputType = styled.input`
    margin:auto;
    width:100%;
    max-width: 300px;
    height: 30px;
    padding:15px;
    outline:0;
    border: 3px solid green;

    border-radius:30px;

    ::placeholder {
        color:green;
        background-color:#000000;
    }

`;
