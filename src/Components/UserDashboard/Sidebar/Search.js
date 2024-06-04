import React, { useState, useRef } from 'react'
import { FaSearch } from 'react-icons/fa'
import useSearchUser from '../../../hooks/useSearchUser'
import SuggestedUser from '../SuggestedUsers/SuggestedUser'

const Search = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [recentSearches, setRecentSearches] = useState([])
  const searchRef = useRef(null)
  const { user, isLoading, getUserProfile, setUser, error } = useSearchUser()

  const handleSearchUser = async (e) => {
    e.preventDefault()
    const searchValue = searchRef.current.value
    if (searchValue) {
      await getUserProfile(searchValue)
      setRecentSearches([...recentSearches, searchValue])
    }
  }

  const clearRecentSearches = () => {
    setRecentSearches([])
  }

  return (
    <div className='relative'>
      <div
        className='flex items-center gap-4 p-2 rounded-lg hover:bg-gray-700 w-10 md:w-full justify-center md:justify-start cursor-pointer'
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaSearch />
        <span className='hidden md:block'>Search</span>
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
        }`}
      >
        <div className='relative bg-black border border-gray-700 max-w-sm w-full p-4 rounded-lg m-auto mt-12'>
          <div className='flex justify-between items-center mb-2'>
            <h3 className='text-lg font-medium text-white'>Search</h3>
            <button
              onClick={() => setIsOpen(false)}
              className='text-gray-400 hover:text-gray-200'
            >
              &times;
            </button>
          </div>
          <form onSubmit={handleSearchUser}>
            <div className='mb-4'>
              <input
                type='text'
                placeholder='Search'
                ref={searchRef}
                className='block w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
              />
            </div>
            <div className='flex justify-end'>
              <button
                type='submit'
                className='py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                disabled={isLoading}
              >
                {isLoading ? 'Searching...' : 'Search'}
              </button>
            </div>
          </form>
          <div className='mt-4'>
            <div className='flex justify-between items-center'>
              <span className='text-white text-sm'>Recent</span>
              <button
                onClick={clearRecentSearches}
                className='text-gray-400 hover:text-gray-200 text-sm'
              >
                Clear all
              </button>
            </div>
            <ul className='mt-2'>
              {recentSearches.map((search, index) => (
                <li
                  key={index}
                  className='flex justify-between items-center text-white text-sm py-1'
                >
                  <span>{search}</span>
                  <button
                    onClick={() =>
                      setRecentSearches(
                        recentSearches.filter((s, i) => i !== index)
                      )
                    }
                    className='text-gray-400 hover:text-gray-200'
                  >
                    &times;
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {user ? (
            <SuggestedUser user={user} />
          ) : error ? (
            <div className='mt-4 text-center text-red-500'>User not found</div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Search
