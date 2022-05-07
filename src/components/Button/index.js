import * as S from './styled'

const Button = ({ width, value, onClick }) => {
  return (
    <S.ButtonWrapper
      width={width}
      onClick={onClick}>
      {value}
    </S.ButtonWrapper>
  )
}

export default Button