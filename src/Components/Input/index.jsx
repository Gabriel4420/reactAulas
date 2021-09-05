import React, { useState } from "react";

import { Container, InputType } from "./styles";

function Input(props) {
  const [text, setText] = useState(" ");
  return (
    <Container>
      <h1>{text}</h1>
      <InputType
        color={props.color}
        bgColor={props.bgColor}
        borderColor={props.borderColor}
        placeholder={props.placeholder}
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength={30}
      />
      {[
        text.length > 0 ? (
          <p>
            {text.length} {text.length > 1 ? "caracteres" : " caracter"}
          </p>
        ) : (
          <p>nenhum caracter</p>
        ),
        text.length === 30 && "maximo atingido",
      ]}
    </Container>
  );
}

export default Input;
