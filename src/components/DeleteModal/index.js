import { useUsersContext } from "../../contexts/userContext"
import Button from "../Button"
import Modal from "../Modal"
import Fetch from '../../utils/fetch'
import * as S from './styled'

const DeleteModal = ({ user, onClose }) => {
  const { removeUser, notify } = useUsersContext()

  const handleRemove = async () => {
    await Fetch.delete(`users/${user.id}`)
      .then(() => {
        removeUser(user.id)
        notify("Usuário excluído com sucesso!", "success")
      })
      .catch(error => {
        if (error.response) {
          notify("Houve um problema ao excluír", "error")
        }
      })
      .finally(() => onClose())
  }

  return (
    <Modal
      title={"Excluir Usuário"}
      onClose={onClose}
    >
      <S.Content>
        <S.Text>Tem certeza que deseja excluir esse registro?</S.Text>
        <S.ButtonContainer>
          <Button
            type="submit"
            value="Excluir"
            onClick={() => handleRemove()}
          />
          <Button
            type="button"
            value="Cancelar"
            onClick={onClose}
          />
        </S.ButtonContainer>
      </S.Content>
    </Modal>
  )
}

export default DeleteModal

