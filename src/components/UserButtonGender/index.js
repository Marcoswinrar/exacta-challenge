import Button from '../Button'
import * as S from './styled'

const UserButtonGender = () => {
  return (
      <S.UserButtonGenderWrapper>
        <Button value={"Masculino"} />
        <Button value={"Feminino"} />
      </S.UserButtonGenderWrapper>
  )
}

export default UserButtonGender