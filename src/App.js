import AppRoutes from "./config/routes"
import { UsersProvider } from "./contexts/userContext"

function App() {
  return (
    <div className='App'>
      <UsersProvider>
        <AppRoutes />
      </UsersProvider>
    </div>
  )
}

export default App
