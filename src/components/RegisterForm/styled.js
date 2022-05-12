import styled from 'styled-components'
import media from 'styled-media-query'

export const RegisterForm = styled.div`
`
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.2rem;

  ${media.lessThan("large")`
    flex-direction: column;  
  `}
`
