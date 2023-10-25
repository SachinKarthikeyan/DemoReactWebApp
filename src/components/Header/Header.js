import './Header.css';
import { FaUser} from "react-icons/fa";

export default function Header() {
    return(
      <div className="navbar">
        <div className="nav-right">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a>Features</a>
          <FaUser className='icon'/>
        </div>
    </div>
    )
}

