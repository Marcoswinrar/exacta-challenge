import { useState } from 'react'
import { userContext } from '../../contexts/userContext'
import DeleteModal from '../DeleteModal'
import * as S from './styled'

const User = ({ user, index }) => {
  const {
    setShowModal,
    setFormDefaultValues
  } = userContext()

  const [showDeleteModal, setShowDeleteModal] = useState(false)

  const handleEdit = () => {
    setFormDefaultValues({ ...user, index })
    setShowModal(true)
  }

  return (
    <>
      <S.UserWrapper>
        <S.NomeUsuario
          title="Nome do usuário">
          {user.Nome}
        </S.NomeUsuario>
        <S.NumeroRg
          className='column__direction--item'
          title="Numero do RG">
          <span>RG:{' '}</span>{user.NumeroRg}
        </S.NumeroRg>
        <S.DataEmissao
          className='column__direction--item'
          title="Data de Emissão">
          <span>Data Emissão:{' '}</span>{user.DataEmissao}
        </S.DataEmissao>
        <S.OrgaoEmissor
          className='column__direction--item'
          title="Orgão Emissor">
          <span>Orgão Emissor:{' '}</span>{user.OrgaoEmissor}
        </S.OrgaoEmissor>
        <S.Options>
          <S.Genero>
            {user.Genero === "M" ?
              <S.MaleIcon title="Masculino" /> :
              <S.FemaleIcon title="Feminino" />
            }
          </S.Genero>
          <hr />
          <S.Actions>
            <S.EditAction
              title="Editar Usuário"
              onClick={() => handleEdit()}
            />
            <S.DeleteAction
              title="Deletar Usuário"
              onClick={() => setShowDeleteModal(true)}
            />
          </S.Actions>
        </S.Options>
      </S.UserWrapper>
      {showDeleteModal &&
        <DeleteModal
          user={{...user, index}}
          onClose={() => setShowDeleteModal(false)}
        />
      }
    </>
  )
}


export default User