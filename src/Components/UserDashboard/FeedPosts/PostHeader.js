import { Link } from 'react-router-dom'
import useFollowUser from '../../../hooks/useFollowUser'
import { timeAgo } from '../../../utils/timeAgo'

const PostHeader = ({ post, creatorProfile }) => {
  const { handleFollowUser, isFollowing, isUpdating } = useFollowUser(
    post.createdBy
  )

  return (
    <div className='flex justify-between items-center w-full my-2'>
      <div className='flex items-center gap-2'>
        {creatorProfile ? (
          <Link to={`/${creatorProfile.username}`}>
            <img
              src={creatorProfile.profilePicURL}
              alt='user profile pic'
              className='h-8 w-8 rounded-full'
            />
          </Link>
        ) : (
          <div className='h-8 w-8 rounded-full bg-gray-200 animate-pulse'></div>
        )}

        <div className='flex items-center gap-2 font-semibold text-sm'>
          {creatorProfile ? (
            <Link to={`/${creatorProfile.username}`}>
              {creatorProfile.username}
            </Link>
          ) : (
            <div className='h-4 w-24 bg-gray-200 animate-pulse'></div>
          )}

          <span className='text-gray-500'>• {timeAgo(post.createdAt)}</span>
        </div>
      </div>
      <div>
        <button
          className={`text-blue-500 font-bold text-xs bg-transparent ${
            isFollowing ? 'hover:text-white' : ''
          } transition duration-200 ease-in-out`}
          onClick={handleFollowUser}
          disabled={isUpdating}
        >
          {isFollowing ? 'Unfollow' : 'Follow'}
        </button>
      </div>
    </div>
  )
}

export default PostHeader
