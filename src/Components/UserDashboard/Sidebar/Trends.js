import React from 'react'
import { BsThreeDots } from 'react-icons/bs'

const trends = [
  { id: 1, topic: '#Tapswap', tweets: '20.2K posts' },
  { id: 2, topic: 'Big Brother', tweets: '19K posts' },
  { id: 3, topic: 'Opay', tweets: '48.2K posts' },
  { id: 4, topic: 'Unilag', tweets: '6,452 posts' },
  { id: 5, topic: 'Use VPN', tweets: '6,865 posts' },
  { id: 6, topic: 'Wizkid', tweets: '74.7K posts' },
]

const Trends = () => {
  return (
    <div className='w-1/3 p-4'>
      <div className='bg-gray-800 rounded-lg p-4'>
        <h2 className='text-xl font-bold mb-4'>Trends for you</h2>
        {trends.map((trend) => (
          <div
            key={trend.id}
            className='flex justify-between items-center mb-4'
          >
            <div>
              <div className='font-bold'>{trend.topic}</div>
              <div className='text-sm text-gray-400'>{trend.tweets}</div>
            </div>
            <BsThreeDots className='text-gray-400 cursor-pointer' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Trends
