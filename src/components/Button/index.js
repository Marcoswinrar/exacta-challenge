import * as S from './styled'

const Button = ({ width, value, onClick, active, ...props }) => {
  return (
    <S.ButtonWrapper
      {...props}
      style={{ backgroundColor: active && '#22a6b3'}}
      width={width}
      onClick={onClick}>
      {value}
    </S.ButtonWrapper>
  )
}

export default Button