import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ButtonTimer = styled.button`
  width: 100%;
  height: 45px;
  background-color: transparent;
  color: ${props => props.colorText};
  padding: 10px;
  border: 1px solid ${(props) => props.colorBorder};
  font-weight: bold;
  font-size: 18px;
  font-family: ${props => props.font || 'Arial' || 'sans-serif'};


  :hover {
    background-color: ${props => props.bg};
    color: ${props => props.colorHover};
    cursor: pointer;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 350px;
  align-items: center;
  justify-content: center;
`;

const Texto = styled.p`
  font-weight: bold;
  font-size: 24px;
  font-family: ${props => props.font || 'Arial' || 'sans-serif'};
  color: ${(props) => props.colorText};
`;

export default function Counter(props) {
  let [contagem, setContagem] = useState(1);
  
  useEffect(() =>{
    document.title = "Contagem " + contagem;
  },[contagem]);

  const handleClick = () => {
    setContagem(contagem = contagem + 1)
  };

  return (
    <Container>
      
      <Texto colorText={props.colorText} font={props.font}>
        {contagem} {contagem > 1 ? "vezes" : "vez"}
      </Texto>
      <ButtonTimer colorText={props.colorText} onClick={handleClick} colorBorder={props.colorBorder} bg={props.bg} colorHover={props.colorHover}>
        contar
      </ButtonTimer>

    </Container>
  )

}
  

