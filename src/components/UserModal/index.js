import { useUsersContext } from '../../contexts/userContext'
import Modal from '../Modal'
import Form from '../Form'
import Button from '../Button'
import Fetch from '../../utils/fetch'
import * as S from './styled'

const UserModal = ({ initialValues }) => {

  const { setShowModal, notify, editUser } = useUsersContext()

  const handleEdit = async (user) => {
    try {
      await Fetch.put(`users/${user.id}`, user)
      editUser(user)
      notify("Usuário atualizado com sucesso!", "success")

    } catch (error) {
      if (error.response) {
        notify("Erro ao atualizar usuário!", "error")
      }
    }
    finally {
      setShowModal(false)
    }
  }

  return (
    <Modal
      title={"Edição de Usuário"}
      onClose={() => setShowModal(false)}
    >
      <Form
        initialValues={initialValues}
        onSubmit={handleEdit}
      >
        <S.ButtonContainer>
          <Button
            type="submit"
            value="Editar"
          />
          <Button
            type="button"
            value="Cancelar"
            onClick={() => setShowModal(false)}
          />
        </S.ButtonContainer>
      </Form>
    </Modal>
  )
}

export default UserModal