import styled from 'styled-components'
import media from 'styled-media-query'

export const HeaderWrapper = styled.header``

export const Container = styled.div`
  background-color: ${props => props.backgroundColor};
  color: ${props => props.fontColor};
  text-transform: uppercase;
`
  
const HeaderStyle = styled.h1`
  margin: 0;
  margin-left: 12px;
  line-height: 90px;
  height: 90px;

  ${media.lessThan("small")`
    font-size: 1.5rem;
    text-align: center;
  `}
`  
export const Header = styled(HeaderStyle)`
  font-weight: bolder;
`
export const SubHeader = styled(HeaderStyle)`
  font-weight: 300;
  text-align: center;
`