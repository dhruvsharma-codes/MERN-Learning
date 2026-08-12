import { useState } from "react";
import { useReducer } from "react";

function App() {
  const [list,setList] = useState([]);
  const handleData = async()=>{
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log(data.products);
    setList(data.products);
    // console.log(list);
  }
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
        case "decrement":
          return { count: state.count - 1 };
          default:
            return state;
          }
        };
        const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>
        -
      </button>
      <button onClick={handleData}>click me</button>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 mt-3 max-w-6xl px-5 py-2 mx-auto">
      {list?.map((item)=>(
        <div className="w-full hover:shadow-gray-500 group duration-300 transition-shadow shadow-lg rounded-xl px-2 py-3 border border-gray-100" key={item.id}>
<img className="group-hover:scale-105 duration-300 transition-transform w-full bg-cover bg-center" src={item.images[0]} alt={item.id} />
<h1 className="text-left lg:text-xl text-lg font-bold overflow-hidden">{item.title}</h1>
<span className="w-full group-hover:text-red-400 text-sm text-gray-700 font-medium">$ {item.price}</span>
        </div>
      ))}
      </div>
    </>
  );
}

export default App;