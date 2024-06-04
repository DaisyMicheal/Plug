import React from 'react'
import { BsFillImageFill, BsFillEmojiSmileFill } from 'react-icons/bs'
import { RiFileGifLine } from 'react-icons/ri'

const PostBox = () => {
  return (
    <div className='p-4 mb-4 bg-gray-800 rounded-lg'>
      <textarea
        placeholder='What’s happening?!'
        className='w-full p-2 mb-2 bg-transparent border-none text-white outline-none resize-none'
        rows='3'
      ></textarea>
      <div className='flex items-center space-x-4'>
        <BsFillImageFill className='text-gray-400 cursor-pointer' />
        <RiFileGifLine className='text-gray-400 cursor-pointer' />
        <BsFillEmojiSmileFill className='text-gray-400 cursor-pointer' />
      </div>
      <button className='px-4 py-2 mt-4 text-white bg-blue-600 rounded-full'>
        Post
      </button>
    </div>
  )
}

export default PostBox
