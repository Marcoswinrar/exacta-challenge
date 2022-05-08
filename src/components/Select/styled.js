import styled from 'styled-components'
import media from 'styled-media-query'
import { UserFormFieldStyle } from '../../config/styles'

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const Select = styled.select`
  ${UserFormFieldStyle}
  width: 336px;
  border: 2px solid black;
  height: 36px;

  :invalid {
    border-color: red;
  }

  ${media.lessThan("320px")`
    width: 100%;
  `}
`
export const Label = styled.label`
  font-size: .8rem;
  text-transform: uppercase;
  font-weight: bolder;
`

export const Option = styled.option``