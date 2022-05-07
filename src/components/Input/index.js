import * as S from './styled'

const Input = ({ label, type, hasSeparator }) => {
  return (
    <>
      <S.InputWrapper>
        <S.Label htmlFor={label}>{label}</S.Label>
        <S.Input id={label} type={type} />
      </S.InputWrapper>
      {hasSeparator && <S.Separator />}
    </>
  )
}

export default Input