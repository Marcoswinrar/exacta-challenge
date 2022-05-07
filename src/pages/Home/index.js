import Layout from '../../components/Layout'
import UserForm from '../../components/UserForm'
import * as S from './styled'

const Home = () => (
  <Layout>
    <S.HomeWrapper>
      <S.Title alt="Dados pessoais">Dados Pessoais</S.Title>
      <S.Content>
        <UserForm />
      </S.Content>
    </S.HomeWrapper>
  </Layout>
)

export default Home