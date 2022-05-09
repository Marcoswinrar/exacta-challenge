import { useState } from 'react'
import * as S from './styled'

const Input = (props) => {
  const [focused, setFocused] = useState(false)
  const { name, label, mask, hasSeparator, onChange, valid, ...inputProps } = props
  
  return (
    <>
      <S.InputWrapper>
        <S.Label htmlFor={label}>
          {label}
        </S.Label>
        <S.Input
          {...inputProps}
          id={label}
          onChange={(e) => onChange(e)}
          mask={mask}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          focused={focused.toString()}
        />
      </S.InputWrapper>
      {hasSeparator && <S.Separator />}
    </>
  )
}

export default Input