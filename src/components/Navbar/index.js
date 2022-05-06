import * as S from './styled'
import { NavLink } from 'react-router-dom'

const Navbar = () => (
  <S.NavbarWrapper>
    <NavLink to="/">Cadastro</NavLink>
    <NavLink to="/users">Usuários</NavLink>
  </S.NavbarWrapper>
)

export default Navbar