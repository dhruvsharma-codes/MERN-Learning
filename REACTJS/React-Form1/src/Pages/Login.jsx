import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    budget: "",
    description: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = JSON.stringify(formData);
    console.log(data);
    alert(`Thank you for submitting form ${formData.name}!`);
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      budget: "",
      description: "",
    });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-8 px-4">
      <div className="w-full h-160 max-w-3xl bg-white shadow-2xl flex overflow-hidden">
        {/* Left Section */}
        <div className="w-[58%] bg-[#172939] text-white px-8 py-10">
          <h1 className="text-3xl font-bold mb-8">Why Zenork?</h1>
          <div className="space-y-3 text-[15px] leading-5 text-gray-200">
            <p>
              Aliquam molestie arcu vitae libero dignissim pellentesque.
              Phasellus faucibus velit rhoncus euismod scelerisque. In faucibus
              diam sit amet orci tincidunt tempor.
            </p>
          </div>
          <ul className="mt-8 space-y-3">
            <li className="flex items-start gap-4">
              <span className="text-yellow-400 text-xs mt-2">■</span>
              <span>
                Aliquam molestie arcu vitae libero dignissim pellentesque.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-yellow-400 text-xs mt-2">■</span>
              <span>Phasellus faucibus velit rhoncus euismod scelerisque.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-yellow-400 text-xs mt-2">■</span>
              <span>In faucibus diam sit amet orci tincidunt tempor.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-yellow-400 text-xs mt-2">■</span>
              <span>Phasellus faucibus velit rhoncus euismod scelerisque.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-yellow-400 text-xs mt-2">■</span>
              <span>In faucibus diam sit amet orci tincidunt tempor.</span>
            </li>
          </ul>

          <hr className="border-gray-600 my-6" />
          <h2 className="text-2xl text-center font-bold">
            Call us on: 9033649788
          </h2>
        </div>

        {/* Right Section */}
        <div className="w-[58%] px-8 py-10">
          <h1 className="text-3xl font-bold mb-2">
            Hire us to help you build things
          </h1>
          <p className="text-gray-400 mb-8">
            We design and develop solutions that solve users' problems.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={changeHandler}
              required
              className="w-full border-b border-gray-300 py-3 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={changeHandler}
              required
              className="w-full border-b border-gray-300 py-3 outline-none"
            />

            <input
              type="text"
              name="company"
              placeholder="Your Company"
              value={formData.company}
              onChange={changeHandler}
              required
              className="w-full border-b border-gray-300 py-3 outline-none"
            />

            <div className="grid grid-cols-2 gap-8">
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={changeHandler}
                required
                className="border-b border-gray-300 py-3 outline-none"
              />

              <input
                type="text"
                name="budget"
                placeholder="Budget"
                value={formData.budget}
                onChange={changeHandler}
                required
                className="border-b border-gray-300 py-3 outline-none"
              />
            </div>

            <textarea
              name="description"
              placeholder="Brief Project Description"
              value={formData.description}
              onChange={changeHandler}
              required
              rows="2"
              className="w-full border-b border-gray-300 py-3 outline-none resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-700 transition text-white font-semibold py-4 rounded uppercase"
            >
              Request a Quote
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
