import { Link } from "react-router-dom"
import { lazy, Suspense } from "react"
const Item = lazy(()=>import("../Components/Item"))

const Home = () => {
  return (
    <div className="mt-10">
    <div className="text-center rounded-xl text-xl bg-blue-700 px-10 py-20 text-white">
      <Link to={"/"}>
      I am Home Page
      </Link>
    </div>
    <Suspense fallback={<div className="text-center mt-10 text-xl">Loading...</div>}>
    <Item/>
    </Suspense>
    </div>
  )
}

export default Home
