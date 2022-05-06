import { GlobalStyle } from '../../config/styles'
import Header from '../Header'
import Navbar from '../Navbar'
import * as S from './styled'

const Layout = ({ children }) => (
  <S.LayoutWrapper>
    <GlobalStyle />
    <Header />
    <Navbar />
    {children}
  </S.LayoutWrapper>
)

export default Layout