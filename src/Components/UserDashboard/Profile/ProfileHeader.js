import { useState } from 'react'
import useUserProfileStore from '../../../store /userProfileStore'
import useAuthStore from '../../../store /authStore'
import EditProfile from './EditProfile'
import useFollowUser from '../../../hooks/useFollowUser'

const ProfileHeader = () => {
  const { userProfile } = useUserProfileStore()
  const authUser = useAuthStore((state) => state.user)
  const [isOpen, setIsOpen] = useState(false)
  const { isFollowing, isUpdating, handleFollowUser } = useFollowUser(
    userProfile?.uid
  )
  const visitingOwnProfileAndAuth =
    authUser && authUser.username === userProfile.username
  const visitingAnotherProfileAndAuth =
    authUser && authUser.username !== userProfile.username

  const onOpen = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)

  return (
    <div className='flex flex-col sm:flex-row gap-4 sm:gap-10 py-10'>
      <div className='flex justify-center sm:justify-start mx-auto'>
        <img
          className='rounded-full w-24 md:w-32'
          src={userProfile.profilePicURL}
          alt='As a programmer logo'
        />
      </div>
      <div className='flex flex-col items-start gap-2 mx-auto flex-1'>
        <div className='flex flex-col sm:flex-row gap-4 items-center w-full justify-center sm:justify-start'>
          <span className='text-sm md:text-lg'>{userProfile.username}</span>
          {visitingOwnProfileAndAuth && (
            <div className='flex gap-4 items-center justify-center'>
              <button
                className='bg-white text-black hover:bg-gray-200 px-4 py-2 rounded text-xs md:text-sm'
                onClick={onOpen}
              >
                Edit Profile
              </button>
            </div>
          )}
          {visitingAnotherProfileAndAuth && (
            <div className='flex gap-4 items-center justify-center'>
              <button
                className={`bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded text-xs md:text-sm ${
                  isUpdating ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={handleFollowUser}
                disabled={isUpdating}
              >
                {isFollowing ? 'Unfollow' : 'Follow'}
              </button>
            </div>
          )}
        </div>

        <div className='flex items-center gap-2 sm:gap-4'>
          <span className='text-xs md:text-sm'>
            <span className='font-bold mr-1'>{userProfile.posts.length}</span>
            Posts
          </span>
          <span className='text-xs md:text-sm'>
            <span className='font-bold mr-1'>
              {userProfile.followers.length}
            </span>
            Followers
          </span>
          <span className='text-xs md:text-sm'>
            <span className='font-bold mr-1'>
              {userProfile.following.length}
            </span>
            Following
          </span>
        </div>

        <div className='flex items-center gap-4'>
          <span className='text-sm font-bold'>{userProfile.fullName}</span>
        </div>
        <span className='text-sm'>{userProfile.bio}</span>
      </div>
      {isOpen && <EditProfile isOpen={isOpen} onClose={onClose} />}
    </div>
  )
}

export default ProfileHeader
