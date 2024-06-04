import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const userProfiles = {
  marvellousamani: {
    avatar:
      'https://i.pinimg.com/236x/28/6c/76/286c760f394af0190adb44a1134c0790.jpg',
    name: 'Marvellous Amani',
  },
  kodielz: {
    avatar:
      'https://i.pinimg.com/236x/3d/98/dd/3d98ddb5a4292888ab8ec371df03b593.jpg',
    name: 'Kodielz',
  },
  phileoareal_: {
    avatar:
      'https://i.pinimg.com/236x/3c/77/59/3c77599851e6a230da8b721e52bfb5e5.jpg',
    name: 'Phileo Areal',
  },
  vickyforr: {
    avatar:
      'https://i.pinimg.com/236x/d2/6e/98/d26e98ced6791cf4d2139ccb96a8ccf3.jpg',
    name: 'Vicky Forr',
  },
  lawreby: {
    avatar:
      'https://i.pinimg.com/236x/59/6c/15/596c1546d75abd6d1ca672f0ec33284c.jpg',
    name: 'Lawreby',
  },
}

const notifications = [
  { user: 'marvellousamani', action: 'started following you.', time: '2d' },
  {
    user: 'kodielz',
    action: 'mentioned you in a comment: @daisyoreal 🔥🔥',
    time: '3w',
  },
  { user: 'kodielz', action: 'liked your comment: 🔥🔥', time: '3w' },
  { user: 'phileoareal_', action: 'started following you.', time: '4w' },
  { user: 'vickyforr', action: 'liked your post.', time: '8w' },
  { user: 'lawreby', action: 'liked your comment: ❤️❤️', time: '8w' },
  { user: 'vickyforr', action: 'liked your post.', time: '8w' },
]

const NotificationsPanel = ({ isVisible, onClose }) => {
  return (
    <div
      className={`fixed inset-y-0 right-0 transform ${
        isVisible ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out w-80 bg-gray-800 text-white shadow-lg z-50`}
    >
      <div className='p-4'>
        <h3 className='font-bold'>Notifications</h3>
        <div className='mt-2'>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className='flex items-center py-2 border-b border-gray-700 last:border-0'
            >
              <div className='w-10 h-10 rounded-full bg-gray-500 mr-3'>
                {userProfiles[notification.user] && (
                  <img
                    src={userProfiles[notification.user].avatar}
                    alt={userProfiles[notification.user].name}
                    className='w-full h-full rounded-full object-cover'
                  />
                )}
              </div>
              <div className='text-sm'>
                <span className='font-bold'>
                  {userProfiles[notification.user]
                    ? userProfiles[notification.user].name
                    : notification.user}
                </span>{' '}
                {notification.action}
                <span className='block text-xs text-gray-400'>
                  {notification.time}
                </span>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-gray-400 hover:text-white'
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </div>
  )
}

export default NotificationsPanel
