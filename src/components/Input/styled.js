import InputMask from 'react-input-mask'
import styled from 'styled-components'
import media from 'styled-media-query'
import { UserFormFieldStyle } from '../../config/styles'

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  ${media.lessThan("large")`
    width: 100%;
  `}

  .invalid {
    border-color: red;
  }

`
export const Input = styled(InputMask)`
  ${UserFormFieldStyle} 

  :focus {
    outline: none;
    border-color: blue;
  }

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

  ${media.lessThan("large")`
    height: 0;
  `}
`