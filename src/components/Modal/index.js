import * as S from './styled'

const Modal = ({ children, title, onClose }) => (
  <S.ModalOverlay>
    <S.ModalContent>
      <S.ModalHeader>
        <S.Title>{title}</S.Title>
        <S.Close onClick={onClose} />
      </S.ModalHeader>
      <hr />
      <S.ModalBody>
        {children}
      </S.ModalBody>
    </S.ModalContent>
  </S.ModalOverlay>
)

export default Modal
