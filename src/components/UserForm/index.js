import { useEffect, useState } from 'react'
import Button from '../Button'
import Input from '../Input'
import Select from '../Select'
import UserButtonGender from '../UserButtonGender'
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

  const changeFormData = (value, prop) =>
    setUser(prev => ({ ...prev, [prop]: value }))

  return (
    <S.UserFormWrapper>
      <S.UserFormInputContainer>
        <Input
          type={"text"}
          label={"Nome"}
          hasSeparator
          onChange={(value) => changeFormData(value, 'nome')}
        />
        <Input
          type={"text"}
          label={"Número do RG"}
          mask={"99 999 999 - 9"}
          onChange={(value) => changeFormData(value, 'rg')}
        />
      </S.UserFormInputContainer>
      <S.UserFormInputContainer>
        <Input
          type={"text"}
          label={"Data de Emissão"}
          mask={"99/99/9999"}
          hasSeparator
          onChange={(value) => changeFormData(value, 'dataEmissao')}
        />
        <Select
          label={"Orgão Emissor"}
          data={orgaoEmissorData}
          onChange={(value) => changeFormData(value, 'orgaoEmissor')}
        />
      </S.UserFormInputContainer>
      <S.UserFormInputContainer>
        <UserButtonGender
          handleClick={(value) => changeFormData(value, 'sexo')}
        />
      </S.UserFormInputContainer>
      <S.UserFormInputContainer>
        <Button width={"250px"} value={"Cadastrar"} />
      </S.UserFormInputContainer>
    </S.UserFormWrapper>
  )
}

export default UserForm