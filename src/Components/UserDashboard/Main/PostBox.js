import React from 'react'
import { BsFillImageFill, BsFillEmojiSmileFill } from 'react-icons/bs'
import { RiFileGifLine } from 'react-icons/ri'

const PostBox = ({ userProfile }) => {
  return (
    <div className='p-4 mb-4 bg-black border-2 border-gray-700 border-solid rounded-lg'>
      <div className='flex items-start space-x-4'>
        <img
          src={
            userProfile?.photoURL ||
            'https://i.pinimg.com/564x/01/e9/1f/01e91f455063cdd24bc9c9f753c467f3.jpg'
          }
          alt='Profile'
          className='w-12 h-12 rounded-full'
        />
        <textarea
          placeholder='What’s happening?!'
          className='w-full p-2 mb-2 bg-transparent border-none text-white outline-none resize-none'
          rows='3'
        ></textarea>
      </div>
      <div className='flex items-center space-x-4'>
        <BsFillImageFill className='text-gray-400 cursor-pointer' />
        <RiFileGifLine className='text-gray-400 cursor-pointer' />
        <BsFillEmojiSmileFill className='text-gray-400 cursor-pointer' />
      </div>
      <button className='px-4 py-2 mt-4 text-white bg-green-800 rounded-full'>
        Post
      </button>
    </div>
  )
}

export default PostBox
