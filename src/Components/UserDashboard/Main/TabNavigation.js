import React, { useState } from 'react'
import { FiSettings } from 'react-icons/fi'

const TabNavigation = ({ tabs, onSelect }) => {
  const [activeTab, setActiveTab] = useState(tabs[0])

  const handleTabClick = (tab) => {
    setActiveTab(tab)
    onSelect(tab)
  }

  return (
    <div className='flex justify-between items-center border-b border-gray-700 p-4'>
      <div className='flex space-x-4'>
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 ${
              activeTab === tab
                ? 'text-white border-b-2 border-blue-500'
                : 'text-gray-400'
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
     
        <button className='text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none '>
          <FiSettings size={24} />
        </button>
     
    </div>
  )
}

export default TabNavigation
