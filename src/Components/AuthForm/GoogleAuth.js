import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { auth, firestore } from '../../firebase/firebase'
import useShowToast from '../../hooks/useShowToast'
import useAuthStore from '../../store /authStore'
import { doc, getDoc, setDoc } from 'firebase/firestore'

const GoogleAuth = ({ prefix }) => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
  const showToast = useShowToast()
  const loginUser = useAuthStore((state) => state.login)

  const handleGoogleAuth = async () => {
    try {
      const newUser = await signInWithGoogle()
      if (!newUser) throw new Error('No user returned from signInWithGoogle')

      const userRef = doc(firestore, 'users', newUser.user.uid)
      const userSnap = await getDoc(userRef)

      if (userSnap.exists()) {
        const userDoc = userSnap.data()
        localStorage.setItem('user-info', JSON.stringify(userDoc))
        loginUser(userDoc)
      } else {
        const userDoc = {
          uid: newUser.user.uid,
          email: newUser.user.email,
          username: newUser.user.email.split('@')[0],
          fullName: newUser.user.displayName,
          bio: '',
          profilePicURL: newUser.user.photoURL,
          followers: [],
          following: [],
          posts: [],
          createdAt: Date.now(),
        }
        await setDoc(doc(firestore, 'users', newUser.user.uid), userDoc)
        localStorage.setItem('user-info', JSON.stringify(userDoc))
        loginUser(userDoc)
      }
    } catch (error) {
      console.error('Google sign-in error:', error)
      showToast(
        'Error',
        error.message || 'Failed to sign in with Google.',
        'error'
      )
    }
  }

  return (
    <div
      className='flex items-center justify-center cursor-pointer'
      onClick={handleGoogleAuth}
    >
      <img src='/google.png' className='w-5' alt='Google logo' />
      <span className='mx-2 text-blue-500'>{prefix} with Google</span>
    </div>
  )
}

export default GoogleAuth
