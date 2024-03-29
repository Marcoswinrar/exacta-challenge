import styled from 'styled-components'
import media from 'styled-media-query'

export const ButtonContainer = styled.div`
  display:flex;

  ${media.lessThan("small")`
    button {
      width: 110px;
      font-size: .8rem;
    }  
  `}

`