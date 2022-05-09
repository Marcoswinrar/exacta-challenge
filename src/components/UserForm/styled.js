import styled from 'styled-components'
import media from 'styled-media-query'

export const UserFormWrapper = styled.form`
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
//Refatorar
export const Errors = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.2rem;
  color: red;
`