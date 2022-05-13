import styled from 'styled-components'
import media from 'styled-media-query'
import { UserFormFieldStyle } from '../../config/styles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  ${media.lessThan("small")`
    width: 90%;
    margin: 0 auto;
  `}
`

export const Form = styled.form`
  .invalid { 
    border-color: red;
  }

  input, select {
    ${UserFormFieldStyle}
  }

  select { 
    height: 44px;
  }

  button {
    display: block;
    margin: 12px auto;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`
