import Layout from '../../components/Layout'
import * as S from './styled'

const NotFoundPage = () => (
  <Layout>
    <S.NotFoundPageWrapper>
      <h2>404: Not Found</h2>
      <p>Você acessou uma rota que não existe...</p>
    </S.NotFoundPageWrapper>
  </Layout>
)

export default NotFoundPage