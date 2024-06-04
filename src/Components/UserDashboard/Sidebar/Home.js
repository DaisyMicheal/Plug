import { AiFillHome } from 'react-icons/ai'
import { Link as RouterLink } from 'react-router-dom'
// https://meet.google.com/pgh-mmaj-swg
const Home = () => {
  return (
    <div className='relative group flex items-center'>
      <RouterLink
        to='/Main'
        className='flex items-center gap-4 p-2 rounded-lg hover:bg-whiteAlpha-400 w-10 md:w-full justify-center md:justify-start'
      >
        <AiFillHome size={25} />
        <span className='hidden md:block'>Home</span>
      </RouterLink>
      <div className='absolute left-full ml-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2'>
        Home
      </div>
    </div>
  )
}

export default Home
