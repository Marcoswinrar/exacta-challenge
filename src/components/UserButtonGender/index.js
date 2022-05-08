import Button from '../Button'
import * as S from './styled'

const UserButtonGender = ({ handleClick }) => {
  return (
    <S.UserButtonGenderWrapper>
      <Button
        focusColor
        value={"Masculino"}
        onClick={() => handleClick("M")}
      />
      <Button
        focusColor
        value={"Feminino"}
        onClick={() => handleClick("F")} />
    </S.UserButtonGenderWrapper>
  )
}

export default UserButtonGender