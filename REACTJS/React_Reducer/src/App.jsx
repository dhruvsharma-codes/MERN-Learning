import { useState } from "react";
import { useReducer } from "react";

function App() {
  const [list, setList] = useState([]);
  const handleData = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log(data.products);
    setList(data?.products);
    // console.log(list);
  };

  // const filter = () => {
  //  const filteredData =  list.filter((filt)=> filt.category === "beauty"
  // )
  //   setList(filteredData);
  // };

  // const showAll = () => {setList(list)}
  
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
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={handleData} className="px-3 py-2 ml-3 rounded text-white bg-blue-500">click me</button>
      {/* <button className="px-3 py-2 ml-3 rounded text-white bg-blue-500" onClick={filter}>Filter</button> */}
      {/* <button onClick={showAll} className="px-3 py-2 ml-3 rounded text-white bg-blue-500">Show All</button> */}
      <div className="grid lg:grid-cols-4 rounded-xl md:grid-cols-3 grid-cols-2 gap-5 mt-3 max-w-6xl px-5 py-2 mx-auto">
        {list?.map((item) => {
            let discount = (item.price * item.discountPercentage) / 100;
            let newPrice = item.price - discount;
          return (
            <div
            className="w-full relative bg-white hover:shadow-gray-400 group duration-300 transition-shadow shadow-lg rounded-xl px-2 py-3 border border-gray-100"
            key={item.id}
            >
              <span className="rounded-full absolute right-2 bg-red-500 text-white px-2 py-1 text-sm">{item.discountPercentage.toFixed(1)}% Off</span>
            <img
              className="group-hover:scale-105 sm:w-60 duration-300 transition-transform w-full bg-cover bg-center"
              src={item.images[0]}
              alt={item.id}
              />
            <h1 className="text-left tracking-tighter text-lg line-clamp-1 font-bold text-gray-700">
              {item.title}
            </h1>
            <div className="flex gap-5">
            <span className="line-through duration-300 transition text-sm text-gray-700 font-medium">
              $ {item.price}
            </span>
            <span className="group-hover:text-red-400 group-hover:font-semibold text-sm text-gray-700 font-medium">
              $ {newPrice.toFixed(2)}
            </span>
            </div>
            <button className=" block w-25 h-8 hover:w-full duration-300 transition-[width] ease-in-out bg-red-500 rounded-xl mt-2 text-white font-medium text-sm">Add To Cart</button>
          </div>
            )
        })}
      </div>
    </>
  );
}

export default App;
