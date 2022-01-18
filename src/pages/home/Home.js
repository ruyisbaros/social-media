import Topbar from '../../components/topbar/Topbar'
import './home.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'

const Home = () => {
  return (
   <>
   <Topbar/>
   <div className="homecontainer">
   <Sidebar/>
   <Feed/>
   <Rightbar/>
   </div>
   </>
  )
}

export default Home
