import React from 'react'
import FeedPost from './FeedPost'
import useGetFeedPosts from '../../../hooks/useGetFeedPosts'

const FeedPosts = () => {
  const { isLoading, posts } = useGetFeedPosts()

  return (
    <div className='max-w-2xl mx-auto py-10 px-4'>
      {isLoading &&
        [0, 1, 2].map((_, idx) => (
          <div key={idx} className='mb-10 space-y-4'>
            <div className='flex gap-2'>
              <div className='h-10 w-10 rounded-full bg-gray-300 animate-pulse'></div>
              <div className='space-y-2'>
                <div className='h-2.5 w-48 bg-gray-300 animate-pulse'></div>
                <div className='h-2.5 w-48 bg-gray-300 animate-pulse'></div>
              </div>
            </div>
            <div className='w-full'>
              <div className='h-96 bg-gray-300 animate-pulse'></div>
            </div>
          </div>
        ))}

      {!isLoading &&
        posts.length > 0 &&
        posts.map((post) => <FeedPost key={post.id} post={post} />)}
      {!isLoading && posts.length === 0 && (
        <>
          <p className='text-md text-red-400'>
            Dayuum. Looks like you don&apos;t have any friends.
          </p>
          <p className='text-red-400'>Stop coding and go make some!!</p>
        </>
      )}
    </div>
  )
}

export default FeedPosts
