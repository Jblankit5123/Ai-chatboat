
import { AuthProvider } from './Pages/context/AuthContext'
import AppRoutes from './routes/AppRoutes'

function App() {

  return (
    <>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>

    </>
  )
}

export default App;
