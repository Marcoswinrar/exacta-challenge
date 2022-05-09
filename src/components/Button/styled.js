import styled from 'styled-components'
import media from 'styled-media-query'

export const ButtonWrapper = styled.button`
  width: ${props => props.width ? props.width : '145px'};
  border: 2px solid black;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  background-color: #fffced; 
  padding: 5px;
  cursor: pointer;
  box-shadow: 0 1px #999;
  
  :active {
    box-shadow: 0 3px #666;
    transform: translateY(4px);
  }

  ${media.lessThan("320px")`
    width: 120px;
    font-size: 1rem;
  `}
`