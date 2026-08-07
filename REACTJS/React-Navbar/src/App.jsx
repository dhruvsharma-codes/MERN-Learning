import { Route, Routes } from "react-router-dom"
import Layout from "./Layout/Layout"
import Products from "./Pages/Products"
import Home from "./Pages/Home"
import Services from "./Pages/Services"
import About from "./Pages/About"
import Contact from "./Pages/Contact"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="/products" element={<Products/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
