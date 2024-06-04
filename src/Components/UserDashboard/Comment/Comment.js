import { Link } from 'react-router-dom'
import useGetUserProfileById from '../../../hooks/useGetUserProfileById'
import { timeAgo } from '../../../utils/timeAgo'

const Comment = ({ comment }) => {
  const { userProfile, isLoading } = useGetUserProfileById(comment.createdBy)

  if (isLoading) return <CommentSkeleton />
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
          <span className='text-sm'>{comment.comment}</span>
        </div>
        <span className='text-xs text-gray-500'>
          {timeAgo(comment.createdAt)}
        </span>
      </div>
    </div>
  )
}

const CommentSkeleton = () => {
  return (
    <div className='flex gap-4 w-full items-center'>
      <div className='w-10 h-10 bg-gray-200 rounded-full animate-pulse'></div>
      <div className='flex flex-col gap-1'>
        <div className='h-2 w-24 bg-gray-200 rounded animate-pulse'></div>
        <div className='h-2 w-12 bg-gray-200 rounded animate-pulse'></div>
      </div>
    </div>
  )
}

export default Comment
