import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Users from './pages/Users'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        {/* <Route path="*" element={<Page404 />} /> */}
      </Routes>
    </div>
  )
}

export default App
