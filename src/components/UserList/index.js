import { useCallback, useEffect, useState } from 'react'
import { useUsersContext } from '../../contexts/userContext'
import User from '../User'
import Fetch from '../../utils/fetch'
import * as S from './styled'

const UserList = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const { users, setUsers } = useUsersContext()

  const getUsers = useCallback(async () => {

    try {
      setLoading(true)
      const { data } = await Fetch.get('users')
      setUsers(data)

    } catch (error) {
      if (error.response) {
        setError(true)
      }
      
    } finally {
      setLoading(false)
    }

  }, [setUsers])

  useEffect(() => {
    getUsers()
  }, [getUsers])

  if (loading) {
    return <S.Loading>Carregando...</S.Loading>
  }

  if (users.length === 0 || error) {
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