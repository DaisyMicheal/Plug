import React from 'react'
import { Link } from 'react-router-dom'
import useAuthStore from '../../../store /authStore'

const ProfileLink = () => {
  const authUser = useAuthStore((state) => state.user)

  return (
    <div className='relative group ml-1'>
      <Link
        to={`/${authUser?.username}`}
        className='flex items-center gap-4 p-2 rounded-lg w-10 md:w-full justify-center md:justify-start group-hover:bg-gray-700 transition-colors'
      >
        <img
          src={
            authUser?.profilePicURL ||
            'https://i.pinimg.com/474x/01/e2/96/01e29674ca2315b34630462976c319b5.jpg'
          }
          alt='Profile'
          className='w-10 h-10 rounded-full'
        />
        <span className='hidden md:block'>Profile</span>
      </Link>
      <div className='absolute left-14 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
        Profile
      </div>
    </div>
  )
}

export default ProfileLink
