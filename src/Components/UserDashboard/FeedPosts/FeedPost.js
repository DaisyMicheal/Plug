import React from 'react'
import PostFooter from './PostFooter'
import PostHeader from './PostHeader'
import useGetUserProfileById from '../../../hooks/useGetUserProfileById'

const FeedPost = ({ post }) => {
  const { userProfile } = useGetUserProfileById(post.createdBy)

  return (
    <>
      <PostHeader post={post} creatorProfile={userProfile} />
      <div className='my-2 rounded overflow-hidden'>
        <img src={post.imageURL} alt='FEED POST IMG' className='w-full' />
      </div>
      <PostFooter post={post} creatorProfile={userProfile} />
    </>
  )
}

export default FeedPost
