import React, { useState } from 'react'
import { NotificationsLogo } from '../../../Assests/constants'
import NotificationsPanel from '../Notification /Notifications'

const Notifications = () => {
  const [isPanelVisible, setPanelVisible] = useState(false)

  const togglePanel = () => {
    setPanelVisible(!isPanelVisible)
  }

  const closePanel = () => {
    setPanelVisible(false)
  }

  return (
    <div className='relative group flex items-center'>
      <div
        className='flex items-center gap-4 p-2 rounded-lg hover:bg-gray-700 w-10 md:w-full justify-center md:justify-start cursor-pointer'
        onClick={togglePanel}
      >
        <NotificationsLogo />
        <span className='hidden md:block'>Notifications</span>
      </div>
      <NotificationsPanel isVisible={isPanelVisible} onClose={closePanel} />
    </div>
  )
}

export default Notifications
