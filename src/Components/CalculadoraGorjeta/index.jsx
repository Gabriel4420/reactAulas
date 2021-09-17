import React,{useState} from 'react';

import { Container,InputType } from './styles';



function CalculadoraGorjeta() {
  const [conta,setConta] = useState(0);

  let [gorjeta, setGorjeta] = useState(0);



  return (
    <Container>
      <h1 style={{color:'white'}}>Calculadora Gorjeta</h1>
      <p>Quanto deu a conta?</p>
      <InputType type="number" value={conta} onChange={e => setConta(e.target.value)}  />
      <br/>
      <p>Qual a porcentagem da gorgeta?</p>
      <InputType type="number" value={gorjeta} onChange={e => setGorjeta(e.target.value)}   />
      
      <ul>
        <li key="1">sub-total : R$ {conta}</li>
        <li>Gorjeta {parseInt(gorjeta)}%: R$ {parseInt(conta) * (parseInt(gorjeta).toFixed(40) /100)} </li>
        <li style={{fontWeight:'bold'}}>Total: R$ {parseFloat(conta) + parseFloat(conta)*(parseFloat(gorjeta) /100)}</li>
      </ul>
      
    </Container>
  );
};

export default CalculadoraGorjeta;
