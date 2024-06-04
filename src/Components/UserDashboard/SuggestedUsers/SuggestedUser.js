import React from 'react'
import { Link } from 'react-router-dom'
import useFollowUser from '../../../hooks/useFollowUser'
import useAuthStore from '../../../store /authStore'

const SuggestedUser = ({ user, setUser }) => {
  const { isFollowing, isUpdating, handleFollowUser } = useFollowUser(user.uid)
  const authUser = useAuthStore((state) => state.user)

  const onFollowUser = async () => {
    await handleFollowUser()
    setUser({
      ...user,
      followers: isFollowing
        ? user.followers.filter((follower) => follower.uid !== authUser.uid)
        : [...user.followers, authUser],
    })
  }

  return (
    <div className='flex justify-between items-center w-full'>
      <div className='flex items-center gap-2'>
        <Link to={`/${user.username}`}>
          <img
            src={user.profilePicURL}
            alt={user.username}
            className='w-10 h-10 rounded-full'
          />
        </Link>
        <div className='flex flex-col items-start'>
          <Link to={`/${user.username}`}>
            <div className='text-xs font-bold'>{user.fullName}</div>
          </Link>
          <div className='text-xs text-gray-500'>
            {user.followers.length} followers
          </div>
        </div>
      </div>
      {authUser.uid !== user.uid && (
        <button
          className='text-xs font-medium text-blue-400 hover:text-white transition-colors'
          onClick={onFollowUser}
          disabled={isUpdating}
        >
          {isFollowing ? 'Unfollow' : 'Follow'}
        </button>
      )}
    </div>
  )
}

export default SuggestedUser
