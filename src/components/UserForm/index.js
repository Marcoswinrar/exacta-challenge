import { useState } from 'react'
import Button from '../Button'
import Input from '../Input'
import Select from '../Select'
import UserButtonGender from '../UserButtonGender'
import { inputs } from './inputs'
import { orgaoEmissorData } from '../../utils/mock'
import * as S from './styled'

const UserForm = () => {

  const [user, setUser] = useState({
    nome: '',
    rg: '',
    dataEmissao: '',
    orgaoEmissor: '',
    sexo: ''
  })

  const changeFormData = (e) =>
    setUser(prev => ({ ...prev, [e.target.name]: e.target.value }))


  const submitData = (e) => {
    e.preventDefault()
    console.log(user)
  }

  return (
    <S.UserFormWrapper onSubmit={submitData}>
      <S.UserFormInputContainer>
        {inputs.map((input) => (
          <Input
            key={input.id}
            {...input}
            onChange={changeFormData}
          />
        ))}
        <Select
          label={"Orgão Emissor"}
          data={orgaoEmissorData}
          onChange={(e) => changeFormData(e, 'orgaoEmissor')}
        />
      </S.UserFormInputContainer>
      <S.UserFormInputContainer>
        <UserButtonGender handleClick={(e) =>
          setUser(prev => ({ ...prev, sexo: e }))}
        />
      </S.UserFormInputContainer>
      <S.UserFormInputContainer>
        <Button
          width={"250px"}
          value={"Cadastrar"}
        />
      </S.UserFormInputContainer>
    </S.UserFormWrapper>
  )
}

export default UserForm