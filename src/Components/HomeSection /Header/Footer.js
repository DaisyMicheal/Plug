import Logo from './icon.png'

const Footer = () => {
  return (
    <footer className='bg-gray-900	text-white'>
      <div className='container mx-auto py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='py-16'>
            <p className='mb-4 font-serif'>
              Plug, a multipurpose social blogging platform where everyone,
              connect to share idea.
            </p>
          </div>
          <div>
            <h4 className='text-2xl font-bold mb-4 font-mono'>Category</h4>
            <div className='flex flex-wrap font-bold font-sans '>
              <div className='w-1/2 md:w-1/3 lg:w-1/4 mb-4 hover:text-green-700'>
                <a href='#'>Apps</a>
              </div>
              <div className='w-1/2 md:w-1/3 lg:w-1/4 mb-4 hover:text-green-700'>
                <a href='#'>Business</a>
              </div>
              <div className='w-1/2 md:w-1/3 mb-4 hover:text-green-700'>
                <a href='#'>Entertainment</a>
              </div>

              <div className='w-1/2 md:w-1/3 lg:w-1/4 mb-4 hover:text-green-700'>
                <a href='#'>Food</a>
              </div>
              <div className='w-1/2 md:w-1/3 lg:w-1/4 mb-4 hover:text-green-700'>
                <a href='#'>Fashion</a>
              </div>
              <div className='w-1/2 md:w-1/3 lg:w-1/4 mb-4 hover:text-green-700'>
                <a href='#'>Tech</a>
              </div>
              <div className='w-1/2 md:w-1/3 lg:w-1/4 mb-4 hover:text-green-700'>
                <a href='#'>Gadget</a>
              </div>
              <div className='w-1/2 md:w-1/3 lg:w-1/4 mb-4 hover:text-green-700'>
                <a href='#'>Gaming</a>
              </div>
              <div className='w-1/2 md:w-1/3 lg:w-1/4 mb-4 hover:text-green-700'>
                <a href='#'>Health</a>
              </div>
              <div className='w-1/2 md:w-1/3 lg:w-1/4 mb-4 hover:text-green-700'>
                <a href='#'>Lifestyle</a>
              </div>
              <div className='w-1/2 md:w-1/3 lg:w-1/4 mb-4 hover:text-green-700'>
                <a href='#'>Science</a>
              </div>
              <div className='w-1/2 md:w-1/3 lg:w-1/4 mb-4 hover:text-green-700'>
                <a href='#'>Travel</a>
              </div>
              <div className='w-1/2 md:w-1/3 lg:w-1/4 mb-4 hover:text-green-700'>
                <a href='#'>Startup</a>
              </div>
              <div className='w-1/2 md:w-1/3 lg:w-1/4 mb-4 hover:text-green-700'>
                <a href='#'>Sports</a>
              </div>
            </div>
          </div>
          <div>
            <h4 className='text-2xl  font-bold mb-4 font-mono'>Newsletter</h4>
            <p className='mb-4 font-serif'>
              Don’t miss to subscribe to our news feeds, kindly fill the form
              below
            </p>
            <div className='flex items-center'>
              <input
                type='text'
                className='form-input bg-white text-gray py-3 px-16'
                placeholder='Your email address'
              />
            </div>
            <div className='flex items-center py-2 '>
              <button className='bg-green-800 hover:bg-green-700 text-white font-bold py-3 px-32'>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gray-800 py-4'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='text-center md:text-left font-bold text-sm'>
              <p>
                &copy; 2024 Plug - Copyright&&{' '}
                <span>
                  <a href='#'>Plug.com</a>
                </span>
              </p>
            </div>
            <div className=' text-center md:text-right '>
              <ul className='flex justify-between list-none px-44 font-bold text-sm '>
                <li>
                  <a href='#'>Privacy </a>
                </li>
                <p>/</p>
                <li>
                  <a href='#'>Contact</a>
                </li>
                <p>/</p>
                <li>
                  <a href='#'>About</a>
                </li>
                <p>/</p>
                <li>
                  <a href='#'>FAQ</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
