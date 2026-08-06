import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="w-full px-4 shadow-xl rounded-xl py-3 bg-blue-500 flex justify-between text-white font-medium items-center sticky z-10 top-0">
      <h1 className="text-xl">
     <Link to={"/"}>
     Logo
     </Link>
      </h1>
      <button className="px-4 py-2 rounded-xl bg-white text-blue-500 hover:scale-x-110 transition-all duration-300">
        <Link to={"/login"}>
        Login
        </Link>
      </button>
    </div>
  )
}

export default Navbar
