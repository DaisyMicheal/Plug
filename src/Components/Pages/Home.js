import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

function Home() {
  return (
    <div className='bg-slate-800 h-100	'>
      <div className='main pt-6  '>
        <h1 className=' font-sans text-left mb-8 pt-20 pl-10 text-6xl font-normal text-neutral-100'>
          Stay Curious.
        </h1>
        <p className='font-sans text-justify mb-px pl-8 text-2xl text-neutral-100'>
          Discover stories, thinking, and expertise <br />
          from writers on any topic.
        </p>
        <button className=' font-sans bg-slate-700 rounded-md font-medium	 text-white hover:text-white py-3 px-6 ml-10 my-6 border-2 '>
          Read More
        </button>

        <section className='Grid-container'>
          <div className='grid grid-cols-4 gap-8 p-10 ml-10'>
            <div className='relative overflow-hidden transition ease-in-out duration-300 transform hover:scale-105'>
              <img
                src='https://solverwp.com/demo/react/nextpage/assets/img/post/1.png'
                alt=''
              />
              <a
                href='#'
                className='absolute top-3 left-4 bg-cyan-500 text-black px-5 py-1 rounded-md'
              >
                Tech
              </a>
              <p className='font-sans font-bold text-white text-center my-6 hover:bg-red'>
                The FAA will test drone detecting Technologies in airports this
                year
              </p>
              <p className='text-left text-gray-500	'>
                <FontAwesomeIcon icon={faClock} />
                <span className='my-2'> 08.22.2020</span>
              </p>
            </div>
            <div className='relative overflow-hidden transition ease-in-out duration-300 transform hover:scale-105'>
              <img
                src='https://solverwp.com/demo/react/nextpage/assets/img/post/2.png'
                alt=''
              />
              <a
                href='#'
                className='absolute top-3 left-4 bg-cyan-500 text-black px-5 py-1 rounded-md'
              >
                Tech
              </a>
              <p className='font-sans font-bold text-white text-center my-6 hover:bg-blue'>
                Rocket Lab will resume launches no sooner than August 27th
              </p>
              <p className='text-left text-gray-500	'>
                <FontAwesomeIcon icon={faClock} />
                <span className='my-2'> 08.22.2020</span>
              </p>
            </div>
            <div className='relative overflow-hidden transition ease-in-out duration-300 transform hover:scale-105'>
              <img
                src='https://solverwp.com/demo/react/nextpage/assets/img/post/3.png'
                alt=''
              />
              <a
                href='#'
                className='absolute top-3 left-4 bg-red-500 text-black px-5 py-1 rounded-md'
              >
                Tech
              </a>
              <p className='font-sans font-bold text-white text-center my-6 hover:bg-blue'>
                The FAA will test drone detecting Technologies in airports this
                year
              </p>
              <p className='text-left text-gray-500	'>
                <FontAwesomeIcon icon={faClock} />
                <span className='my-2'> 08.22.2020</span>
              </p>
            </div>
            <div className='relative overflow-hidden transition ease-in-out duration-300 transform hover:scale-105'>
              <img
                src='https://solverwp.com/demo/react/nextpage/assets/img/post/4.png'
                alt=''
              />
              <a
                href='#'
                className='absolute top-3 left-4 bg-cyan-500 text-black px-5 py-1 rounded-md '
              >
                Tech
              </a>
              <p className='font-sans font-bold text-white text-center my-6 hover:bg-blue'>
                Rocket Lab will resume launches no sooner than August 27th
              </p>
              <p className='text-left text-gray-500	'>
                <FontAwesomeIcon icon={faClock} />
                <span className='my-2'> 08.22.2020</span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
