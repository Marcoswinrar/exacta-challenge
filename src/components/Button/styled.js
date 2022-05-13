import styled from 'styled-components'
import media from 'styled-media-query'

export const ButtonWrapper = styled.button`
  width: ${props => props.width ? props.width : '145px'};
  font-size: 1.2rem;
  border: none;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  padding: 10px;
  cursor: pointer;
  box-shadow: 0 1px #999;
  background-color: #22a6b3;
  color: white;
  
  :active {
    box-shadow: 0 3px #666;
    transform: translateY(4px);
  }

  ${media.lessThan("320px")`
    width: 120px;
    font-size: 1rem;
  `}
`