import Layout from '../../components/Layout'
import RegisterForm from '../../components/RegisterForm'
import * as S from './styled'

const Register = () => (
  <Layout>
    <S.HomeWrapper>
      <S.Title alt="Dados pessoais">Dados Pessoais</S.Title>
      <S.Content>
        <RegisterForm />
      </S.Content>
    </S.HomeWrapper>
  </Layout>
)

export default Register