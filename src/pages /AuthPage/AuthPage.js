import AuthForm from '../../Components/AuthForm/AuthForm'

const AuthPage = () => {
  return (
    <div className='flex min-h-screen justify-center items-center px-4'>
      <div className='container max-w-md p-0'>
        <div className='flex justify-center items-center gap-10'>
          <div className='flex flex-col space-y-4 items-stretch'>
            <AuthForm />
            <div className='text-center'>Get the app.</div>
            <div className='flex gap-5 justify-center'>
              <img src='/playstore.png' className='h-10' alt='Playstore logo' />
              <img src='/microsoft.png' className='h-10' alt='Microsoft logo' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthPage
