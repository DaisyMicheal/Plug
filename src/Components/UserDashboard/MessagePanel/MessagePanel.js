import React from 'react'

const MessagePanel = () => {
  return (
    <div className='flex h-full bg-gray-900 text-white'>
      <div className='w-1/3 border-r border-gray-700'>
        <div className='p-4 border-b border-gray-700'>
          <h1 className='text-xl'>Messages</h1>
        </div>
      </div>
      <div className='w-2/3'>
        <div className='p-4 border-b border-gray-700 flex justify-between items-center'>
          <h1 className='text-xl'>Message Detail</h1>
        </div>
        <div className='flex-grow p-4 overflow-y-auto'>
          {/* Message content goes here */}
        </div>
        <div className='p-4 border-t border-gray-700 flex items-center'>
          <input
            type='text'
            placeholder='Start a new message'
            className='flex-grow p-2 rounded bg-gray-800 text-white outline-none'
          />
          <button className='ml-4 p-2 rounded-full bg-blue-600 hover:bg-blue-500'>
            <i className='fas fa-paper-plane'></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default MessagePanel
