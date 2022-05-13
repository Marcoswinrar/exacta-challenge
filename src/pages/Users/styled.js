import styled from 'styled-components'
import media from 'styled-media-query'

export const UserWrapper = styled.section`
  width: 90%;
  margin: 0 auto;
`

export const Title = styled.h1`
  text-transform: uppercase;

  ${media.lessThan("small")`
    text-align: center;
  `}
`