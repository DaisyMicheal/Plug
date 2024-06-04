import { useRef } from 'react'
import Slider from 'react-slick'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
  faArrowRight,
  faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons'

const MostViewedSlider = () => {
  const firstSliderRef = useRef()
  const sencondSliderRef = useRef()
  const thirdSliderRef = useRef()
  const forthSliderRef = useRef()
  const fiveSliderRef = useRef()
  const sixSliderRef = useRef()
  const sevenSliderRef = useRef()

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const handlePrev = () => {
    firstSliderRef.current.slickPrev()
    sencondSliderRef.current.slickPrev()
    thirdSliderRef.current.slickPrev()
    forthSliderRef.current.slickPrev()
    fiveSliderRef.current.slickPrev()
    sixSliderRef.current.slickPrev()
    sevenSliderRef.current.slickPrev()
  }

  const handleNext = () => {
    firstSliderRef.current.slickNext()
    sencondSliderRef.current.slickNext()
    thirdSliderRef.current.slickNext()
    forthSliderRef.current.slickNext()
    fiveSliderRef.current.slickNext()
    sixSliderRef.current.slickNext()
    sevenSliderRef.current.slickNext()
  }

  return (
    <div className='most-viewed py-6'>
      <div className='slider-title flex items-center justify-between mb-4 '>
        <h2 className='text-2xl font-bold pl-6 text-indigo-900'>Most Viewed</h2>
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
        <Slider {...sliderSettings} ref={firstSliderRef} className='w-80 '>
          <div className='flex items-center justify-end'>
            <div className='flex items-center'>
              <img
                src='https://newsprkv.quomodosoft.com/img/most-1.28f231a1.jpg'
                alt='main slide 1'
                className='mr-4'
              />
              <div className='text-right  '>
                <p className='text-sm font-medium text-sm text-sky-500	font-bold '>
                  Technology{' '}
                  <span className='font-bold text-black pl-6'>/</span>
                  <span className='pl-2 text-gray-500'> March 27, 2020 </span>
                </p>
                <h2 className='text-sm font-sans font-bold text-black  text-justify	py-2'>
                  Copa America: Luis Suarez From Devastated US
                </h2>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-end'>
            <div className='flex items-center'>
              <img
                src='https://newsprkv.quomodosoft.com/img/most-1.28f231a1.jpg'
                alt='main slide 1'
                className='mr-4'
              />
              <div className='text-right  '>
                <p className='text-sm font-medium text-sm text-sky-500	font-bold '>
                  Technology{' '}
                  <span className='font-bold text-black pl-6'>/</span>
                  <span className='pl-2 text-gray-500'> March 27, 2020 </span>
                </p>
                <h2 className='text-sm font-sans font-bold text-black  text-justify	py-2'>
                  Copa America: Luis Suarez From Devastated US
                </h2>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-end'>
            <div className='flex items-center'>
              <img
                src='https://newsprkv.quomodosoft.com/img/most-1.28f231a1.jpg'
                alt='main slide 1'
                className='mr-4'
              />
              <div className='text-right  '>
                <p className='text-sm font-medium text-sm text-sky-500	font-bold '>
                  Technology{' '}
                  <span className='font-bold text-black pl-6'>/</span>
                  <span className='pl-2 text-gray-500'> March 27, 2020 </span>
                </p>
                <h2 className='text-sm font-sans font-bold text-black  text-justify	py-2'>
                  Copa America: Luis Suarez From Devastated US
                </h2>
              </div>
            </div>
          </div>
        </Slider>

        <div class='border-b border-dashed border-black-300 h-0 py-2 w-96	'></div>
      </div>
      {/* Additional Slider */}
      <div className='additional-slider-container py-6 '>
        <Slider {...sliderSettings} ref={sencondSliderRef} className='w-80'>
          <div className='flex items-center justify-end'>
            <div className='flex items-center'>
              <img
                src='https://newsprkv.quomodosoft.com/img/most-1.28f231a1.jpg'
                alt='main slide 1'
                className='mr-4'
              />
              <div className='text-right  '>
                <p className='text-sm font-medium text-sm text-sky-500	font-bold '>
                  Technology{' '}
                  <span className='font-bold text-black pl-6'>/</span>
                  <span className='pl-2 text-gray-500'> March 27, 2020 </span>
                </p>
                <h2 className='text-sm font-sans font-bold text-black  text-justify	py-2'>
                  Copa America: Luis Suarez From Devastated US
                </h2>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-end'>
            <div className='flex items-center'>
              <img
                src='https://newsprkv.quomodosoft.com/img/most-1.28f231a1.jpg'
                alt='main slide 1'
                className='mr-4'
              />
              <div className='text-right  '>
                <p className='text-sm font-medium text-sm text-sky-500	font-bold '>
                  Technology{' '}
                  <span className='font-bold text-black pl-6'>/</span>
                  <span className='pl-2 text-gray-500'> March 27, 2020 </span>
                </p>
                <h2 className='text-sm font-sans font-bold text-black  text-justify	py-2'>
                  Copa America: Luis Suarez From Devastated US
                </h2>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-end'>
            <div className='flex items-center'>
              <img
                src='https://newsprkv.quomodosoft.com/img/most-1.28f231a1.jpg'
                alt='main slide 1'
                className='mr-4'
              />
              <div className='text-right  '>
                <p className='text-sm font-medium text-sm text-sky-500	font-bold '>
                  Technology{' '}
                  <span className='font-bold text-black pl-6'>/</span>
                  <span className='pl-2 text-gray-500'> March 27, 2020 </span>
                </p>
                <h2 className='text-sm font-sans font-bold text-black  text-justify	py-2'>
                  Copa America: Luis Suarez From Devastated US
                </h2>
              </div>
            </div>
          </div>
        </Slider>
        <div class='border-b border-dashed border-black-300 h-0 py-2 w-96	'></div>
      </div>

      <div className='additional-slider-container '>
        <Slider {...sliderSettings} ref={thirdSliderRef} className='w-80'>
          <div className='flex items-center justify-end'>
            <div className='flex items-center'>
              <img
                src='https://newsprkv.quomodosoft.com/img/most-1.28f231a1.jpg'
                alt='main slide 1'
                className='mr-4'
              />
              <div className='text-right  '>
                <p className='text-sm font-medium text-sm text-sky-500	font-bold '>
                  Technology{' '}
                  <span className='font-bold text-black pl-6'>/</span>
                  <span className='pl-2 text-gray-500'> March 27, 2020 </span>
                </p>
                <h2 className='text-sm font-sans font-bold text-black  text-justify	py-2'>
                  Copa America: Luis Suarez From Devastated US
                </h2>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-end'>
            <div className='flex items-center'>
              <img
                src='https://newsprkv.quomodosoft.com/img/most-1.28f231a1.jpg'
                alt='main slide 1'
                className='mr-4'
              />
              <div className='text-right  '>
                <p className='text-sm font-medium text-sm text-sky-500	font-bold '>
                  Technology{' '}
                  <span className='font-bold text-black pl-6'>/</span>
                  <span className='pl-2 text-gray-500'> March 27, 2020 </span>
                </p>
                <h2 className='text-sm font-sans font-bold text-black  text-justify	py-2'>
                  Copa America: Luis Suarez From Devastated US
                </h2>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-end'>
            <div className='flex items-center'>
              <img
                src='https://newsprkv.quomodosoft.com/img/most-1.28f231a1.jpg'
                alt='main slide 1'
                className='mr-4'
              />
              <div className='text-right  '>
                <p className='text-sm font-medium text-sm text-sky-500	font-bold '>
                  Technology{' '}
                  <span className='font-bold text-black pl-6'>/</span>
                  <span className='pl-2 text-gray-500'> March 27, 2020 </span>
                </p>
                <h2 className='text-sm font-sans font-bold text-black  text-justify	py-2'>
                  Copa America: Luis Suarez From Devastated US
                </h2>
              </div>
            </div>
          </div>
        </Slider>
        <div class='border-b border-dashed border-black-300 h-0 py-2 w-96	'></div>
      </div>

      <div className='additional-slider-container py-6 '>
        <Slider {...sliderSettings} ref={forthSliderRef} className='w-80'>
          <div className='flex items-center justify-end'>
            <div className='flex items-center'>
              <img
                src='https://newsprkv.quomodosoft.com/img/most-1.28f231a1.jpg'
                alt='main slide 1'
                className='mr-4'
              />
              <div className='text-right  '>
                <p className='text-sm font-medium text-sm text-sky-500	font-bold '>
                  Technology{' '}
                  <span className='font-bold text-black pl-6'>/</span>
                  <span className='pl-2 text-gray-500'> March 27, 2020 </span>
                </p>
                <h2 className='text-sm font-sans font-bold text-black  text-justify	py-2'>
                  Copa America: Luis Suarez From Devastated US
                </h2>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-end'>
            <div className='flex items-center'>
              <img
                src='https://newsprkv.quomodosoft.com/img/most-1.28f231a1.jpg'
                alt='main slide 1'
                className='mr-4'
              />
              <div className='text-right  '>
                <p className='text-sm font-medium text-sm text-sky-500	font-bold '>
                  Technology{' '}
                  <span className='font-bold text-black pl-6'>/</span>
                  <span className='pl-2 text-gray-500'> March 27, 2020 </span>
                </p>
                <h2 className='text-sm font-sans font-bold text-black  text-justify	py-2'>
                  Copa America: Luis Suarez From Devastated US
                </h2>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-end'>
            <div className='flex items-center'>
              <img
                src='https://newsprkv.quomodosoft.com/img/most-1.28f231a1.jpg'
                alt='main slide 1'
                className='mr-4'
              />
              <div className='text-right  '>
                <p className='text-sm font-medium text-sm text-sky-500	font-bold '>
                  Technology{' '}
                  <span className='font-bold text-black pl-6'>/</span>
                  <span className='pl-2 text-gray-500'> March 27, 2020 </span>
                </p>
                <h2 className='text-sm font-sans font-bold text-black  text-justify	py-2'>
                  Copa America: Luis Suarez From Devastated US
                </h2>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <div className='additional-slider-container py-6 '>
        <Slider {...sliderSettings} ref={fiveSliderRef} className='w-80'>
          <div className='flex items-center justify-end'>
            <div className='flex items-center'>
              <img
                src='https://newsprkv.quomodosoft.com/img/most-1.28f231a1.jpg'
                alt='main slide 1'
                className='mr-4'
              />
              <div className='text-right  '>
                <p className='text-sm font-medium text-sm text-sky-500	font-bold '>
                  Technology{' '}
                  <span className='font-bold text-black pl-6'>/</span>
                  <span className='pl-2 text-gray-500'> March 27, 2020 </span>
                </p>
                <h2 className='text-sm font-sans font-bold text-black  text-justify	py-2'>
                  Copa America: Luis Suarez From Devastated US
                </h2>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-end'>
            <div className='flex items-center'>
              <img
                src='https://newsprkv.quomodosoft.com/img/most-1.28f231a1.jpg'
                alt='main slide 1'
                className='mr-4'
              />
              <div className='text-right  '>
                <p className='text-sm font-medium text-sm text-sky-500	font-bold '>
                  Technology{' '}
                  <span className='font-bold text-black pl-6'>/</span>
                  <span className='pl-2 text-gray-500'> March 27, 2020 </span>
                </p>
                <h2 className='text-sm font-sans font-bold text-black  text-justify	py-2'>
                  Copa America: Luis Suarez From Devastated US
                </h2>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-end'>
            <div className='flex items-center'>
              <img
                src='https://newsprkv.quomodosoft.com/img/most-1.28f231a1.jpg'
                alt='main slide 1'
                className='mr-4'
              />
              <div className='text-right  '>
                <p className='text-sm font-medium text-sm text-sky-500	font-bold '>
                  Technology{' '}
                  <span className='font-bold text-black pl-6'>/</span>
                  <span className='pl-2 text-gray-500'> March 27, 2020 </span>
                </p>
                <h2 className='text-sm font-sans font-bold text-black  text-justify	py-2'>
                  Copa America: Luis Suarez From Devastated US
                </h2>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <div className='additional-slider-container py-6 '>
        <Slider {...sliderSettings} ref={sixSliderRef} className='w-80'>
          <div className='flex items-center justify-end'>
            <div className='flex items-center'>
              <img
                src='https://newsprkv.quomodosoft.com/img/most-1.28f231a1.jpg'
                alt='main slide 1'
                className='mr-4'
              />
              <div className='text-right  '>
                <p className='text-sm font-medium text-sm text-sky-500	font-bold '>
                  Technology{' '}
                  <span className='font-bold text-black pl-6'>/</span>
                  <span className='pl-2 text-gray-500'> March 27, 2020 </span>
                </p>
                <h2 className='text-sm font-sans font-bold text-black  text-justify	py-2'>
                  Copa America: Luis Suarez From Devastated US
                </h2>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-end'>
            <div className='flex items-center'>
              <img
                src='https://newsprkv.quomodosoft.com/img/most-1.28f231a1.jpg'
                alt='main slide 1'
                className='mr-4'
              />
              <div className='text-right  '>
                <p className='text-sm font-medium text-sm text-sky-500	font-bold '>
                  Technology{' '}
                  <span className='font-bold text-black pl-6'>/</span>
                  <span className='pl-2 text-gray-500'> March 27, 2020 </span>
                </p>
                <h2 className='text-sm font-sans font-bold text-black  text-justify	py-2'>
                  Copa America: Luis Suarez From Devastated US
                </h2>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-end'>
            <div className='flex items-center'>
              <img
                src='https://newsprkv.quomodosoft.com/img/most-1.28f231a1.jpg'
                alt='main slide 1'
                className='mr-4'
              />
              <div className='text-right  '>
                <p className='text-sm font-medium text-sm text-sky-500	font-bold '>
                  Technology{' '}
                  <span className='font-bold text-black pl-6'>/</span>
                  <span className='pl-2 text-gray-500'> March 27, 2020 </span>
                </p>
                <h2 className='text-sm font-sans font-bold text-black  text-justify	py-2'>
                  Copa America: Luis Suarez From Devastated US
                </h2>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div className='additional-slider-container py-6 '>
        <Slider {...sliderSettings} ref={sevenSliderRef} className='w-80'>
          <div className='flex items-center justify-end'>
            <div className='flex items-center'>
              <img
                src='https://newsprkv.quomodosoft.com/img/most-1.28f231a1.jpg'
                alt='main slide 1'
                className='mr-4'
              />
              <div className='text-right  '>
                <p className='text-sm font-medium text-sm text-sky-500	font-bold '>
                  Technology{' '}
                  <span className='font-bold text-black pl-6'>/</span>
                  <span className='pl-2 text-gray-500'> March 27, 2020 </span>
                </p>
                <h2 className='text-sm font-sans font-bold text-black  text-justify	py-2'>
                  Copa America: Luis Suarez From Devastated US
                </h2>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-end'>
            <div className='flex items-center'>
              <img
                src='https://newsprkv.quomodosoft.com/img/most-1.28f231a1.jpg'
                alt='main slide 1'
                className='mr-4'
              />
              <div className='text-right  '>
                <p className='text-sm font-medium text-sm text-sky-500	font-bold '>
                  Technology{' '}
                  <span className='font-bold text-black pl-6'>/</span>
                  <span className='pl-2 text-gray-500'> March 27, 2020 </span>
                </p>
                <h2 className='text-sm font-sans font-bold text-black  text-justify	py-2'>
                  Copa America: Luis Suarez From Devastated US
                </h2>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-end'>
            <div className='flex items-center'>
              <img
                src='https://newsprkv.quomodosoft.com/img/most-1.28f231a1.jpg'
                alt='main slide 1'
                className='mr-4'
              />
              <div className='text-right  '>
                <p className='text-sm font-medium text-sm text-sky-500	font-bold '>
                  Technology
                  <span className='font-bold text-black pl-6'>/</span>
                  <span className='pl-2 text-gray-500'> March 27, 2020 </span>
                </p>
                <h2 className='text-sm font-sans font-bold text-black  text-justify	py-2'>
                  Copa America: Luis Suarez From Devastated US
                </h2>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}

function getCurrentDate() {
  const date = new Date()
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return date.toLocaleDateString('en-US', options)
}

function News() {
  const currentDate = getCurrentDate()

  const imageCards = [
    {
      id: 1,
      image:
        'https://html.quomodosoft.com/binduz/assets/images/main-post-thumb-2.jpg',
      title: 'Finding The Intersection Of Social Justice And Tech.',
    },
    {
      id: 2,
      image:
        'https://html.quomodosoft.com/binduz/assets/images/main-post-thumb-4.jpg',
      title: 'Bringing Digital Skills To Previously Incarcerated',
    },
    {
      id: 3,
      image:
        'https://html.quomodosoft.com/binduz/assets/images/main-post-thumb-5.jpg',
      title: 'When Artists And Machine Intelligence Come Together',
    },
    {
      id: 4,
      image:
        'https://html.quomodosoft.com/binduz/assets/images/trending-today-thumb-2.png',
      title: 'Android Enterprise Security Delivers For Flexible Work',
    },
  ]

  return (
    <div className='container pl-16 mx-10'>
      <div className='Title flex justify-between'>
        <h2 className='mb-4 capitalize font-bold text-6xl'>Top Post</h2>
        <p className='uppercase underline underline-offset-2 mt-6 pr-16'>
          <a href='#'>
            See All Post
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </p>
      </div>

      <div className='row row-cols-1 row-cols-md-2 g-4'>
        {imageCards.map((card) => (
          <div key={card.id} className='col'>
            <div className='card h-100 rounded-lg'>
              <img
                src={card.image}
                className='card-img-top rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300'
                alt='Card'
              />
              <div className='card-body shadow-xl bg-white rounded-md p-4'>
                <div className='mb-2 flex items-center text-sm text-gray-500'>
                  <span className='  text-white bg-red-800 font-semibold px-2 py-1 rounded mr-2'>
                    Tech
                  </span>
                  <span className='flex items-center'>
                    <FontAwesomeIcon icon={faCalendarAlt} className='mr-1' />
                    {currentDate}
                  </span>
                </div>
                <h5 className='card-title font-bold text-black'>
                  {card.title}
                </h5>
                <p className='card-text text-gray-600 mt-2'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const MostViewed = () => {
  return (
    <div class='flex justify-between py-16 bg-slate-50'>
      <News />
      <div className='card-body shadow-xl bg-white rounded-md h-2/4	mr-6 px-6'>
        <MostViewedSlider />
      </div>
    </div>
  )
}
export default MostViewed
