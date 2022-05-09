import { useState } from 'react'
import Button from '../Button'
import * as S from './styled'

const UserButtonGender = ({ handleClick }) => {

  const [active, setActive] = useState(true)

  const onHandleClick = (value) => {
    setActive(prev => !prev)
    handleClick(value)
  }

  return (
    <>
      <S.Title>Sexo</S.Title>
      <S.UserButtonGenderWrapper>
        <Button
          active={active}
          type="button"
          value={"Masculino"}
          onClick={() => onHandleClick("M")}
        />
        <Button
          active={!active}
          type="button"
          value={"Feminino"}
          onClick={() => onHandleClick("F")} />
      </S.UserButtonGenderWrapper>
    </>
  )
}

export default UserButtonGender