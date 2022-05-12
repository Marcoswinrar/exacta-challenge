import Layout from '../../components/Layout'
import UserList from '../../components/UserList'
import * as S from './styled'

const Users = () => (
  <Layout>
    <S.UserWrapper>
      <S.Title>Lista de Usuários</S.Title>
      <UserList />
    </S.UserWrapper>
  </Layout>
)


export default Users