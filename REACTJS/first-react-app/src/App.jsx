import Form from './Form'
import { Routes, Route } from "react-router-dom"
import Layout from '../Layout/Layout'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
// import { cars } from './assets/data';

function App() {
  // const [count, setCount] = useState(0);

  // using map
  // let cars = ['Ford','Toyota','BMW','Audi'];

  return (
    <>
      {/* <h1>Hello World!</h1>
      <button 
      type='button' 
      onClick={() => setCount(count + 1)}>
        Count is {count}
        </button> */}

      {/* <h1>My Cars:- </h1> */}
      {/* using map */}
      {/* {cars.map((car,index)=><li key={index}>I am a car {car}</li>)} */}


      {/* using map with data assets */}
      {/* {cars.map((car)=>{
          return <div  key={car.id}>
            <li>I am {car.name}</li>
            <li>I am {car.color}</li>
          </div>
})} */}
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='login' element={<Form/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
