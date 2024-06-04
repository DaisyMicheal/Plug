import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faUser } from '@fortawesome/free-solid-svg-icons'

function TrendingArea() {
  const [activeTab, setActiveTab] = useState('tech')
  const [currentTime, setCurrentTime] = useState(new Date())

  const toggleTab = (tab) => {
    setActiveTab(tab)
  }

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000)

    return () => {
      clearInterval(timerID)
    }
  }, [])

  const tick = () => {
    setCurrentTime(new Date())
  }

  const techContent = [
    {
      id: 1,
      image:
        'https://i.pinimg.com/564x/83/35/e3/8335e3bb9f3d1c553dc179ed47c25e0e.jpg',
      alt: 'Tech Image 1',
      category: 'Tech',
      categoryLink: '#',
      time: '08.22.2023',
      author: 'John R. Lambert',
      postLink: '#',
      title:
        'Technological Organism: Technologys Role in Our Psychosocial Evolution | Wake Up World',
    },
    {
      id: 2,
      image:
        'https://i.pinimg.com/736x/30/46/ae/3046aefd1ec741ab040836d64ac107a3.jpg',
      alt: 'Tech Image 1',
      category: 'Tech',
      categoryLink: '#',
      time: '08.22.2023',
      author: 'Mark P. Micheal',
      postLink: '#',
      title: 'Ufone Internet Packages 2024 – 3G, 4G, Daily, Weekly & Monthly',
    },
    {
      id: 3,
      image:
        'https://i.pinimg.com/564x/58/3d/5f/583d5f9647bfbfe5de4b74086122ca7d.jpg',
      alt: 'Tech Image 1',
      category: 'Tech',
      categoryLink: '#',
      time: '08.22.2023',
      author: 'Jannifer L. Stone',
      postLink: '#',
      title: 'Internet Slow? Here’s How to Troubleshoot Your Router',
    },
    {
      id: 4,
      image:
        'https://i.pinimg.com/564x/79/db/ee/79dbeece112651d29cb8049c29f4b212.jpg',
      alt: 'Tech Image 1',
      category: 'Tech',
      categoryLink: '#',
      time: '08.22.2023',
      author: 'Elijah F. Max',
      postLink: '#',
      title: 'Search engine optimisation belfast',
    },
  ]

  const newsContent = [
    {
      id: 1,
      image:
        'https://tmrwstudio.live/katerio/default/wp-content/uploads/sites/2/2022/09/brandon-mowinkel-3_JwPJwq6CI-unsplash-1-480x343.jpeg',
      alt: 'Tech Image 1',
      category: 'News',
      categoryLink: '#',
      time: '08.22.2023',
      author: 'Luck K. Kali',
      postLink: '#',
      title: 'Snowflake a Cloud Data Files Warehouse, to Go Public',
    },
    {
      id: 2,
      image:
        'https://tmrwstudio.live/katerio/default/wp-content/uploads/sites/2/2022/08/freepikone3-1-1024x682.jpeg',
      alt: 'Tech Image 1',
      category: 'News',
      categoryLink: '#',
      time: '08.22.2023',
      author: 'Peace H. Aliser',
      postLink: '#',
      title: 'Snowflake a Cloud Data Files Warehouse, to Go Public',
    },
    {
      id: 3,
      image: 'https://solverwp.com/demo/html/nextpage/assets/img/post/20.png',
      alt: 'Tech Image 1',
      category: 'News',
      categoryLink: '#',
      time: '08.22.2023',
      author: 'Adax I. Jonney',
      postLink: '#',
      title: 'Snowflake a Cloud Data Files Warehouse, to Go Public',
    },
    {
      id: 4,
      image:
        'https://tmrwstudio.live/katerio/sports/wp-content/uploads/sites/5/2022/09/sports18-480x320.jpeg',
      alt: 'Tech Image 1',
      category: 'News',
      categoryLink: '#',
      time: '08.22.2023',
      author: 'Aliser S. Esther',
      postLink: '#',
      title: 'Snowflake a Cloud Data Files Warehouse, to Go Public',
    },
  ]

  const fashionContent = [
    {
      id: 1,
      image:
        'https://tmrwstudio.live/katerio/default/wp-content/uploads/sites/2/2022/10/freepik91-1-480x320.jpeg',
      alt: 'Tech Image 1',
      category: 'Fashion',
      categoryLink: '#',
      time: '08.22.2023',
      author: 'Ruth O. Lambert',
      postLink: '#',
      title: 'Snowflake a Cloud Data Files Warehouse, to Go Public',
    },
    {
      id: 2,
      image:
        'https://tmrwstudio.live/katerio/default/wp-content/uploads/sites/2/2022/09/unsplash16-1-480x384.jpeg',
      alt: 'Tech Image 1',
      category: 'Fashion',
      categoryLink: '#',
      time: '08.22.2023',
      author: 'Grace C. Victor',
      postLink: '#',
      title: 'Snowflake a Cloud Data Files Warehouse, to Go Public',
    },
    {
      id: 3,
      image:
        'https://tmrwstudio.live/katerio/default/wp-content/uploads/sites/2/2022/09/unsplash14-1-480x360.jpeg',
      alt: 'Tech Image 1',
      category: 'Fashion',
      categoryLink: '#',
      time: '08.22.2023',
      author: 'Snow F. Felix',
      postLink: '#',
      title: 'Snowflake a Cloud Data Files Warehouse, to Go Public',
    },
    {
      id: 4,
      image:
        'https://tmrwstudio.live/katerio/default/wp-content/uploads/sites/2/2022/09/unsplash014-1-480x320.jpeg',
      alt: 'Tech Image 1',
      category: 'Fashion',
      categoryLink: '#',
      time: '08.22.2023',
      author: 'Bellion R. Usmar',
      postLink: '#',
      title: 'Snowflake a Cloud Data Files Warehouse, to Go Public',
    },
  ]
  const entertainmentContent = [
    {
      id: 1,
      image:
        'https://tmrwstudio.live/katerio/default/wp-content/uploads/sites/2/2022/09/brandon-mowinkel-3_JwPJwq6CI-unsplash-1-480x343.jpeg',
      alt: 'Tech Image 1',
      category: 'Entertain',
      categoryLink: '#',
      time: '08.22.2023',
      author: 'John R. Lambert',
      postLink: '#',
      title: 'Snowflake a Cloud Data Files Warehouse, to Go Public',
    },
    {
      id: 2,
      image:
        'https://i.pinimg.com/564x/91/86/7a/91867a01ea8a69477f5fdc6da8756203.jpg',
      alt: 'Tech Image 1',
      category: 'Entertain',
      categoryLink: '#',
      time: '08.22.2023',
      author: 'Micah M. Maxewell',
      postLink: '#',
      title: 'Snowflake a Cloud Data Files Warehouse, to Go Public',
    },
    {
      id: 3,
      image:
        'https://tmrwstudio.live/katerio/default/wp-content/uploads/sites/2/2022/08/freepikone4-1-768x480.jpeg',
      alt: 'Tech Image 1',
      category: 'Entertain',
      categoryLink: '#',
      time: '08.22.2023',
      author: 'Bethel D. Daniel',
      postLink: '#',
      title: 'Snowflake a Cloud Data Files Warehouse, to Go Public',
    },
    {
      id: 4,
      image:
        'https://tmrwstudio.live/katerio/tech/wp-content/uploads/sites/3/2022/09/tech22-480x270.jpg',
      alt: 'Tech Image 1',
      category: 'Entertain',
      categoryLink: '#',
      time: '08.22.2023',
      author: 'Shaly M. Abenigo',
      postLink: '#',
      title: 'Snowflake a Cloud Data Files Warehouse, to Go Public',
    },
  ]

  return (
    <div className='tranding-area py-12 shadow-xl bg-white rounded-md h-2/4 mr-6 ml-6 px-6'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <h6 className='text-4xl font-semibold'>Trending </h6>
          <div className='flex space-x-4'>
            <button
              className={`px-3 py-1 rounded-lg focus:outline-none ${
                activeTab === 'tech'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600'
              }`}
              onClick={() => toggleTab('tech')}
            >
              Tech
            </button>
            <button
              className={`px-3 py-1 rounded-lg focus:outline-none ${
                activeTab === 'news'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600'
              }`}
              onClick={() => toggleTab('news')}
            >
              News
            </button>
            <button
              className={`px-3 py-1 rounded-lg focus:outline-none ${
                activeTab === 'fashion'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600'
              }`}
              onClick={() => toggleTab('fashion')}
            >
              Fashion
            </button>
            <button
              className={`px-3 py-1 rounded-lg focus:outline-none ${
                activeTab === 'entertainment'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600'
              }`}
              onClick={() => toggleTab('entertainment')}
            >
              Entertainment
            </button>
          </div>
        </div>
        <div className='mt-6'>
          {activeTab === 'tech' && (
            <div className='grid grid-cols-4 gap-6'>
              {techContent.map((item) => (
                <div key={item.id} className='single-post-wrap'>
                  <div className='relative overflow-hidden'>
                    <img src={item.image} alt={item.alt} />
                    <a
                      className='absolute top-3 left-4 bg-green-200 text-black px-3 py-1 rounded-md'
                      href={item.categoryLink}
                    >
                      {item.category}
                    </a>
                  </div>
                  <div className='details '>
                    <div className='post-meta-single py-6 font-mono			'>
                      <ul className='flex justify-between '>
                        <li>
                          <FontAwesomeIcon
                            icon={faClock}
                            className='text-sm text-gray-600'
                          />

                          {currentTime.toLocaleTimeString()}
                        </li>
                        <li className='mr-2'>
                          <FontAwesomeIcon
                            icon={faUser}
                            className='text-sm text-sky-600'
                          />
                          {item.author}
                        </li>
                      </ul>
                    </div>
                    <h6 className='font-sans	font-medium'>
                      <a href={item.postLink}>{item.title}</a>
                    </h6>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className='mt-6'>
          {activeTab === 'news' && (
            <div className='grid grid-cols-4 gap-6'>
              {newsContent.map((item) => (
                <div key={item.id} className='single-post-wrap'>
                  <div className='relative overflow-hidden'>
                    <img src={item.image} alt={item.alt} />
                    <a
                      className='absolute top-3 left-4 bg-cyan-300 text-black px-4 py-1 rounded-md'
                      href={item.categoryLink}
                    >
                      {item.category}
                    </a>
                  </div>
                  <div className='details '>
                    <div className='post-meta-single py-6 font-mono			'>
                      <ul className='flex justify-between '>
                        <li>
                          <FontAwesomeIcon
                            icon={faClock}
                            className='text-sm text-gray-600'
                          />

                          {currentTime.toLocaleTimeString()}
                        </li>
                        <li className='mr-2'>
                          <FontAwesomeIcon
                            icon={faUser}
                            className='text-sm text-sky-600'
                          />
                          {item.author}
                        </li>
                      </ul>
                    </div>
                    <h6 className='font-sans	font-medium'>
                      <a href={item.postLink}>{item.title}</a>
                    </h6>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className='mt-6'>
            {activeTab === 'fashion' && (
              <div className='grid grid-cols-4 gap-6'>
                {fashionContent.map((item) => (
                  <div key={item.id} className='single-post-wrap'>
                    <div className='relative overflow-hidden'>
                      <img src={item.image} alt={item.alt} />
                      <a
                        className='absolute top-3 left-4 bg-sky-500 text-black px-4 py-1 rounded-md'
                        href={item.categoryLink}
                      >
                        {item.category}
                      </a>
                    </div>
                    <div className='details '>
                      <div className='post-meta-single py-6 font-mono			'>
                        <ul className='flex justify-between '>
                          <li>
                            <FontAwesomeIcon
                              icon={faClock}
                              className='text-sm text-gray-600'
                            />

                            {currentTime.toLocaleTimeString()}
                          </li>
                          <li className='mr-2'>
                            <FontAwesomeIcon
                              icon={faUser}
                              className='text-sm text-sky-600'
                            />
                            {item.author}
                          </li>
                        </ul>
                      </div>
                      <h6 className='font-sans	font-medium'>
                        <a href={item.postLink}>{item.title}</a>
                      </h6>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className='mt-6'>
            {activeTab === 'entertainment' && (
              <div className='grid grid-cols-4 gap-6'>
                {entertainmentContent.map((item) => (
                  <div key={item.id} className='single-post-wrap'>
                    <div className='relative overflow-hidden'>
                      <img src={item.image} alt={item.alt} />
                      <a
                        className='absolute top-3 left-4 bg-cyan-500 text-black px-4 py-1 rounded-md'
                        href={item.categoryLink}
                      >
                        {item.category}
                      </a>
                    </div>
                    <div className='details '>
                      <div className='post-meta-single py-6 font-mono			'>
                        <ul className='flex justify-between '>
                          <li>
                            <FontAwesomeIcon
                              icon={faClock}
                              className='text-sm text-gray-600'
                            />

                            {currentTime.toLocaleTimeString()}
                          </li>
                          <li className='mr-2'>
                            <FontAwesomeIcon
                              icon={faUser}
                              className='text-sm text-sky-600'
                            />
                            {item.author}
                          </li>
                        </ul>
                      </div>
                      <h6 className='font-sans	font-medium'>
                        <a href={item.postLink}>{item.title}</a>
                      </h6>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrendingArea
