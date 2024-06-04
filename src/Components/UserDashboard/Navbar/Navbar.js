import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='container mx-auto my-4'>
      <div className='flex w-full justify-center sm:justify-between items-center'>
        <img
          src='/PLug.png'
          alt='Logo'
          className='h-20 hidden sm:block cursor-pointer'
        />
        <div className='flex gap-4'>
          <Link to='/auth'>
            <button className='bg-blue-500 text-white text-sm py-2 px-4 rounded'>
              Login
            </button>
          </Link>
          <Link to='/auth'>
            <button className='border border-blue-500 text-blue-500 text-sm py-2 px-4 rounded'>
              Signup
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
