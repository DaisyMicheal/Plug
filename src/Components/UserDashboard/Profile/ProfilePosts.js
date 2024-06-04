import ProfilePost from './ProfilePost'
import useGetUserPosts from '../../../hooks/useGetUserPosts'

const ProfilePosts = () => {
  const { isLoading, posts } = useGetUserPosts()

  const noPostsFound = !isLoading && posts.length === 0
  if (noPostsFound) return <NoPostsFound />

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-1'>
      {isLoading &&
        [0, 1, 2].map((_, idx) => (
          <div key={idx} className='flex flex-col gap-4'>
            <div className='w-full h-72 bg-gray-200 animate-pulse' />
          </div>
        ))}

      {!isLoading && (
        <>
          {posts.map((post) => (
            <ProfilePost post={post} key={post.id} />
          ))}
        </>
      )}
    </div>
  )
}

export default ProfilePosts

const NoPostsFound = () => {
  return (
    <div className='flex flex-col text-center mx-auto mt-10'>
      <span className='text-2xl'>No Posts Found🤔</span>
    </div>
  )
}
