import React from 'react'
import { FiSearch } from 'react-icons/fi'

const SearchBar = () => {
  return (
    <div className='flex items-center bg-gray-800 p-2 rounded-xl mb-4'>
      <FiSearch className='text-gray-400' />
      <input
        type='text'
        placeholder='Search'
        className='bg-transparent text-white focus:outline-none ml-2 w-full'
      />
    </div>
  )
}

export default SearchBar
