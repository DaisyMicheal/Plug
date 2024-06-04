import React from 'react'
import { Link } from 'react-router-dom'
import useLogout from '../../../hooks/useLogout'
import useAuthStore from '../../../store /authStore'

const SuggestedHeader = () => {
  const { handleLogout, isLoggingOut } = useLogout()
  const authUser = useAuthStore((state) => state.user)

  if (!authUser) return null

  return (
    <div className='flex justify-between items-center w-full'>
      <div className='flex items-center gap-2'>
        <Link to={`/${authUser.username}`}>
          <img
            src={authUser.profilePicURL}
            alt={authUser.username}
            className='w-12 h-12 rounded-full'
          />
        </Link>
        <Link to={`/${authUser.username}`}>
          <span className='text-xs font-bold'>{authUser.username}</span>
        </Link>
      </div>
      <button
        className='text-xs font-medium text-blue-400 hover:text-blue-500 transition-colors disabled:opacity-50'
        onClick={handleLogout}
        disabled={isLoggingOut}
      >
        Log out
      </button>
    </div>
  )
}

export default SuggestedHeader
