import Button from '../Button'
import Input from '../Input'
import UserButtonGender from '../UserButtonGender'
import * as S from './styled'

const UserForm = () => {
  return (
    <S.UserFormWrapper>
      <S.UserFormInputContainer>
        <Input type={"text"} label={"Nome"} hasSeparator />
        <Input type={"text"} label={"Número do RG"} />
      </S.UserFormInputContainer>
      <S.UserFormInputContainer>
        <Input type={"text"} label={"Data de Emissão"} hasSeparator />
        <Input type={"text"} label={"Orgão Expedidor"} />
      </S.UserFormInputContainer>
      <S.UserFormInputContainer>
        <UserButtonGender />
      </S.UserFormInputContainer>
      <S.UserFormInputContainer>
        <Button width={"250px"} value={"Cadastrar"} />
      </S.UserFormInputContainer>
    </S.UserFormWrapper>
  )

}

export default UserForm