import InputMask from 'react-input-mask'
import styled from 'styled-components'
import media from 'styled-media-query'
import { UserFormFieldStyle } from '../../config/styles'

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const Input = styled(InputMask)`
  ${UserFormFieldStyle}
  ${media.lessThan("320px")`
    width: 250px;
  `}
`
export const Label = styled.label`
  font-size: .8rem;
  text-transform: uppercase;
  font-weight: bolder;
`

export const Separator = styled.span`
  width: 4px;
  height: 2px;
  background-color: black;
  margin: auto 3px 15px 3px;

  ${media.lessThan("medium")`
    height: 0;
  `}
`