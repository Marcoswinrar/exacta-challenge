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

  :focus {
    background-color: #22a6b3;
  }

  ${media.lessThan("320px")`
    width: 120px;
    font-size: 1rem;
  `}
`