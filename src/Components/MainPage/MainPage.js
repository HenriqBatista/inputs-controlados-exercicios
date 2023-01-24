import React, {useState} from 'react'
import {MainContainer} from './styles'
import NameForm from '../NameForm/NameForm'
import ConfirmationForm from '../ConfirmationForm/ConfirmationForm'

const MainPage = () => {
const [name, setName] = useState("")
const [age, setAge] = useState("")
const [email, setEmail] = useState("")
const [formFlow, setFormFlow] = useState(1) //você não precisa mexer neste estado, ele faz parte da lógica da linha 30 do JSX

const onChangeName = (event) => {
  setName(event.target.value)
  
}

const onChangeAge = (event) => {
  setAge(event.target.value)
 
}

const onChangeEmail = (event) => {
  setEmail(event.target.value)
}
////////////////////////////////////////////////////////
const [birth, setBirth] = useState("")
const [tel, setTel] = useState("")
const [selfDeclaration, setSelfDeclaration] = useState("")

const onChangeBirth = (event) => {
  setBirth(event.target.value)
 
}
const onChangeTel = (event) => {
  setTel(event.target.value)
 
}
const onChangeSelfDeclaration = (event) => {
  setSelfDeclaration(event.target.value)
 
}

const sendData = () => {
  //aqui deve vir uma verificação para mudar de formulario apenas se todos os requisitos tiverem sido cumpridos
  if(
    age >= 18 &&
    name.length >= 10 &&
    name.length <= 30 &&
    email.includes("@") &&
    name != "" &&
    age != "" &&
    email != ""
  ){
    setFormFlow(2)
  } else{
    alert("Você precisa preencher corretamente o formulário para prosseguir com o cadastro")
  }
}

const sendData2 = () =>{

}

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      {formFlow === 1 ? <NameForm
      name ={name} age={age} email={email} onChangeAge={onChangeAge} onChangeName = {onChangeName} onChangeEmail = {onChangeEmail} sendData = {sendData}/> : <ConfirmationForm birth={birth} tel={tel} selfDeclaration={selfDeclaration} onChangeBirth={onChangeBirth} onChangetel={onChangeTel} onChangeSelfDeclaration={onChangeSelfDeclaration} sendData2={sendData2} />}
    </MainContainer>
  )
}

export default MainPage