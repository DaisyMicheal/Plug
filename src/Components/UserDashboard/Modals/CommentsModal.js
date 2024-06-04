import React, { useEffect, useRef } from 'react'
import Comment from '../Comment/Comment'
import usePostComment from '../../../hooks/usePostComment'

const CommentsModal = ({ isOpen, onClose, post }) => {
  const { handlePostComment, isCommenting } = usePostComment()
  const commentRef = useRef(null)
  const commentsContainerRef = useRef(null)

  const handleSubmitComment = async (e) => {
    e.preventDefault()
    await handlePostComment(post.id, commentRef.current.value)
    commentRef.current.value = ''
  }

  useEffect(() => {
    const scrollToBottom = () => {
      commentsContainerRef.current.scrollTop =
        commentsContainerRef.current.scrollHeight
    }
    if (isOpen) {
      setTimeout(() => {
        scrollToBottom()
      }, 100)
    }
  }, [isOpen, post.comments.length])

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      <div
        className='fixed inset-0 bg-black bg-opacity-50'
        onClick={onClose}
      ></div>
      <div className='relative bg-black border border-gray-600 max-w-md w-full p-6'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-lg'>Comments</h2>
          <button onClick={onClose} className='text-gray-500 hover:text-white'>
            ×
          </button>
        </div>
        <div
          className='flex flex-col gap-4 max-h-64 overflow-y-auto mb-4'
          ref={commentsContainerRef}
        >
          {post.comments.map((comment, idx) => (
            <Comment key={idx} comment={comment} />
          ))}
        </div>
        <form onSubmit={handleSubmitComment} className='mt-4'>
          <input
            type='text'
            placeholder='Comment'
            ref={commentRef}
            className='w-full p-2 bg-gray-800 border border-gray-700 rounded-sm text-sm'
          />
          <div className='flex justify-end mt-4'>
            <button
              type='submit'
              className={`px-4 py-2 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded ${
                isCommenting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={isCommenting}
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CommentsModal
