import React, { useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { deleteObject, ref } from 'firebase/storage'
import { firestore, storage } from '../../../firebase/firebase'
import { arrayRemove, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import useUserProfileStore from '../../../store /userProfileStore'
import useAuthStore from '../../../store /authStore'
import useShowToast from '../../../hooks/useShowToast'
import usePostStore from '../../../store /postStore'
import Comment from '../Comment/Comment'
import PostFooter from '../FeedPosts/PostFooter'
import Caption from '../Comment/Caption'

const ProfilePost = ({ post }) => {
  const [isOpen, setIsOpen] = useState(false)
  const userProfile = useUserProfileStore((state) => state.userProfile)
  const authUser = useAuthStore((state) => state.user)
  const showToast = useShowToast()
  const [isDeleting, setIsDeleting] = useState(false)
  const deletePost = usePostStore((state) => state.deletePost)
  const decrementPostsCount = useUserProfileStore((state) => state.deletePost)

  const handleDeletePost = async () => {
    if (!window.confirm('Are you sure you want to delete this post?')) return
    if (isDeleting) return

    try {
      setIsDeleting(true)
      const imageRef = ref(storage, `posts/${post.id}`)
      await deleteObject(imageRef)
      const userRef = doc(firestore, 'users', authUser.uid)
      await deleteDoc(doc(firestore, 'posts', post.id))

      await updateDoc(userRef, {
        posts: arrayRemove(post.id),
      })

      deletePost(post.id)
      decrementPostsCount(post.id)
      showToast('Success', 'Post deleted successfully', 'success')
    } catch (error) {
      showToast('Error', error.message, 'error')
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <>
      <div
        className='cursor-pointer rounded overflow-hidden border border-gray-300 relative aspect-square'
        onClick={() => setIsOpen(true)}
      >
        <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 z-10'>
          <div className='flex gap-12'>
            <div className='flex items-center gap-2'>
              <AiFillHeart size={20} />
              <span className='font-bold'>{post.likes.length}</span>
            </div>
            <div className='flex items-center gap-2'>
              <FaComment size={20} />
              <span className='font-bold'>{post.comments.length}</span>
            </div>
          </div>
        </div>
        <img
          src={post.imageURL}
          alt='profile post'
          className='w-full h-full object-cover'
        />
      </div>

      {isOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center'>
          <div
            className='fixed inset-0 bg-black bg-opacity-70'
            onClick={() => setIsOpen(false)}
          ></div>
          <div className='relative bg-black rounded-md max-w-5xl w-full max-h-90vh overflow-y-auto'>
            <button
              className='absolute top-2 right-2 text-white text-2xl'
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>
            <div className='flex flex-col md:flex-row gap-4 p-4'>
              <div className='flex-1.5 flex items-center justify-center'>
                <img
                  src={post.imageURL}
                  alt='profile post'
                  className='rounded-md'
                />
              </div>
              <div className='flex-1 flex flex-col px-4 hidden md:flex'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-4'>
                    <img
                      src={userProfile.profilePicURL}
                      alt={userProfile.username}
                      className='w-8 h-8 rounded-full'
                    />
                    <span className='font-bold text-sm'>
                      {userProfile.username}
                    </span>
                  </div>
                  {authUser?.uid === userProfile.uid && (
                    <button
                      className='bg-transparent hover:bg-gray-300 text-red-600 p-1 rounded-md'
                      onClick={handleDeletePost}
                      disabled={isDeleting}
                    >
                      <MdDelete size={20} />
                    </button>
                  )}
                </div>
                <hr className='my-4 border-gray-500' />
                <div className='flex-1 overflow-y-auto max-h-64 space-y-4'>
                  {post.caption && <Caption post={post} />}
                  {post.comments.map((comment) => (
                    <Comment key={comment.id} comment={comment} />
                  ))}
                </div>
                <hr className='my-4 border-gray-800' />
                <PostFooter isProfilePage={true} post={post} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProfilePost
