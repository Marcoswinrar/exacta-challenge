import styled from 'styled-components'
import { UserFormFieldStyle } from '../../config/styles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Form = styled.form`
  .invalid { 
    border-color: red;
  }

  input, select {
    ${UserFormFieldStyle}
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
