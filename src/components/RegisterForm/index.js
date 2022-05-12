import { userContext } from '../../contexts/userContext'
import Form from '../Form'
import Button from '../Button'
import Fetch from '../../utils/fetch'
import * as S from './styled'

const RegisterForm = () => {
  const { notify } = userContext()

  const handleSubmit = async (user) => {
    await Fetch.post('users', user)
      .then(() => {
        notify("Usuário criado com sucesso!", "success")
      })
      .catch((error) => {
        if (error.response) {
          notify("Houve um erro ao cadastrar!", "error")
        }
      })
  }

  return (
    <S.RegisterForm>
      <Form onSubmit={handleSubmit}>
        <Button width="200px" type="submit" value="Cadastrar" />
      </Form>
    </S.RegisterForm>
  )
}

export default RegisterForm