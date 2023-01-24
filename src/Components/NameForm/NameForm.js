import React from 'react'
import { Form, Input} from '../MainPage/styles'


const NameForm = (props) => {
  return (
    <Form>
        <label>
          Nome:
          <Input  placeholder="Nome" value={props.name} onChange={props.onChangeName} maxLength="30"quired />
        </label>
        <label>
          Idade:
          <Input  placeholder="Idade" value={props.age} onChange={props.onChangeAge} type="number" required />
        </label>
        <label>
          E-mail:
          <Input  placeholder="usuario@usuario.com" value={props.email} onChange={props.onChangeEmail} required/>
        </label>
        <label>
          Confirmação de e-mail:
          <Input  placeholder="usuario@usuario.com" value={props.email} onChange={props.onChangeEmail} required/>
        </label>
      <button onClick={props.sendData}>Enviar dados</button>
      </Form>
  )
}

export default NameForm