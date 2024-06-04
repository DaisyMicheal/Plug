import React, { useRef } from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
  faTicket,
} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedinIn,
  faPinterest,
} from '@fortawesome/free-brands-svg-icons'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const LatestNewsSlider = () => {
  const latestNewsRef = useRef()

  const latestNewsSettings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 2,
    slidesToScroll: 1,
  }

  const handlePrev = () => {
    latestNewsRef.current.slickPrev()
  }

  const handleNext = () => {
    latestNewsRef.current.slickNext()
  }

  return (
    <div className='trending-news-slider  flex-nowrap px-4 py-16 pl-28 w-7/12	'>
      <div className='slider-title flex items-center justify-between mb-4'>
        <h2 className='text-2xl font-bold pl-6 text-indigo-900'>Latest News</h2>
        <div className='slider-controls pr-96'>
          <button onClick={handlePrev} className='focus:outline-none pr-6'>
            <FontAwesomeIcon
              icon={faChevronLeft}
              className='text-2xl text-gray-600 border-2 border-gray-400 p-1 pr-96'
            />
          </button>
          <button onClick={handleNext} className='focus:outline-none'>
            <FontAwesomeIcon
              icon={faChevronRight}
              className='text-2xl text-gray-600 border-2 border-gray-400 p-1'
            />
          </button>
        </div>
      </div>
      <Slider {...latestNewsSettings} ref={latestNewsRef} className=' px-2'>
        <div className='mx-1'>
          <img
            src='https://newsprkv.quomodosoft.com/img/trending-news-2.aa5cc990.jpg'
            alt='slide 1'
            className='h-72	w-96  object-cover rounded-lg overflow-hidden transition ease-out duration-300 transform hover:scale-105 '
          />
          <p className='text-sm font-medium text-lg py-2'>
            Technology <span className='font-bold'>/</span>
            <span> March 27, 2020 </span>
          </p>

          <h2 className='text-sm font-semibold font-sans text-black text-xl'>
            Copa America: Luis Suarez From Devastated US
          </h2>
        </div>
        <div className='px-6 mx-1 '>
          <img
            src='https://newsprkv.quomodosoft.com/img/trending-news-1.dac8bd23.jpg'
            className='h-72	w-96	  object-cover   rounded-lg overflow-hidden transition ease-in-out duration-300 transform hover:scale-105'
          />
          <p className='text-sm font-medium text-lg py-2'>
            Technology <span className='font-bold'>/</span>
            <span> March 27, 2020 </span>
          </p>

          <h2 className='text-sm font-semibold font-sans text-black text-xl'>
            Copa America: Luis Suarez From Devastated US
          </h2>
        </div>
        <div className='px-6 mx-1 '>
          <img
            src='https://newsprkv.quomodosoft.com/img/trending-news-3.997b92a0.jpg'
            className='h-72 w-96 object-cover rounded-lg overflow-hidden transition ease-in-out duration-300 transform hover:scale-105'
          />
          <p className='text-sm font-medium text-lg py-2'>
            Technology <span className='font-bold'>/</span>
            <span> March 27, 2020 </span>
          </p>

          <h2 className='text-sm font-semibold font-sans text-black text-xl'>
            Copa America: Luis Suarez From Devastated US
          </h2>
        </div>
      </Slider>
    </div>
  )
}

const FollowUs = () => {
  return (
    <div className='follow-container w-11/12 	'>
      <div className=' '>
        <h2 className='text-3xl font-bold text-black pl-6 py-2'>
          Discover More on what matters to you
        </h2>

        <div className='content grid grid-cols-3 gap-3 h-16  py-6  '>
          <div className='rounded-full text-black text-center  py-2 bg-gray-100 capitalize'>
            <p>
              <Link to='/discover'>programming</Link>
            </p>
          </div>
          <div className='rounded-full text-black text-center  py-2 bg-gray-100 capitalize'>
            <p>
              <a href='#'>writing</a>
            </p>
          </div>
          <div className='rounded-full text-black text-center  py-2 bg-gray-100 capitalize'>
            <p>
              <a href='#'>data science </a>
            </p>
          </div>
          <div className='rounded-full text-black text-center  py-2 bg-gray-100 capitalize'>
            <p>
              <a href='#'>relationship</a>
            </p>
          </div>
          <div className='rounded-full text-black text-center  py-2 bg-gray-100 capitalize'>
            <p>
              <a href='#'>self improvement </a>
            </p>
          </div>
          <div className='rounded-full text-black text-center  py-2 bg-gray-100 capitalize'>
            <p>
              <a href='#'>mechine learning </a>
            </p>
          </div>
          <div className='rounded-full text-black text-center  py-2 bg-gray-100 capitalize'>
            <p>
              <a href='#'>Politice</a>
            </p>
          </div>
          <div className='rounded-full text-black text-center py-2 bg-gray-100 capitalize'>
            <p>
              <a href='#'>Productivity</a>
            </p>
          </div>
          <div className='rounded-full text-black text-center  py-2 bg-gray-100 capitalize'>
            <p>
              <a href='#'>Technology</a>
            </p>
          </div>
        </div>
      </div>
      {/* <div className=' capitalize  border-2 rounded-lg  bg-green-600 hover:bg-green-800 text-white hover:text-green-700  py-2 font-sm font-sans pl-6  '>
        <button> see more topics </button>
      </div> */}
    </div>
  )
}

const TrendingPage = () => {
  return (
    <div>
      <div className='flex justify-between'>
        <LatestNewsSlider />
        <div className='py-28'>
          <FollowUs />
        </div>
      </div>
    </div>
  )
}

export default TrendingPage
