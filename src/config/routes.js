import { Routes, Route } from 'react-router-dom'
import Register from '../pages/Register'
import Users from '../pages/Users'
import NotFoundPage from '../pages/404'

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Register />} />
    <Route path="/users" element={<Users />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
)

export default AppRoutes