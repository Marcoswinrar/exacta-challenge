import Button from '../Button'
import * as S from './styled'

const UserButtonGender = ({ handleClick }) => {
  return (
    <S.UserButtonGenderWrapper>
      <Button value={"Masculino"} onClick={() => handleClick("M")} />
      <Button value={"Feminino"} onClick={() => handleClick("F")} />
    </S.UserButtonGenderWrapper>
  )
}

export default UserButtonGender