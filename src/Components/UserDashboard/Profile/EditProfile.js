import { useRef, useState } from 'react'
import useAuthStore from '../../../store /authStore'
import usePreviewImg from '../../../hooks/usePreviewImg'
import useEditProfile from '../../../hooks/useEditProfile'
import useShowToast from '../../../hooks/useShowToast'

const EditProfile = ({ isOpen, onClose }) => {
  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    bio: '',
  })
  const authUser = useAuthStore((state) => state.user)
  const fileRef = useRef(null)
  const { handleImageChange, selectedFile, setSelectedFile } = usePreviewImg()
  const { isUpdating, editProfile } = useEditProfile()
  const showToast = useShowToast()

  const handleEditProfile = async () => {
    try {
      await editProfile(inputs, selectedFile)
      setSelectedFile(null)
      onClose()
    } catch (error) {
      showToast('Error', error.message, 'error')
    }
  }

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-black border border-gray-500 shadow-xl mx-3 max-w-md w-full p-6'>
        <div className='flex justify-end'>
          <button onClick={onClose} className='text-white'>
            &times;
          </button>
        </div>
        <h2 className='text-2xl sm:text-3xl text-white font-semibold mb-4'>
          Edit Profile
        </h2>
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-6'>
            <div className='flex justify-center w-full'>
              <img
                src={selectedFile || authUser.profilePicURL}
                alt='Profile'
                className='w-24 h-24 rounded-full border-2 border-white'
              />
            </div>
            <div className='flex justify-center w-full'>
              <button
                onClick={() => fileRef.current.click()}
                className='bg-blue-500 text-white px-4 py-2 rounded'
              >
                Edit Profile Picture
              </button>
              <input
                type='file'
                hidden
                ref={fileRef}
                onChange={handleImageChange}
              />
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <label className='text-sm text-white'>Full Name</label>
            <input
              type='text'
              className='p-2 text-black rounded'
              placeholder='Full Name'
              value={inputs.fullName || authUser.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label className='text-sm text-white'>Username</label>
            <input
              type='text'
              className='p-2 text-black rounded'
              placeholder='Username'
              value={inputs.username || authUser.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label className='text-sm text-white'>Bio</label>
            <input
              type='text'
              className='p-2 text-black rounded'
              placeholder='Bio'
              value={inputs.bio || authUser.bio}
              onChange={(e) => setInputs({ ...inputs, bio: e.target.value })}
            />
          </div>
          <div className='flex gap-4 mt-4'>
            <button
              onClick={onClose}
              className='bg-red-500 text-white w-full py-2 rounded hover:bg-red-600'
            >
              Cancel
            </button>
            <button
              onClick={handleEditProfile}
              className='bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600'
              disabled={isUpdating}
            >
              {isUpdating ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProfile
