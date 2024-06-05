import ProfileHeader from '../../Components/UserDashboard/Profile/ProfileHeader'
import ProfileTabs from '../../Components/UserDashboard/Profile/ProfileTabs'
import ProfilePosts from '../../Components/UserDashboard/Profile/ProfilePosts'
import useGetUserProfileByUsername from '../../hooks/useGetUserProfileByUsername'
import { useParams } from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom'

const ProfilePage = () => {
  const { username } = useParams()
  const { isLoading, userProfile } = useGetUserProfileByUsername(username)

  const userNotFound = !isLoading && !userProfile
  if (userNotFound) return <UserNotFound />

  return (
    <div className='container max-w-7xl py-5'>
      <div className='py-10 px-4 md:pl-10 w-full mx-auto flex flex-col'>
        {!isLoading && userProfile && <ProfileHeader />}
        {isLoading && <ProfileHeaderSkeleton />}
      </div>
      <div className='px-2 sm:px-4 max-w-full mx-auto border-t border-white/30 flex flex-col'>
        <ProfileTabs />
        <ProfilePosts />
      </div>
    </div>
  )
}

export default ProfilePage

const ProfileHeaderSkeleton = () => {
  return (
    <div className='flex gap-4 sm:gap-10 py-10 flex-col sm:flex-row justify-center items-center'>
      <div className='skeleton-circle w-24 h-24 rounded-full bg-gray-200'></div>
      <div className='flex flex-col gap-2 mx-auto flex-1 items-center sm:items-start'>
        <div className='skeleton h-3 w-36 bg-gray-200'></div>
        <div className='skeleton h-3 w-24 bg-gray-200'></div>
      </div>
    </div>
  )
}

const UserNotFound = () => {
  return (
    <div className='flex flex-col text-center mx-auto'>
      <div className='text-2xl'>User Not Found</div>
      <RouterLink to='/' className='text-blue-500 w-max mx-auto'>
        Go home
      </RouterLink>
    </div>
  )
}
