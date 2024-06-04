import React, { useRef } from 'react'
import Slider from 'react-slick'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const FeatureNews = () => {
  const sliderRef = useRef()

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px', // Adjust as needed
  }

  const handlePrev = () => {
    sliderRef.current.slickPrev()
  }

  const handleNext = () => {
    sliderRef.current.slickNext()
  }

  return (
    <div className='container py-11'>
      <div className='slider-title flex items-center justify-between mb-4 '>
        <h2 className='text-4xl font-bold pl-6 text-green-800'>
          Trending News
        </h2>
        <div className='slider-controls pr-11'>
          <button onClick={handlePrev} className='focus:outline-none pr-6'>
            <FontAwesomeIcon
              icon={faChevronLeft}
              className='text-2xl text-gray-500   rounded-sm px-2 py-2 border-1 border-green-700 p-1 hover:bg-green-700  hover:text-white'
            />
          </button>
          <button onClick={handleNext} className='focus:outline-none'>
            <FontAwesomeIcon
              icon={faChevronRight}
              className='text-2xl text-gray-500   rounded-sm px-2 py-2 border-1 border-green-700 p-1 hover:bg-green-700  hover:text-white'
            />
          </button>
        </div>
      </div>
      <div className='slider-container'>
        <Slider {...settings} ref={sliderRef}>
          <div className='px-2 relative'>
            <img
              src='https://themewar.com/html/magro/images/home1/lifestyle/2.jpg'
              alt='Slide 1'
              className='w-full h-auto'
            />
            <div className='absolute bottom-0 left-0 w-full  text-white p-4'>
              <p className='text-sm font-medium text-lg'>
                Technology <span className='font-bold'>/</span>
                <span> March 27, 2020 </span>
              </p>

              <p className='text-sm font-semibold font-sans text-white bottom-0 text-xl'>
                Copa America: Luis Suarez From Devastated US
              </p>
            </div>
          </div>
          <div className='px-2 relative'>
            <img
              src='https://pbs.twimg.com/media/GOhMaDyWIAA2Jgw?format=jpg&name=small'
              alt='Slide 2'
              className='w-full h-auto'
            />
            <div className='absolute bottom-0 left-0 w-full  text-white p-4'>
              <p className='text-sm font-medium text-lg'>
                Technology <span className='font-bold'>/</span>
                <span> March 27, 2020 </span>
              </p>

              <p className='text-sm font-semibold font-sans text-white bottom-0 text-xl '>
                Kobbie Mainoo’s Best dribbling runs this season
              </p>
            </div>
          </div>
          <div className='px-2 relative'>
            <img
              src='https://i.pinimg.com/564x/b4/0d/45/b40d4552c001a3ad470ffb9fe2124663.jpg'
              alt='Slide 3'
              className='w-full h-auto'
            />
            <div className='absolute bottom-0 left-0 w-full  text-white p-4'>
              <p className='text-sm font-medium text-lg'>
                Technology <span className='font-bold'>/</span>
                <span> March 27, 2020 </span>
              </p>

              <p className='text-sm font-semibold font-sans text-white bottom-0 text-xl'>
                The Aesthetic Side of Tech: Designing for Tomorrow
              </p>
            </div>
          </div>
          <div className='px-2 relative'>
            <img
              src='https://i.pinimg.com/564x/83/22/9f/83229f8f8ea55f0d04e1b16577f231c7.jpg'
              alt='Slide 4'
              className='w-full h-auto'
            />
            <div className='absolute bottom-0 left-0 w-full  text-white p-4'>
              <p className='text-sm font-medium text-lg'>
                Technology <span className='font-bold'>/</span>
                <span> March 27, 2020 </span>
              </p>

              <p className='text-sm font-semibold font-sans text-white bottom-0 text-xl'>
                Five Reasons Why Virtual Reality Is A Game-Changer
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default FeatureNews
