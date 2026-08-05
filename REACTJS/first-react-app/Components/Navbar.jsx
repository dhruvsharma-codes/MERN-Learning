import {Link} from "react-router-dom"
import { createPortal} from "react-dom"
const Navbar = () => {
  return createPortal (
    <div className="w-full bg-gray-700 border-none flex items-center px-3 py-4 justify-evenly text-white">
        <h1>Logo</h1>
        <div className="flex items-center gap-8">
    <Link to={"/"}  >
    Home
    </Link>
    <Link to={"/about"}  >
    About
    </Link>
    <Link to={"/contact"}  >
    Contact
    </Link>
    <Link to={"/login"}  >
    Login
    </Link>
        </div>
    </div>,
  document.getElementById("navbar-root")
  )
}

export default Navbar
