import React from 'react'
import Slider from 'react-slick'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function Trend() {
  const CustomNextArrow = ({ onClick }) => (
    <div className='custom-next-arrow py-6' onClick={onClick}>
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  )

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <CustomNextArrow />,
  }

  return (
    <div className='trending-slider'>
      <h1 className='trending-heading'>Trending News</h1>
      <Slider {...settings}>
        <div className='item'>
          <div className='trending-post py-6 pl-7'>
            <div className='single-post-wrap style-overlay'>
              <div className='thumb'>
                <img
                  src='https://solverwp.com/demo/react/nextpage/assets/img/post/5.png'
                  alt='img'
                />
              </div>
              <div className='details'>
                <div className='post-meta-single'>
                  <p>
                    <i className='fa fa-clock-o'></i>December 26, 2018
                  </p>
                </div>
                <h6 className='title'>
                  <a href='#/blog-details'>The FAA will test drone</a>
                </h6>
              </div>
            </div>
          </div>
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  )
}

export default Trend
