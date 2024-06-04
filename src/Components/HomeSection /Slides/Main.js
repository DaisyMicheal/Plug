import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faClock,
  faComment,
  faFire,
  faUser,
} from '@fortawesome/free-solid-svg-icons'

const Main = () => {
  const [slides, setSlides] = useState([
    {
      image:
        'https://i.pinimg.com/564x/ab/f8/9d/abf89d1a3261fd6855d4a88763c16a74.jpg',
      text: 'Becoming Immortal By Uploading Our Mind To a Mechine ',
      commentCount: 147,
    },
    {
      image:
        'https://htmldemo.zcubethemes.com/newpress/img/blog/travel/tr-7.jpg',
      text: 'Essential Fashion Trends You Need to Know.',
      commentCount: 250,
    },
    {
      image:
        'https://htmldemo.zcubethemes.com/newpress/img/blog/fashion/fs-6.jpg',
      text: 'The Ultimate Guide to Music Production.',
      commentCount: 80,
    },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      const newSlides = slides.map((slide) => ({
        ...slide,
        text: generateRandomText(),
        commentCount: Math.floor(Math.random() * 200),
      }))
      setSlides(newSlides)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides])

  const generateRandomText = () => {
    const textArray = [
      'Becoming Immortal By Uploading Our Mind To a Mechine',
      'Essential Fashion Trends You Need to Know.',
      'The Ultimate Guide to Music Production.',
    ]
    const randomIndex = Math.floor(Math.random() * textArray.length)
    return textArray[randomIndex]
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: '170px',
  }

  return (
    <section className='courses-area fix py-6'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-12 col-md-12'>
            <div className='slider-wrapper px-2 lg:px-0'>
              <Slider {...settings}>
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className='box-slider-post transition duration-150 ease-out hover:ease-in'
                  >
                    <div className='img-s relative'>
                      <img
                        src={slide.image}
                        alt={`courses-img${index + 1}`}
                        style={{
                          width: '100%',
                          maxWidth: '900px',
                          borderRadius: '30px',
                        }}
                      />

                      <div className='absolute  bottom-20 left-0 w-96 text-white pl-6'>
                        <div className='post-tags '>
                          <ul className=' flex justify-between  '>
                            <li className=' bg-green-700 text-black px-4 py-1 rounded-md  '>
                              <a href='#' className='c-btn'>
                                TRAVEL
                              </a>
                            </li>
                            <li className='pr-40'>
                              <a href='#'>
                                <span className='text-red-700 text-sm'>
                                  <FontAwesomeIcon icon={faFire} />
                                </span>{' '}
                                Trending
                              </a>
                            </li>
                          </ul>
                        </div>
                        <h3 className='py-2 font-bold text-4xl font-serif tracking-normal	'>
                          <a href='blog-details.html'>{slide.text}</a>
                        </h3>
                        <div className='post-tags px-1  '>
                          <ul className='flex justify-between '>
                            <li>
                              <a href='#'>
                                <span className='icon text-gray-600	text-sm		'>
                                  <FontAwesomeIcon icon={faUser} />
                                </span>{' '}
                                John Doe
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <span className='icon text-gray-600	 text-sm	'>
                                  <FontAwesomeIcon icon={faClock} />
                                </span>{' '}
                                12 March, 2021
                              </a>
                            </li>
                            <li>
                              <span className='icon text-gray-600	text-sm	'>
                                <FontAwesomeIcon icon={faComment} />
                              </span>{' '}
                              {slide.commentCount} Comments
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Main
