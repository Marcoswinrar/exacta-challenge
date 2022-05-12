import { useCallback, useEffect, useState } from 'react'
import { userContext } from '../../contexts/userContext'
import User from '../User'
import Fetch from '../../utils/fetch'
import * as S from './styled'

const UserList = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const { users, setUsers } = userContext()

  const getUsers = useCallback(async () => {
    setLoading(true)
    await Fetch.get('users')
      .then(({ data }) => {
        setUsers(data)
      })
      .catch((error) => {
        const { response } = error

        if (error && response.status === 404) {
          setError(true)
        }
      })
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    getUsers()
  }, [getUsers])

  if (loading) {
    return <S.Loading>Carregando...</S.Loading>
  }

  if(users.length === 0 || error){
    return <S.Error>Não há usuários cadastrados!</S.Error>
  }

  return (
    <S.UserListWrapper>
      <S.UserList>
        {users.map((user, index) => (
          <User
            index={index}
            key={user.id}
            user={user}
          />
        ))}
      </S.UserList>
    </S.UserListWrapper>
  )
}

export default UserList