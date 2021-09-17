import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Input from './Components/Input'
import Counter from "./Components/Counter";
import CalculadoraGorjeta from "./Components/CalculadoraGorjeta";
import Modal from "./Components/Modal/index";
import "./App.css";

export default function RouterExample() {

    const [modalVisible, setModalVisible] = useState();

    const handleButtonClick = () => {
        setModalVisible(true);
    }

   
    return (
        /* * PRIMEIRO EXEMPLO DE ROTEAMENTO */
        <BrowserRouter>
            <header>
                <h1>Meu site Legal</h1>
                <nav>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/sobre">Sobre</Link></li>
                        <li><Link to="/input">input</Link></li>
                        <li><Link to="/contador">contador</Link></li>
                        <li><Link to="/gorjeta">gorjeta</Link></li>
                        <li><Link to="/modal">modal</Link></li>
                    </ul>
                </nav>
                <br/>
            <br/>
            </header>
           


            <Switch>
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route path="/sobre">
                    <Sobre />
                </Route>
                <Route path="/input">
                    <div className="inputArea">
                        <Input bgColor="#8F008A" borderColor="black" color="#7EFF40" placeholder="Digite seu nome" />
                    </div>

                </Route>
                <Route path="/contador">
                    <div className="counterArea">
                        <h1 style={{ textAlign: 'center' }}>Contador</h1>
                        <Counter
                            colorText="#00138C"
                            colorBorder="#00138C"
                            bg="#00138C"
                            font="comic sans ms"
                            colorHover="#FFD340"
                        />
                        <br />
                    </div>

                </Route>
                <Route path="/gorjeta">
                    <div className="gorjetaArea">
                        <CalculadoraGorjeta />
                    </div>
                </Route>
                <Route path="/modal">
                    <div className="modalArea">
                        <button onClick={handleButtonClick} className="btn btn-primary">Abrir Modal</button>
                        <Modal visible={modalVisible} modalTitle="Login" setVisible={setModalVisible} position="-150px" >
                            <div></div>
                            <form className="form-horizontal">
                                <input type="email" placeholder="Usuario" />
                                <input type="password" placeholder="Senha" />
                                <button>Entrar</button>
                            </form>
                            <div></div>
                        </Modal>
                    </div>
                </Route>
                <Route path="*">
                    
                    
                            <div></div>
                            <h1>Page Not Found</h1>
                            <div></div>


                </Route>
            </Switch>
        </BrowserRouter>
    )
}
