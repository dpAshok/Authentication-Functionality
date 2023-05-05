// Write your JS code here
import Header from '../Header'
import './index.css'
import LogoutButton from '../LogoutButton'

const Home = () => (
  <>
    <div className="home_container">
      <Header />
      <h1>Home Route</h1>
      <LogoutButton />
    </div>
  </>
)

export default Home
