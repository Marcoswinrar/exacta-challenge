import * as S from './styled'

const Button = ({ width, value, onClick, focusColor }) => {
  return (
    <S.ButtonWrapper
      focusColor={focusColor}
      width={width}
      onClick={onClick}>
      {value}
    </S.ButtonWrapper>
  )
}

export default Button