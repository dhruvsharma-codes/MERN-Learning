import { useRef } from "react";
import { useState } from "react";

const Form = () => {
  const abc = useRef();

  const handleClick = () =>{
abc.current.style.backgroundColor = "red";
  }
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("successfull Logined");
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };
  return (
    <div className="w-full h-screen">
      <h1 className="text-center text-3xl text-gray-700 font-medium">
        React Form
      </h1>
      <div className="w-100 border rounded-2xl flex flex-col gap-4 px-4 py-3 border-gray-300 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <h2 className="text-xl text-center text-gray-700">
          Welcome To my Form
        </h2>
        <form className="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">Name</label>
            <input 
            className="w-full px-4 py-3 mb-4 border outline-none rounded focus:outline-1 outline-blue-300 "
              type="text"
              required
              name="name"
              value={formData.name}
              autoComplete="name"
              onChange={handlechange}
            />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input 
            className="w-full px-4 py-3 mb-4 border outline-none rounded focus:outline-1 outline-blue-300 "
              type="email"
              required
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handlechange}
            />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input 
            className="w-full px-4 py-3 mb-4 border outline-none rounded focus:outline-1 outline-blue-300 "
              type="password"
              required
              name="password"
              autoComplete="password"
              value={formData.password}
              onChange={handlechange}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
      <button onClick={handleClick} ref={abc}>click</button>
    </div>
  );
};

export default Form;
