import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
`;

export const InputType = styled.input`
  flex: 1;
  width: 100%;
  height: 20px;
  font-size: 20px;
  padding: 10px;
  border: 3px solid ${(props) => props.borderColor || '#aaa'};
  background-color:${props => props.bgColor};
  color:${(props) => props.color};
  outline:0;
  ::placeholder{
      color:${(props) => props.colorHover || '#ccc'};
      background-color:transparent;
  }
`;
