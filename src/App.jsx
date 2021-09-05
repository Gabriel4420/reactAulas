import React from "react";
import Counter from "./Components/Counter";
import Input from "./Components/Input";
import CalculadoraGorjeta from "./Components/CalculadoraGorjeta";
import "./App.css";

// Componente
/* const Hello = (props) => {
  return (
    <h1>
      Olá, sou {props.user} e tenho {props.age} anos
    </h1>
  );
};

const Avatar = (props) => {
  return (
    <>
      <div className="avatar">
        <img src={props.user.url} alt={props.user.name} />


        <span>{props.user.name}</span>
      </div>
    </>
  );
}; */

export default function App() {
  /*   const user = {
    url:"https://avatars.githubusercontent.com/u/37821374?s=400&u=e83d85bc291ac04a4ac6accc4ab1cdc8e13b107a&v=4",
    name:"Gabriel Rodrigues"
  }
 */
  return (
    <div className="area">
      <div className="inputArea">
        <Input bgColor="#8F008A" borderColor="black" color="#7EFF40" placeholder="Digite seu nome" />
      </div>
      <div className="counterArea">
        <h1 style={{textAlign:'center'}}>Contador</h1>
        <Counter
          colorText="#00138C"
          colorBorder="#00138C"
          bg="#00138C"
          font="comic sans ms"
          colorHover = "#FFD340"
        />
        <br/>
      </div>
      <div className="gorjetaArea">
      <CalculadoraGorjeta/>
     </div>
    </div>
    
  );
}
