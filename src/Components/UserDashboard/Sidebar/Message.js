import React from 'react'
import { MessageLogo } from '../../../Assests/constants'
import MessageItem from '../MessagePanel/MessageItem'

const Messages = ({ togglePanel }) => {
  return (
    <div className='relative group flex items-center' onClick={togglePanel}>
      <div className='flex items-center gap-4 p-2 rounded-lg hover:bg-gray-700 w-10 md:w-full justify-center md:justify-start cursor-pointer'>
        <MessageLogo />
        <span className='hidden md:block'>Messages</span>
      </div>
      <MessageItem />
    </div>
  )
}

export default Messages
