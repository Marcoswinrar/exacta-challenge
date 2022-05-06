import * as S from './styled'

const Header = () => (
  <S.HeaderWrapper>
    <S.Container 
      backgroundColor="#1f1f1f"
      fontColor="white">
      <S.Header alt="Logo da app">exactaworks</S.Header>
    </S.Container>
    <S.Container 
      backgroundColor="#2b2b2b"
      fontColor="#22a6b3">
      <S.SubHeader alt="Titulo da app">cadastro de usuários</S.SubHeader>
    </S.Container>
  </S.HeaderWrapper>
)

export default Header