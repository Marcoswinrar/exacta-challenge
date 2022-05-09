import { useState } from 'react'
import Input from '../Input'
import Select from '../Select'
import Button from '../Button'
import UserButtonGender from '../UserButtonGender'
import { orgaoEmissorData } from '../../utils/mock'
import { validateForm } from '../../utils/validator'
import * as S from './styled'

const UserForm = () => {
  const [errors, setErrors] = useState([])
  const [user, setUser] = useState({
    nome: '',
    rg: '',
    dataEmissao: '',
    orgaoEmissor: '',
    sexo: 'M'
  })

  const handleInput = (name, e) =>
    setUser(prev => ({ ...prev, [name]: e.target.value }))


  const handleSubmit = (e) => {
    e.preventDefault()

    const errors = validateForm(user)

    if (errors.length > 0) {
      setErrors(errors)
      return
    }
    setErrors([])
  }

  return (
    <S.UserFormWrapper onSubmit={handleSubmit}>
      <S.Container>
        <Input
          name="nome"
          type="text"
          label="Nome"
          hasSeparator
          onChange={(e) => handleInput('nome', e)}
        />
        <Input
          name="rg"
          type="text"
          label="Número do RG"
          mask="99.999.999-9"
          hasSeparator
          onChange={(e) => handleInput('rg', e)}
        />
        <Input
          name="dataEmissao"
          type="text"
          label="Data de Emissão"
          mask="99/99/9999"
          hasSeparator
          onChange={(e) => handleInput('dataEmissao', e)}
        />
        <Select
          label={"Orgão Emissor"}
          data={orgaoEmissorData}
          onChange={(e) => handleInput('orgaoEmissor', e)}
        />
      </S.Container>
      <S.Container>
        <UserButtonGender
          handleClick={(e) =>
            setUser(prev => ({ ...prev, sexo: e }))} />
      </S.Container>
      {errors.map((error, index) => (
        <S.Errors key={index}>
          <span>* {error}</span>
        </S.Errors>
      ))}
      <S.Container>
        <Button value="Cadastrar" />
      </S.Container>
    </S.UserFormWrapper>
  )
}

export default UserForm