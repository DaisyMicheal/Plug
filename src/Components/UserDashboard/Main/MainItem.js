import React from 'react'
import Content from './Content'
import Trends from './Trends'
import SearchBar from './SearchBar'
import Subscribe from './Subscribe'

const MainItem = () => {
  return (
    <div className='flex flex-1'>
      <div className='flex-1 px-4'>
        <Content />
      </div>

      <div className='hidden lg:block w-1/3 pl-4'>
        <div className='py-8 pr-4'>
          <SearchBar />
        </div>
        <div className='pr-4'>
          <Subscribe />
        </div>

        <Trends />
      </div>
    </div>
  )
}

export default MainItem
