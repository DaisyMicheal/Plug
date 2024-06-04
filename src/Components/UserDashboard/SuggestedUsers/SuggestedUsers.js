import React from 'react'
import { Link } from 'react-router-dom'
import SuggestedHeader from './SuggestedHeader'
import SuggestedUser from './SuggestedUser'
import useGetSuggestedUsers from '../../../hooks/useGetSuggestedUsers'

const SuggestedUsers = () => {
  const { isLoading, suggestedUsers } = useGetSuggestedUsers()

  if (isLoading) return null

  return (
    <div className='flex flex-col py-8 px-6 gap-4'>
      <SuggestedHeader />

      {suggestedUsers.length !== 0 && (
        <div className='flex items-center justify-between w-full'>
          <span className='text-xs font-bold text-gray-500'>
            Suggested for you
          </span>
          <span className='text-xs font-bold cursor-pointer hover:text-gray-400'>
            See All
          </span>
        </div>
      )}

      {suggestedUsers.map((user) => (
        <SuggestedUser user={user} key={user.id} />
      ))}

      <div className='text-xs text-gray-500 mt-5 self-start'>
        © 2023 Built By{' '}
        <a
          href='https://www.youtube.com/@asaprogrammer_'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-500 text-sm'
        >
          Unknown Users
        </a>
      </div>
    </div>
  )
}

export default SuggestedUsers
