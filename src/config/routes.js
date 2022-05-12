import { Routes, Route } from 'react-router-dom'
import Register from '../pages/Register'
import Users from '../pages/Users'

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Register />} />
    <Route path="/users" element={<Users />} />
    {/* <Route path="*" element={<Page404 />} /> */}
  </Routes>
)

export default AppRoutes