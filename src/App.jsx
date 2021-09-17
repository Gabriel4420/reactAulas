import React from "react";
import "./App.css";
import RouterExample from "./router-example";

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
      <RouterExample/>
      
    </div>
    
  );
}
