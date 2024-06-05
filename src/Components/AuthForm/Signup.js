import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase/firebase'
import useSignUpWithEmailAndPassword from '../../hooks/useSignUpWithEmailAndPassword'

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const { loading, error, signup } = useSignUpWithEmailAndPassword()
  const navigate = useNavigate()
  const [authUser] = useAuthState(auth)

  useEffect(() => {
    if (authUser) {
      navigate('/userdashboard')
    }
  }, [authUser, navigate])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }))
  }

  const handleSignup = async () => {
    try {
      await signup(inputs)
      navigate('/userdashboard')
    } catch (error) {
      console.error('Signup error:', error)
    }
  }

  return (
    <div className='w-full max-w-sm mx-auto mt-8 p-6 border border-gray-200 rounded-lg shadow-md'>
      <h2 className='text-2xl font-bold mb-6 text-center'>Sign Up</h2>
      <input
        type='text'
        name='fullName'
        placeholder='Full Name'
        value={inputs.fullName}
        onChange={handleInputChange}
        className='block w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-700'
        aria-label='Full Name'
      />
      <input
        type='text'
        name='username'
        placeholder='Username'
        value={inputs.username}
        onChange={handleInputChange}
        className='block w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-700'
        aria-label='Username'
      />
      <input
        type='email'
        name='email'
        placeholder='Email'
        value={inputs.email}
        onChange={handleInputChange}
        className='block w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-700'
        aria-label='Email'
      />
      <div className='relative'>
        <input
          type={showPassword ? 'text' : 'password'}
          name='password'
          placeholder='Password'
          value={inputs.password}
          onChange={handleInputChange}
          className='block w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-700'
          aria-label='Password'
        />
        <button
          type='button'
          onClick={() => setShowPassword(!showPassword)}
          className='absolute inset-y-0 right-0 flex items-center px-4'
          aria-label='Toggle password visibility'
        >
          {showPassword ? 'Hide' : 'Show'}
        </button>
      </div>
      {error && (
        <div className='bg-red-100 border border-red-400 text-red-700 p-2 rounded mb-4'>
          <p>{error.message}</p>
        </div>
      )}
      <button
        onClick={handleSignup}
        className={`w-full bg-green-800 text-white p-2 rounded ${
          loading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={loading}
      >
        {loading ? 'Signing Up...' : 'Sign Up'}
      </button>
    </div>
  )
}

export default Signup
