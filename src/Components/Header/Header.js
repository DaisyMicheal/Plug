import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLongArrowAltDown,
  faSearch,
  faSignInAlt,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons'

import logo from './logo.svg'

function Header() {
  return (
    <header className='bg-slate-700 shadow-md py-2'>
      <nav className='container mx-auto flex justify-between items-center bg-slate-700'>
        <div className='logo-container'>
          <img
            src={logo}
            alt='Logo'
            className='h-20'
            style={{ opacity: 0.8 }}
          />
        </div>
        <div className='search-bar flex items-center relative'>
          <input
            type='text'
            placeholder='Search...'
            className='px-20 py-1 rounded-md mr-2 focus:outline-none border border-gray-300 bg-slate-800 text-white'
          />
          <FontAwesomeIcon
            icon={faSearch}
            className='text-white text-lg cursor-pointer absolute right-0 mr-3'
          />
        </div>
        <ul className='flex items-center'>
          <li className='mr-10'>
            <a href='#' className='text-white relative'>
              Community
              <div className='absolute bottom-0 w-full h-0.5 bg-transparent hover:bg-blue-500 transition-all duration-300'></div>
            </a>
          </li>
          <li className='mr-10'>
            <a href='#' className='text-white relative'>
              Members
              <div className='absolute bottom-0 w-full h-0.5 bg-transparent hover:bg-blue-500 transition-all duration-300'></div>
            </a>
          </li>
          <li className='mr-10'>
            <a href='#' className='text-white relative'>
              Blog
              <div className='absolute bottom-0 w-full h-0.5 bg-transparent hover:bg-blue-500 transition-all duration-300'></div>
            </a>
          </li>
          <li>
            <button className='bg-transparent hover:bg-blue-500 text-white hover:text-white py-1 px-3 rounded-full focus:outline-none border-solid border-2 border-blue'>
              Get Started
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
