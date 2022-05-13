import styled from 'styled-components'
import media from 'styled-media-query'
import { MdClose } from 'react-icons/md'

export const ModalOverlay = styled.div`
  position: fixed; 
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto;
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4);
`
export const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: #22a6b3;
`

export const ModalBody = styled.div`
  padding: 30px;
  hr {
    margin: 0;
  }
`

export const ModalContent = styled.div`
  background-color: #fffced;
  border: 1px solid #888;
  border-radius: 10px;
  width: 460px; 
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  ${media.lessThan("medium")`
    width: 80%;
  `}

  ${media.lessThan("small")`
    width: 90%;
  `}
`

export const Title = styled.h2`
  text-transform: uppercase;
  margin: 0;
  padding: 30px;
`

export const Close = styled(MdClose)`
  padding: 20px;
  font-size: 1.4rem;
  cursor: pointer;
`