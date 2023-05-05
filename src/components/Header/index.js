// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <>
    <div className="links_container">
      <Link to="/" className="links">
        <li>Home</li>
      </Link>
      <Link to="/about" className="links">
        <li>About</li>
      </Link>
    </div>
  </>
)

export default Header
