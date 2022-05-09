import { useState } from 'react'
import * as S from './styled'

const GenderGroup = ({ handleClick }) => {

  const [gender, setGender] = useState("M")

  const onHandleChange = (e) => {
    const value = e.target.value
    setGender(value)
    handleClick(value)
  }

  return (
    <>
      <S.GenderGroupWrapper>
        <S.Title>Sexo</S.Title>
        <S.Container>
          <S.Label htmlFor='masculino'>Masculino</S.Label>
          <S.Input
            type="radio"
            name="gender"
            id="masculino"
            value="M"
            checked={gender === "M"}
            onChange={onHandleChange}
          />
        </S.Container>
        <S.Container>
          <S.Label htmlFor='feminino'>Feminino</S.Label>
          <S.Input
            type="radio"
            name="gender"
            id="feminino"
            value="F"
            checked={gender === "F"}
            onChange={onHandleChange}
          />
        </S.Container>
      </S.GenderGroupWrapper>
    </>
  )
}

export default GenderGroup