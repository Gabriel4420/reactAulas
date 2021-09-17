import React from 'react'
import {ModalBackground, ModalArea,ModalHeader,ModalBody} from './styles'

function Modal(props) {

    const handleBackgroundClick = () => {
        props.setVisible(false);
    }
    return (
        <>
        {props.visible === true && 
        
        <ModalBackground >
            <ModalArea border={props.border}>
                <ModalHeader modalTitle={props.modalTitle} >
                  <p className="modal-title">  {props.modalTitle}</p>
                <button className="button" onClick={handleBackgroundClick}>X</button>
                </ModalHeader>
                <ModalBody position={props.position}>
                    {props.children}
                </ModalBody>
            </ModalArea>
        </ModalBackground>
        }
        
        </>
    )
}
export default  Modal;

