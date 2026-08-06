import { Route, Routes } from "react-router-dom"
import Layout from "./Layout/Layout"
import Login from "./Pages/Login"
import Home from "./Pages/Home"

const App = () => {
  return (
    <div className="mx-2 my-3">
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="/login" element={<Login/>} />
      </Route>
    </Routes>
    </div>
  )
}

export default App
