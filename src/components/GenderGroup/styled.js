import styled, {css} from 'styled-components'

const textStyle = css`
  font-size: .8rem;
  font-weight: bolder;
  text-transform: uppercase;
  margin-right: 8px;
`

export const GenderGroupWrapper = styled.div`
  display: flex;
  align-items: center;
`
export const Title = styled.span`${textStyle}`
export const Label = styled.label`${textStyle}
`
export const Input = styled.input`` 
  
export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
`