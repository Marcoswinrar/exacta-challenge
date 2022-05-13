import styled from 'styled-components'
import media from 'styled-media-query'

export const Content = styled.div``
export const Text = styled.p`
  color: black;
  text-align: center;
  padding: 15px;
  font-size: 1.3rem;
`
export const ButtonContainer = styled.div`
  display:flex;
  justify-content: center;

  button {
    margin: 5px;
  }

  ${media.lessThan("medium")`
    button {
      width: 100px;
      font-size: .8rem;
    }
  `}
`