import React, { useState } from 'react'
import Messages from '../Sidebar/Message'
import MessagePanel from './MessagePanel'

function MessageApp() {
  const [activePanel, setActivePanel] = useState('')

  const handlePanelToggle = (panel) => {
    setActivePanel((prevPanel) => (prevPanel === panel ? '' : panel))
  }

  return (
    <div className='flex h-screen'>
      <div className='w-1/4 bg-gray-800 text-white flex flex-col'>
        <div className='p-4 border-b border-gray-700 flex justify-between items-center'>
          <h1 className='text-xl'>MyApp</h1>
        </div>
        <div className='flex flex-col'>
          <Messages togglePanel={() => handlePanelToggle('messages')} />
        </div>
      </div>

      <div className='w-3/4 bg-gray-900 text-white flex flex-col'>
        <div className='p-4 border-b border-gray-700 flex justify-between items-center'>
          <h1 className='text-xl'>Main Content</h1>
        </div>
        <div className='flex-grow p-4 overflow-y-auto'>
          {activePanel === 'messages' && <MessagePanel />}
        </div>
      </div>
    </div>
  )
}

export default MessageApp
