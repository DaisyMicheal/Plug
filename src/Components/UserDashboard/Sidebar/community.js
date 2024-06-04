import { CommunityLogo } from '../../../Assests/constants'

const Community = () => {
  return (
    <div className='relative group flex items-center'>
      <div className='flex items-center gap-4 p-2 rounded-lg hover:bg-gray-700 w-10 md:w-full justify-center md:justify-start cursor-pointer'>
        <CommunityLogo />
        <span className='hidden md:block'>Community </span>
      </div>
    </div>
  )
}

export default Community
