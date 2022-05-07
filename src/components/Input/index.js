import * as S from './styled'

const Input = ({ label, type, hasSeparator, onChange, value, mask }) => {
  return (
    <>
      <S.InputWrapper>
        <S.Label htmlFor={label}>
          {label}
        </S.Label>
        <S.Input
          mask={mask}
          id={label}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </S.InputWrapper>
      {hasSeparator && <S.Separator />}
    </>
  )
}

export default Input