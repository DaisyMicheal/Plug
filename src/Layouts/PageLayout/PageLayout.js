import { useLocation } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase/firebase'
import Sidebar from '../../Components/UserDashboard/Sidebar/Sidebar'
import Navbar from '../../Components/UserDashboard/Navbar/Navbar'
import Main from '../../Components/UserDashboard/Main/MainItem'

const PageLayout = ({ children }) => {
  const { pathname } = useLocation()
  const [user, loading] = useAuthState(auth)
  const canRenderSidebar = pathname !== '/auth' && user
  const canRenderNavbar = !user && !loading && pathname !== '/auth'

  const checkingUserIsAuth = !user && loading
  if (checkingUserIsAuth) return <PageLayoutSpinner />

  return (
    <div className={`flex ${canRenderNavbar ? 'flex-col' : 'flex-row'}`}>
      {canRenderSidebar && (
        <div className='w-20 md:w-60'>
          <Sidebar />
        </div>
      )}

      {canRenderNavbar && <Navbar />}

      <div className='flex-1 mx-auto w-full max-w-screen-xl'>
        {children}
        <Main />
      </div>
    </div>
  )
}

export default PageLayout

const PageLayoutSpinner = () => {
  return (
    <div className='flex flex-col h-screen items-center justify-center'>
      <svg
        className='animate-spin h-16 w-16 text-green-700'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
      >
        <circle
          className='opacity-25'
          cx='12'
          cy='12'
          r='10'
          stroke='currentColor'
          strokeWidth='4'
        ></circle>
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 018-8v8H4zm2 5.292A7.96 7.96 0 014 12H2c0 2.137.834 4.145 2.192 5.658l1.808-1.366z'
        ></path>
      </svg>
    </div>
  )
}
