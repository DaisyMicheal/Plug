import CreatePost from './CreatePost'
import Home from './Home'
import Notifications from './Notifications'
import ProfileLink from './ProfileLink'
import Search from './Search'
import Message from './Message'
import Community from './community'

const SidebarItems = () => {
  return (
    <>
      <Home />
      <Search />
      <Notifications />
      <Message />
      <Community />
      <CreatePost />
      <ProfileLink />
    </>
  )
}

export default SidebarItems
