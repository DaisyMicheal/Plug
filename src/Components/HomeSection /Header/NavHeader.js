import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCloudSun,
  faCalendarAlt,
  faFire,
  faUser,
  faSearch,
} from '@fortawesome/free-solid-svg-icons'

import 'bootstrap/dist/css/bootstrap.min.css'
import Logo from './icon.png'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

export default function Header() {
  const [trendingIndex, setTrendingIndex] = useState(0)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isDropdown1Open, setIsDropdown1Open] = useState(false)
  const [isDropdown2Open, setIsDropdown2Open] = useState(false)
  const [dropdownTimeout, setDropdownTimeout] = useState(null)
  const [temperature, setTemperature] = useState(190)

  const trendingTexts = [
    'How Will AI Change the World in 2024?',
    'Join the Community to Connect With Individuals Around the Word',
    'See Whats Happeninig  Around ',
  ]

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTrendingIndex((prevIndex) =>
        prevIndex === trendingTexts.length - 1 ? 0 : prevIndex + 1
      )
    }, 3000)

    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    const tempInterval = setInterval(() => {
      setTemperature((prevTemp) => prevTemp + Math.floor(Math.random() * 5 - 2))
    }, 1000)

    return () => clearInterval(tempInterval)
  }, [])

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen)
  }

  const handleDropdown1Enter = () => {
    clearTimeout(dropdownTimeout)
    setIsDropdown1Open(true)
  }

  const handleDropdown1Leave = () => {
    const timeout = setTimeout(() => {
      setIsDropdown1Open(false)
    }, 200)
    setDropdownTimeout(timeout)
  }

  const handleDropdown2Enter = () => {
    clearTimeout(dropdownTimeout)
    setIsDropdown2Open(true)
  }

  const handleDropdown2Leave = () => {
    const timeout = setTimeout(() => {
      setIsDropdown2Open(false)
    }, 200)
    setDropdownTimeout(timeout)
  }

  return (
    <>
      <header className='header-area header-area2 bg-green-800	text-white font-md font-sans'>
        <div className='header-top second-header hidden lg:block py-3'>
          <div className='container'>
            <div className='row items-center'>
              <div className='col-lg-6 col-md-6 hidden md:block'>
                <div className='header-cta'>
                  <div className='row'>
                    <div className='col-lg-3'>
                      <a
                        href='#'
                        className='h-btn  bg-green-700  px-3  py-2 rounded-md text-white '
                      >
                        <span className='icon '>
                          <FontAwesomeIcon icon={faFire} />
                        </span>
                        Trending
                      </a>
                    </div>
                    <div className='col-lg-9'>
                      <div className='trending-slider-active'>
                        <span>{trendingTexts[trendingIndex]}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-3 hidden lg:block text-right text-white'>
                <FontAwesomeIcon icon={faCloudSun} /> {temperature} C Nigeria
              </div>
              <div className='col-lg-3 col-md-3 hidden lg:block flex justify-between '>
                <a
                  href='#'
                  className='top-btn bg-green-700  px-3  py-3 rounded-md text-white	'
                >
                  <FontAwesomeIcon icon={faCalendarAlt} /> Monday, 07 March,
                  2021
                </a>
                <button className='mr-6 mx-2  border rounded-full w-7 h-7 bg-gray-300 hover:text-white  text-green-700 hover:bg-green-700'>
                  <FontAwesomeIcon icon={faFacebook} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <NavHeader
        onSearchClick={handleSearchClick}
        isSearchOpen={isSearchOpen}
        isDropdown1Open={isDropdown1Open}
        isDropdown2Open={isDropdown2Open}
        handleDropdown1Enter={handleDropdown1Enter}
        handleDropdown1Leave={handleDropdown1Leave}
        handleDropdown2Enter={handleDropdown2Enter}
        handleDropdown2Leave={handleDropdown2Leave}
      />
    </>
  )
}

