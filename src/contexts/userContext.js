import { createContext, useContext, useEffect, useState } from 'react'
import UserModal from '../components/UserModal'
import { ToastContainer, toast } from 'react-toastify'

const UsersContext = createContext({
  users: [],
  editUser: (id) => null,
  removeUser: (id) => null,
  notify: (message, type) => null
})

const UsersProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false)
  const [formDefaultValues, setFormDefaultValues] = useState({})
  const [users, setUsers] = useState([])

  const notify = (message, type) => toast[type](message)

  const editUser = (user) => {
    const newUsers = [...users]
    newUsers[user.index] = user
    setUsers(newUsers)
  }

  const removeUser = (id) => {
    const filtered = users.filter((user) => user.id !== id)
    setUsers([...filtered])
  }

  useEffect(() => {
    setFormDefaultValues({})
  }, [])

  return (
    <UsersContext.Provider
      value={{
        users,
        setUsers,
        setShowModal,
        setFormDefaultValues,
        editUser,
        removeUser,
        notify
      }}
    >
      {children}
      {showModal && <UserModal initialValues={formDefaultValues} />}
      <ToastContainer position="bottom-right" />
    </UsersContext.Provider>
  )
}

const userContext = () => useContext(UsersContext)
export { UsersProvider, userContext }
