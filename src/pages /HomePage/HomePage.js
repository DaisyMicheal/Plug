import NavHeader from '../../Components/HomeSection /Header/NavHeader'
import Feature from '../../Components/HomeSection /Slides/Feature'
import Trend from '../../Components/HomeSection /Slides/Trend'
import Trending from '../../Components/HomeSection /Slides/Trending'
import MostViewed from '../../Components/HomeSection /Slides/MostViewed'
import Post from '../../Components/HomeSection /Slides/Post'
import Main from '../../Components/HomeSection /Slides/Main'

import Footer from '../../Components/HomeSection /Header/Footer'

const Home = () => {
  return (
    <>
      <NavHeader />
      <Main />
      <Feature />
      <MostViewed />
      <Trending />
      <Post />
      <Trend />
      <Footer />
    </>
  )
}

export default Home
