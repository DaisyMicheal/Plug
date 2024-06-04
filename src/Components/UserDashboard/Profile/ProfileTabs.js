import { BsBookmark, BsGrid3X3, BsSuitHeart } from 'react-icons/bs'

const ProfileTabs = () => {
  return (
    <div className='flex w-full justify-center gap-4 sm:gap-10 uppercase font-bold'>
      <div className='flex items-center p-3 gap-1 cursor-pointer border-t border-white'>
        <div className='text-2xl'>
          <BsGrid3X3 />
        </div>
        <span className='text-xs sm:block hidden'>Posts</span>
      </div>

      <div className='flex items-center p-3 gap-1 cursor-pointer'>
        <div className='text-2xl'>
          <BsBookmark />
        </div>
        <span className='text-xs sm:block hidden'>Saved</span>
      </div>

      <div className='flex items-center p-3 gap-1 cursor-pointer'>
        <div className='text-2xl'>
          <BsSuitHeart />
        </div>
        <span className='text-xs sm:block hidden'>Likes</span>
      </div>
    </div>
  )
}

export default ProfileTabs
