import { useState } from 'react'
import Login from './Login'
import Signup from './Signup'
import GoogleAuth from './GoogleAuth'

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className='py-16'>
      <div className='border border-gray-400 rounded-md p-6 '>
        <div className='space-y-4'>
          <div className='text-4xl italic font-bold text-white text-center opacity-10	 cursor-pointer'>
            Plug
          </div>

          {isLogin ? <Login /> : <Signup />}

          <div className='flex items-center justify-center my-4 gap-1 w-full'>
            <div className='flex-2 h-px bg-gray-400'></div>
            <span className='mx-1 text-white'>OR</span>
            <div className='flex-2 h-px bg-gray-400'></div>
          </div>

          <GoogleAuth prefix={isLogin ? 'Log in' : 'Sign up'} />
        </div>
      </div>

      <div className='border border-gray-400 rounded-md p-5 mt-4'>
        <div className='flex items-center justify-center'>
          <div className='mx-2 text-sm'>
            {isLogin ? "Don't have an account?" : 'Already have an account?'}
          </div>
          <div
            onClick={() => setIsLogin(!isLogin)}
            className='text-blue-500 cursor-pointer'
          >
            {isLogin ? 'Sign up' : 'Log in'}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthForm
