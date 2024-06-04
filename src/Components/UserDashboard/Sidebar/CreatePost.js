import React, { useRef, useState } from 'react'
import { BsFillImageFill, BsFillEmojiSmileFill } from 'react-icons/bs'
import { AiOutlineClose, AiOutlineGlobal } from 'react-icons/ai'
import { RiFileGifLine } from 'react-icons/ri'
import { BiPoll } from 'react-icons/bi'
import { MdSchedule, MdLocationOn } from 'react-icons/md'
import Picker from '@emoji-mart/react'
import './emoji-mart.css'
import './giphy-picker.css'
import GifPicker from 'react-giphy-picker'
import usePreviewImg from '../../../hooks/usePreviewImg'
import useShowToast from '../../../hooks/useShowToast'
import useAuthStore from '../../../store /authStore'
import usePostStore from '../../../store /postStore'
import useUserProfileStore from '../../../store /userProfileStore'
import { useLocation } from 'react-router-dom'
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  updateDoc,
} from 'firebase/firestore'
import { firestore, storage } from '../../../firebase/firebase'
import { getDownloadURL, ref, uploadString } from 'firebase/storage'
import { FaPlus } from 'react-icons/fa'

const CreatePost = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [caption, setCaption] = useState('')
  const [selectedGif, setSelectedGif] = useState(null)
  const [showGifPicker, setShowGifPicker] = useState(false)
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)

  const imageRef = useRef(null)
  const { handleImageChange, selectedFile, setSelectedFile } = usePreviewImg()
  const showToast = useShowToast()
  const { isLoading, handleCreatePost } = useCreatePost()
  const authUser = useAuthStore((state) => state.user)
  const userProfile = useUserProfileStore((state) => state.userProfile)

  const handlePostCreation = async () => {
    try {
      await handleCreatePost(selectedFile, caption)
      setIsOpen(false)
      setCaption('')
      setSelectedFile(null)
    } catch (error) {
      showToast('Error', error.message, 'error')
    }
  }

  const addEmoji = (emoji) => {
    setCaption(caption + emoji.native)
    setShowEmojiPicker(false)
  }
  const handleGifSelect = (gif) => {
    setSelectedGif(gif)
    setShowGifPicker(false)
  }

  return (
    <>
      <div className='relative group flex items-center'>
        <div
          className='flex items-center gap-4 p-2 rounded-lg hover:bg-gray-700 w-10 md:w-full justify-center md:justify-start cursor-pointer'
          onClick={() => setIsOpen(true)}
        >
          <FaPlus />
          <span className='hidden md:block'>Create</span>
        </div>
      </div>

      {isOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-black border border-gray-700 max-w-xl w-full p-4 rounded-lg'>
            <div className='flex justify-between items-center mb-4'>
              <button
                onClick={() => setIsOpen(false)}
                className='text-gray-400 hover:text-gray-200 text-2xl'
              >
                <AiOutlineClose />
              </button>
            </div>
            <div className='flex items-start gap-4 mb-4'>
              <img
                src={
                  userProfile?.photoURL ||
                  'https://i.pinimg.com/564x/01/e9/1f/01e91f455063cdd24bc9c9f753c467f3.jpg'
                }
                alt='Profile'
                className='w-12 h-12 rounded-full'
              />
              <textarea
                placeholder='What’s happening?'
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                className='w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
                style={{ fontWeight: 'normal' }}
              ></textarea>
            </div>
            <div className='mb-4 flex items-center text-gray-400 text-sm'>
              <AiOutlineGlobal className='mr-1' />
              <span>Everyone can reply</span>
            </div>
            <div className='mb-4'>
              <input
                type='file'
                hidden
                ref={imageRef}
                onChange={handleImageChange}
              />
              <div className='flex items-center gap-4'>
                <BsFillImageFill
                  onClick={() => imageRef.current.click()}
                  className='cursor-pointer text-gray-400 hover:text-gray-200'
                  size={20}
                />
                <BsFillEmojiSmileFill
                  className='cursor-pointer text-gray-400 hover:text-gray-200'
                  size={20}
                  onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                />
                <RiFileGifLine
                  className='cursor-pointer text-black-400 hover:text-gray-200'
                  size={20}
                  onClick={() => setShowGifPicker(!showGifPicker)}
                />
                <BiPoll
                  className='cursor-pointer text-gray-400 hover:text-gray-200'
                  size={20}
                />
                <MdSchedule
                  className='cursor-pointer text-gray-400 hover:text-gray-200'
                  size={20}
                />
                <MdLocationOn
                  className='cursor-pointer text-gray-400 hover:text-gray-200'
                  size={20}
                />
              </div>
              {showEmojiPicker && (
                <div className='absolute mt-2'>
                  <Picker onEmojiSelect={addEmoji} />
                </div>
              )}
              {showGifPicker && (
                <div className='absolute mt-2'>
                  <GifPicker onSelected={handleGifSelect} />
                </div>
              )}
            </div>
            {selectedFile && (
              <div className='relative mt-4 flex justify-center'>
                <img src={selectedFile} alt='Selected' className='rounded-lg' />
                <button
                  onClick={() => setSelectedFile(null)}
                  className='absolute top-2 right-2 text-gray-400 hover:text-gray-200'
                >
                  &times;
                </button>
              </div>
            )}
            <div className='flex justify-end mt-4'>
              <button
                onClick={handlePostCreation}
                className={`py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                  isLoading && 'opacity-50 cursor-not-allowed'
                }`}
                disabled={isLoading}
              >
                {isLoading ? 'Posting...' : 'Post'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CreatePost

function useCreatePost() {
  const showToast = useShowToast()
  const [isLoading, setIsLoading] = useState(false)
  const authUser = useAuthStore((state) => state.user)
  const createPost = usePostStore((state) => state.createPost)
  const addPost = useUserProfileStore((state) => state.addPost)
  const userProfile = useUserProfileStore((state) => state.userProfile)
  const { pathname } = useLocation()

  const handleCreatePost = async (selectedFile, caption) => {
    if (isLoading) return
    if (!selectedFile) throw new Error('Please select an image')
    setIsLoading(true)
    const newPost = {
      caption: caption,
      likes: [],
      comments: [],
      createdAt: Date.now(),
      createdBy: authUser.uid,
    }

    try {
      const postDocRef = await addDoc(collection(firestore, 'posts'), newPost)
      const userDocRef = doc(firestore, 'users', authUser.uid)
      const imageRef = ref(storage, `posts/${postDocRef.id}`)

      await updateDoc(userDocRef, { posts: arrayUnion(postDocRef.id) })
      await uploadString(imageRef, selectedFile, 'data_url')
      const downloadURL = await getDownloadURL(imageRef)

      await updateDoc(postDocRef, { imageURL: downloadURL })

      newPost.imageURL = downloadURL

      if (userProfile.uid === authUser.uid)
        createPost({ ...newPost, id: postDocRef.id })

      if (pathname !== '/' && userProfile.uid === authUser.uid)
        addPost({ ...newPost, id: postDocRef.id })

      showToast('Success', 'Post created successfully', 'success')
    } catch (error) {
      showToast('Error', error.message, 'error')
    } finally {
      setIsLoading(false)
    }
  }

  return { isLoading, handleCreatePost }
}
