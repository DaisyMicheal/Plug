import { useState, useEffect } from 'react'
import useLogin from '../../hooks/useLogin'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  })
  const navigate = useNavigate()
  const { loading, error, login, user } = useLogin() //  useLogin returns the user object upon success
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  let timer

  const handleLogin = async () => {
    await login(inputs)
  }

  useEffect(() => {
    if (user) {
      setShowSuccessMessage(true)
      timer = setTimeout(() => {
        setShowSuccessMessage(false)
        navigate('/UserDashboard')
      }, 3000)
    } else if (error) {
      setShowSuccessMessage(false)
    }

    return () => clearTimeout(timer) 
  }, [user, error, navigate])

  return (
    <div className='w-full max-w-sm mx-auto mt-8 p-6 border border-gray-200 rounded-lg shadow-md'>
      <h2 className='text-2xl font-bold mb-6 text-center'>Login</h2>
      <input
        type='email'
        placeholder='Email'
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
        className='block w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-700'
      />
      <input
        type='password'
        placeholder='Password'
        value={inputs.password}
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        className='block w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-700'
      />
      {error && (
        <div className='bg-red-100 border border-red-400 text-red-700 p-2 rounded mb-4'>
          <p>{error.message}</p>
        </div>
      )}
      {showSuccessMessage && !error && (
        <div className='bg-green-100 border border-green-400 text-green-700 p-2 rounded mb-4'>
          <p>Login successful! Redirecting...</p>
        </div>
      )}
      <button
        onClick={handleLogin}
        className={`w-full bg-green-700 text-white p-2 rounded ${
          loading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={loading}
      >
        {loading ? 'Logging in...' : 'Log in'}
      </button>
    </div>
  )
}

export default Login
