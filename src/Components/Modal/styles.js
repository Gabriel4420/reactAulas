import styled from "styled-components";

export const ModalBackground = styled.div`
  position:fixed;
    left:0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index:90;
    background-color:rgba(0,0,0,0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    

`

export const ModalArea = styled.div`
background-color: #fff;
padding:15px;
width:50%;
height:550px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
border:${props => props.border ? props.border : 'none'} solid black;

border-radius:15px;

`
export const ModalHeader = styled.div`
padding:12px;
margin-top:-15px;
width:100%;
font-family: "Helvetica Neue",Helvetica,Arial;
font-size: 25px;
font-weight: bold;
color:black;
display:flex;
align-items: flex-start;
justify-content: space-between;

p{
  margin-left:430px;
  font-size:32px;
}

.button{
    outline:0;
    border:3px solid red;
    color:red;
    font-size:22px;
    cursor:pointer;
    border-radius:50%;
}

.button:hover{
  background-color:red;
  color:white;
}
`
export const ModalBody = styled.div`
background-color: #fff;
margin-bottom:5px;
width: 100%;
padding:15px;
position:relative;
top:${props => props.position};
bottom:0;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;

input::placeholder {
  font-size:21px;
  font-weight: bold;
  color:black;
  text-align: center;
}

`