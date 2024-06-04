import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronRight,
  faChevronLeft,
  faPlus,
  faCircle,
  faComment,
  faEllipsisH,
} from '@fortawesome/free-solid-svg-icons'

function Discover() {
  const navRef = useRef(null)

  const scrollLeft = () => {
    navRef.current.scrollBy({ left: -200, behavior: 'smooth' })
  }

  const scrollRight = () => {
    navRef.current.scrollBy({ left: 200, behavior: 'smooth' })
  }

  const articles = [
    {
      id: 1,
      author: 'Alexander Nguyen',
      publication: 'Level Up Coding',
      title: 'Why I Keep Failing Candidates During Google Interviews...',
      subtitle: 'They don’t meet the bar.',
      date: 'Apr 13, 2023',
      views: '6.6K',
      comments: '186',
      image:
        'https://miro.medium.com/v2/resize:fit:720/format:webp/1*FyaF0pPskcOtQ_MmEnBjZA.jpeg',
      profileImage: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      id: 2,
      author: 'Pablo Porto',
      publication: 'Level Up Coding',
      title:
        '10 unconventional lessons from 10 years working as a software engineer',
      subtitle:
        'Practical advice to build an effective and sustainable career in tech',
      date: 'Jan 25, 2023',
      views: '2K',
      comments: '51',
      image:
        'https://miro.medium.com/v2/resize:fit:720/format:webp/1*YiZksL8bfzbVmq0DM3JHpw.png',
      profileImage: 'https://randomuser.me/api/portraits/men/33.jpg',
    },
  ]

  const staffPicks = [
    { id: 1, author: 'Joan Westenberg', title: 'Just show up.' },
    {
      id: 2,
      author: 'Matthew Clapham',
      title:
        'The Hardest Phrase in the World to Translate: ‘A Nice Cup of Tea’',
    },
    {
      id: 3,
      author: 'David Mandell',
      title:
        'I’m a 31-year-old Screenwriter Who Had To Move Back in With His Parents. And That’s Okay.',
    },
  ]

  const topics = ['Python', 'Health', 'Science', 'Mental Health', 'Life']

  return (
    <div className='container mx-auto p-4'>
      <header className='flex justify-between items-center py-4 border-b'>
        <nav className='flex-1 relative flex items-center'>
          <button onClick={scrollLeft} className='mr-2'>
            <FontAwesomeIcon icon={faChevronLeft} className='text-gray-700' />
          </button>
          <ul
            ref={navRef}
            className='flex space-x-4 whitespace-nowrap overflow-x-auto no-scrollbar scroll-smooth'
          >
            <li>
              <a href='#' className='font-semibold text-gray-700'>
                For you
              </a>
            </li>
            <li>
              <a href='#' className='font-semibold text-gray-700'>
                Following
              </a>
            </li>
            <li>
              <a href='#' className='font-semibold text-gray-700'>
                Programming
              </a>
            </li>
            <li>
              <a href='#' className='font-semibold text-gray-700'>
                Software Engineering
              </a>
            </li>
            <li>
              <a href='#' className='font-semibold text-gray-700'>
                React
              </a>
            </li>
            <li>
              <a href='#' className='font-semibold text-gray-700'>
                Web Development
              </a>
            </li>
          </ul>
          <button onClick={scrollRight} className='ml-2'>
            <FontAwesomeIcon icon={faChevronRight} className='text-gray-700' />
          </button>
          <FontAwesomeIcon icon={faPlus} className='ml-4 text-gray-700' />
        </nav>
      </header>

      <div className='flex mt-8'>
        <main className='w-2/3 pr-8'>
          {articles.map((article) => (
            <article key={article.id} className='mb-8'>
              <div className='flex items-start'>
                <div className='flex-grow'>
                  <div className='flex items-center text-sm text-gray-500 mb-2'>
                    <img
                      src={article.profileImage}
                      alt={article.author}
                      className='w-8 h-8 rounded-full mr-2'
                    />
                    <span>{article.author}</span>
                    <span className='mx-1'>in</span>
                    <span className='font-semibold'>{article.publication}</span>
                  </div>
                  <h2 className='text-2xl font-bold'>{article.title}</h2>
                  <p className='text-gray-600'>{article.subtitle}</p>
                  <div className='flex items-center text-gray-500 text-sm mt-2'>
                    <span>{article.date}</span>
                    <span className='ml-4 flex items-center'>
                      <FontAwesomeIcon
                        icon={faCircle}
                        className='w-2 h-2 mr-1'
                      />
                      {article.views}
                    </span>
                    <span className='ml-4 flex items-center'>
                      <FontAwesomeIcon
                        icon={faComment}
                        className='w-4 h-4 mr-1'
                      />
                      {article.comments}
                    </span>
                    <span className='ml-4'>
                      <FontAwesomeIcon icon={faEllipsisH} />
                    </span>
                  </div>
                </div>
                <img
                  src={article.image}
                  alt={article.title}
                  className='ml-4 w-32 h-32 object-cover rounded'
                />
              </div>
            </article>
          ))}
        </main>

        <aside className='w-1/3 py-4 border-b'>
          <div className='mb-8'>
            <h3 className='font-bold text-lg mb-4'>Staff Picks</h3>
            <ul>
              {staffPicks.map((pick) => (
                <li key={pick.id} className='mb-4'>
                  <div className='text-sm text-gray-500'>{pick.author}</div>
                  <div className='font-bold'>{pick.title}</div>
                </li>
              ))}
            </ul>
            <a href='#' className='text-green-600'>
              See the full list
            </a>
          </div>

          <div>
            <h3 className='font-bold text-lg mb-4'>Recommended topics</h3>
            <div className='flex flex-wrap gap-2'>
              {topics.map((topic) => (
                <span
                  key={topic}
                  className='bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm'
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default Discover
