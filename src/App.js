import { Navigate, Routes, Route } from 'react-router-dom'
import PageLayout from './Layouts/PageLayout/PageLayout'
import UserDashboard from './pages /UserDashboard /UserDashboard'

import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase/firebase'
import HomePage from './pages /HomePage/HomePage'
import Discover from './pages /HomePage/Discover'
import AuthPage from './pages /AuthPage/AuthPage'
import ProfilePage from './pages /UserDashboard /ProfilePage'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: (props) => ({
    body: {
      bg: mode('gray.100', '#000')(props), // Gray
      color: mode('gray.800', 'whiteAlpha.900')(props), //
    },
  }),
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}
const theme = extendTheme({ config, styles })

function App() {
  const [authUser] = useAuthState(auth)

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/discover' element={<Discover />} />
     
      <Route
        path='/auth'
        element={
          <ChakraProvider theme={theme}>
            <AuthPage />
          </ChakraProvider>
        }
      />

      <Route
        element={
          <ChakraProvider theme={theme}>
            <PageLayout />
          </ChakraProvider>
        }
      >
        <Route
          path='/userdashboard'
          element={authUser ? <UserDashboard /> : <Navigate to='/auth' />}
        />
        <Route path='/profile' element={<ProfilePage />} />
      </Route>
    </Routes>
  )
}

export default App
