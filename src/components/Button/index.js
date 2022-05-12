import * as S from './styled'

const Button = ({ width, value, onClick, active, ...props }) => {
  return (
    <S.ButtonWrapper
      {...props}
      width={width}
      onClick={onClick}>
      {value}
    </S.ButtonWrapper>
  )
}

export default Button