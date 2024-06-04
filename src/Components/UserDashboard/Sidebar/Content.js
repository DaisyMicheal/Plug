import React, { useState } from 'react'
import {
  FaComment,
  FaRetweet,
  FaHeart,
  FaShare,
  FaBookmark,
} from 'react-icons/fa'
import { AiFillEye } from 'react-icons/ai'
import PostBox from './PostBox'
import Trends from './Trends'

const Content = () => {
  const posts = [
    {
      id: 1,
      user: {
        name: 'Fabrizio Romano',
        handle: '@FabrizioRomano',
        avatar:
          'https://i.pinimg.com/564x/01/e9/1f/01e91f455063cdd24bc9c9f753c467f3.jpg',
      },
      time: '17m',
      content:
        'Chelsea goalkeeper Sharman-Lowe signs new one-year deal with an option for a further season. He’s set to go on loan next season.',
      image: 'https://via.placeholder.com/400',
      comments: 116,
      retweets: 207,
      likes: 3600,
      views: 214000,
      saved: false,
    },
  ]

  return (
    <div className='flex flex-1 p-4 border-r border-gray-700 overflow-y-auto'>
      <div className='flex-1'>
        <PostBox />
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
      <div className='w-1/3'>
        <Trends />
      </div>
    </div>
  )
}

const Post = ({ post }) => {
  const [likes, setLikes] = useState(post.likes)
  const [comments, setComments] = useState(post.comments)
  const [retweets, setRetweets] = useState(post.retweets)
  const [views, setViews] = useState(post.views)
  const [saved, setSaved] = useState(post.saved)

  const handleLike = () => setLikes(likes + 1)
  const handleComment = () => setComments(comments + 1)
  const handleRetweet = () => setRetweets(retweets + 1)
  const handleView = () => setViews(views + 1)
  const handleSave = () => setSaved(!saved)

  return (
    <div className='p-4 mb-4 bg-gray-800 rounded-lg'>
      <div className='flex items-center mb-2'>
        <img
          src={post.user.avatar}
          alt='Profile'
          className='w-10 h-10 rounded-full'
        />
        <div className='ml-2'>
          <div className='font-bold text-white'>{post.user.name}</div>
          <div className='text-sm text-gray-400'>
            {post.user.handle} · {post.time}
          </div>
        </div>
      </div>
      <div className='text-white mb-4'>{post.content}</div>
      {post.image && (
        <img src={post.image} alt='Post' className='rounded-lg mb-4' />
      )}
      <div className='flex justify-between text-gray-500'>
        <button onClick={handleComment} className='flex items-center space-x-1'>
          <FaComment />
          <span>{comments}</span>
        </button>
        <button onClick={handleRetweet} className='flex items-center space-x-1'>
          <FaRetweet />
          <span>{retweets}</span>
        </button>
        <button onClick={handleLike} className='flex items-center space-x-1'>
          <FaHeart />
          <span>{likes}</span>
        </button>
        <button onClick={handleView} className='flex items-center space-x-1'>
          <AiFillEye />
          <span>{views}</span>
        </button>
        <button onClick={handleSave} className='flex items-center space-x-1'>
          <FaBookmark className={saved ? 'text-yellow-500' : ''} />
        </button>
        <button className='flex items-center space-x-1'>
          <FaShare />
        </button>
      </div>
    </div>
  )
}

export default Content
