import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from '../../../Assests/constants'
import usePostComment from '../../../hooks/usePostComment'
import useAuthStore from '../../../store /authStore'
import useLikePost from '../../../hooks/useLikePost'
import { timeAgo } from '../../../utils/timeAgo'
import CommentsModal from '../Modals/CommentsModal'

const PostFooter = ({ post, isProfilePage, creatorProfile }) => {
  const { isCommenting, handlePostComment } = usePostComment()
  const [comment, setComment] = useState('')
  const authUser = useAuthStore((state) => state.user)
  const commentRef = useRef(null)
  const { handleLikePost, isLiked, likes } = useLikePost(post)
  const [isOpen, setIsOpen] = useState(false)

  const handleSubmitComment = async () => {
    await handlePostComment(post.id, comment)
    setComment('')
  }

  const onOpen = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)

  return (
    <div className='mb-10 mt-auto'>
      <div className='flex items-center gap-4 w-full pt-0 mb-2 mt-4'>
        <div onClick={handleLikePost} className='cursor-pointer text-lg'>
          {!isLiked ? <NotificationsLogo /> : <UnlikeLogo />}
        </div>

        <div
          onClick={() => commentRef.current.focus()}
          className='cursor-pointer text-lg'
        >
          <CommentLogo />
        </div>
      </div>
      <p className='font-semibold text-sm'>{likes} likes</p>

      {isProfilePage && (
        <p className='text-xs text-gray-500'>
          Posted {timeAgo(post.createdAt)}
        </p>
      )}

      {!isProfilePage && (
        <>
          <p className='text-sm font-bold'>
            {creatorProfile?.username}{' '}
            <span className='font-normal'>{post.caption}</span>
          </p>
          {post.comments.length > 0 && (
            <p
              className='text-sm text-gray-500 cursor-pointer'
              onClick={onOpen}
            >
              View all {post.comments.length} comments
            </p>
          )}
          {isOpen && (
            <CommentsModal isOpen={isOpen} onClose={onClose} post={post} />
          )}
        </>
      )}

      {authUser && (
        <div className='flex items-center gap-2 justify-between w-full'>
          <div className='relative flex-1'>
            <input
              type='text'
              className='w-full border-b border-gray-300 focus:outline-none focus:border-gray-500 transition duration-200'
              placeholder='Add a comment...'
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              ref={commentRef}
            />
            <button
              className='absolute right-0 top-0 text-blue-500 font-semibold text-sm cursor-pointer hover:text-white bg-transparent'
              onClick={handleSubmitComment}
              disabled={isCommenting}
            >
              Post
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default PostFooter
