import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Home() {
  return (
    <div className='bg-white-900	'>
      <div className='main pt-10  '>
        <section className='Grid-container'>
          <div className='Title flex justify-between mx-20'>
            <h2 className='mb-4 capitalize	font-bold text-5xl '>
              featured post{' '}
            </h2>
            <p
              className='uppercase underline underline-offset-2 mt-6 pl-16
'
            >
              <a href='#'>
                see all post
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </p>
          </div>

          <div className='grid grid-cols-3 gap-8 p-10 ml-10'>
            <div className='relative overflow-hidden transition ease-in-out duration-300 transform hover:scale-105'>
              <img
                src='https://solverwp.com/demo/react/nextpage/assets/img/post/1.png'
                alt=''
              />
              <a
                href='#'
                className='absolute top-3 left-4 bg-green-500 text-black px-4 py-1 rounded-md'
              >
                Tech
              </a>
            </div>
            <div className='relative overflow-hidden transition ease-in-out duration-300 transform hover:scale-105'>
              <img
                src='https://solverwp.com/demo/react/nextpage/assets/img/post/2.png'
                alt=''
              />
              <a
                href='#'
                className='absolute top-3 left-4 bg-cyan-500 text-black px-4 py-1 rounded-md'
              >
                Food
              </a>
            </div>
            <div className='relative overflow-hidden transition ease-in-out duration-300 transform hover:scale-105'>
              <img
                src='https://solverwp.com/demo/react/nextpage/assets/img/post/3.png'
                alt=''
              />
              <a
                href='#'
                className='absolute top-3 left-4 bg-red-500 text-black px-4 py-1 rounded-md'
              >
                Fashion
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
