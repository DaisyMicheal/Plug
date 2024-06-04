import React from 'react'

const suggestions = [
  {
    id: 1,
    name: '信用社',
    handle: '@xinyongshe',
    avatar:
      'https://i.pinimg.com/236x/85/ba/9d/85ba9d746b844b4fbd89bb11ad3c7c25.jpg',
  },
  {
    id: 2,
    name: 'Mild Mannered ✿',
    handle: '@MildMannered99',
    avatar:
      'https://i.pinimg.com/736x/01/e2/96/01e29674ca2315b34630462976c319b5.jpg',
  },
  {
    id: 3,
    name: 'DIGITAL PRINCESS 👑',
    handle: '@PrincessJayanna',
    avatar:
      'https://i.pinimg.com/236x/59/6c/15/596c1546d75abd6d1ca672f0ec33284c.jpg',
  },
]

const SuggestedFollower = () => {
  return (
    <div className='p-4 bg-black border-2 border-gray-700 border-solid  rounded-lg mt-4'>
      <h2 className='font-bold text-white mb-4'>Who to follow</h2>
      {suggestions.map((suggestion, index) => (
        <div key={index} className='flex items-center justify-between mb-4'>
          <div className='flex items-center'>
            <img
              src={suggestion.avatar}
              alt={suggestion.name}
              className='w-10 h-10 rounded-full'
            />
            <div className='ml-2'>
              <div className='text-white font-bold'>{suggestion.name}</div>
              <div className='text-gray-400'>{suggestion.handle}</div>
            </div>
          </div>
          <button className='bg-blue-500 text-white py-1 px-3 rounded-full'>
            Follow
          </button>
        </div>
      ))}
      <button className='text-blue-400'>Show more</button>
    </div>
  )
}

export default SuggestedFollower
