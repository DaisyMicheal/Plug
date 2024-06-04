import { Link } from 'react-router-dom'
import { timeAgo } from '../../../utils/timeAgo'
import useUserProfileStore from '../../../store /userProfileStore'

const Caption = ({ post }) => {
  const userProfile = useUserProfileStore((state) => state.userProfile)

  return (
    <div className='flex gap-4'>
      <Link to={`/${userProfile.username}`}>
        <img
          src={userProfile.profilePicURL}
          alt={`${userProfile.username} profile`}
          className='w-8 h-8 rounded-full'
        />
      </Link>
      <div className='flex flex-col'>
        <div className='flex gap-2 items-center'>
          <Link to={`/${userProfile.username}`}>
            <span className='font-bold text-sm'>{userProfile.username}</span>
          </Link>
          <span className='text-sm'>{post.caption}</span>
        </div>
        <span className='text-xs text-gray-500'>{timeAgo(post.createdAt)}</span>
      </div>
    </div>
  )
}

export default Caption