const NavHeader = ({
  onSearchClick,
  isSearchOpen,
  isDropdown1Open,
  isDropdown2Open,
  handleDropdown1Enter,
  handleDropdown1Leave,
  handleDropdown2Enter,
  handleDropdown2Leave,
}) => {
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = () => {
    const scrollTop = window.pageYOffset
    setIsScrolled(scrollTop > 100)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`bg-white py-2 ${
        isScrolled ? 'fixed top-0 left-0 right-0 z-50' : ''
      }`}
    >
      <nav className='container mx-auto flex justify-between items-center bg-white h-20 '>
        <div className='logo-containermx-auto flex justify-center items-center justify-between'>
          <img src={Logo} alt='Logo' className='h-14 text-green-700' />
        </div>

        <ul className='flex items-center list-disc text-green-700  hover:text-red-600 mx-36 	 '>
          <li className='ml-10 text-lg	font-medium	font-sans  '>
            <a
              href='UserDashborad/Navbar.js'
              className='text-black relative capitalize  '
            >
              our story
            </a>
          </li>
          <li className='ml-10 text-lg	font-medium	font-sans'>
            <a
              href='#'
              className='text-black relative capitalize'
              onMouseEnter={handleDropdown1Enter}
              onMouseLeave={handleDropdown1Leave}
            >
              Trending
              {isDropdown1Open && (
                <div className='absolute top-full left-0 bg-white shadow-md p-2 mt-1 z-50'>
                  <a href='#' className='block px-4 py-2 text-gray-800 '>
                    memebership
                  </a>
                  <a
                    href='#'
                    className='block px-4 py-2 text-gray-800 hover:bg-gray-200'
                  >
                    Tech
                  </a>
                  <div className='border-t border-gray-200'></div>
                  <a
                    href='#'
                    className='block px-4 py-2 text-gray-800 hover:bg-gray-200'
                  >
                    Fashion
                  </a>
                </div>
              )}
            </a>
          </li>
          <li className='ml-10 text-lg	font-medium	font-sans'>
            <a href='#' className='text-black relative capitalize'>
              lifeStyle
            </a>
          </li>
          <li className='ml-10 text-lg	font-medium	font-sans'>
            <a href='#' className='text-black relative capitalize'>
              Post
            </a>
          </li>

          <li className='ml-10 text-lg	font-medium	font-sans'>
            <a
              href='#'
              className='text-black relative capitalize'
              onMouseEnter={handleDropdown2Enter}
              onMouseLeave={handleDropdown2Leave}
            >
              news
              {isDropdown2Open && (
                <div className='absolute top-full left-0 bg-white shadow-md p-2 mt-1 z-50'>
                  <a
                    href='#'
                    className='block px-4 py-2 text-gray-800 hover:bg-gray-200'
                  >
                    Action
                  </a>
                  <a
                    href='#'
                    className='block px-4 py-2 text-gray-800 hover:bg-gray-200'
                  >
                    Another action
                  </a>
                  <div className='border-t border-gray-200'></div>
                  <a
                    href='#'
                    className='block px-4 py-2 text-gray-800 hover:bg-gray-200'
                  >
                    Something else here
                  </a>
                </div>
              )}
            </a>
          </li>
        </ul>
        <div className='ml-16 px-6 '>
          <Link to='/auth'>
            <button className='mr-6 border rounded-full w-10 h-10 bg-gray-300 hover:text-white  text-green-700 hover:bg-green-700'>
              <FontAwesomeIcon icon={faUser} />
            </button>
          </Link>

          <button
            className=' border rounded-full w-10 h-10 bg-gray-300 hover:text-white hover:bg-green-700 text-green-700
'
          >
            <FontAwesomeIcon icon={faSearch} onClick={onSearchClick} />
          </button>
          {isSearchOpen && (
            <input
              type='text'
              placeholder='Search...'
              className='ml-2 px-6 py-2 w-80 shadow-xl rounded-md focus:outline-none border border-gray-200 bg-white text-black"
 '
            />
          )}
        </div>
      </nav>
    </header>
  )
}
