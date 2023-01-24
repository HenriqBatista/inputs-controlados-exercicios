import React from 'react'
import { Form} from '../MainPage/styles'

const ConfirmationForm = (props) => {
  return (
    <Form>
        <label>
          Data de Nascimento:
          <input type="date" placeholder='Insira a data do seu nascimento' value={props.birth} onChange={props.onChangeBirth}/>
        </label>
        <label>
          Telefone:
          <input type="tel" placeholder='Digite o número do seu Telefone' value={props.tel} onChange={props.onChangeTel}/>
        </label>
        <label>
          Autodeclaração:
         <select>
            <option value={props.selfDeclaration}>Negro</option>
            <option value={props.selfDeclaration}>Branco</option>
            <option value={props.selfDeclaration}>Pardo</option>
            <option value={props.selfDeclaration}>Amarelo</option>
            <option value={props.selfDeclaration}>Indigena</option>
            <option value={props.selfDeclaration}>Prefiro não responder</option>
         </select>
        </label>
    <button onClick={props.sendData2}>Enviar dados</button>
    </Form>
  )
}

export default ConfirmationForm