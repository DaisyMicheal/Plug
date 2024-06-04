import { Link as RouterLink } from 'react-router-dom'
import { InstagramLogo, InstagramMobileLogo } from '../../../Assests/constants'
import { BiLogOut } from 'react-icons/bi'
import useLogout from '../../../hooks/useLogout'
import SidebarItems from './SidebarItems'

const Sidebar = () => {
  const { handleLogout, isLoggingOut } = useLogout()
  return (
    <div className='h-screen border-r border-gray-300 py-4 sticky top-0 left-0 px-4 md:px-2'>
      <div className='flex flex-col gap-6 w-full h-full'>
        <RouterLink to='/' className='pl-2 hidden md:block cursor-pointer'>
          <InstagramLogo />
        </RouterLink>
        <RouterLink
          to='/'
          className='p-2 block md:hidden rounded hover:bg-gray-200 w-10 cursor-pointer'
        >
          <InstagramMobileLogo />
        </RouterLink>
        <div className='flex flex-col gap-3 cursor-pointer flex-1'>
          <SidebarItems />
        </div>

        {/* LOGOUT */}
        <div className='mt-auto'>
          <div className='relative group'>
            <div className='absolute left-12 -translate-y-1/2 p-2 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              Logout
            </div>
            <div
              onClick={handleLogout}
              className='flex items-center gap-4 hover:bg-gray-400 rounded p-2 w-10 md:w-full justify-center md:justify-start cursor-pointer'
            >
              <BiLogOut size={25} />
              <button
                className='hidden md:block bg-transparent border-none'
                disabled={isLoggingOut}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
