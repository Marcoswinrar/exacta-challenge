import styled from 'styled-components'
import media from 'styled-media-query'
import { UserFormFieldStyle } from '../../config/styles'

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const Select = styled.select`
  ${UserFormFieldStyle}
  border: 2px solid black;
  width: 339px;
  height: 36px;

  ${media.lessThan("320px")`
    width: 250px;
  `}
`
export const Label = styled.label`
  font-size: .8rem;
  text-transform: uppercase;
  font-weight: bolder;
`

export const Option = styled.option``