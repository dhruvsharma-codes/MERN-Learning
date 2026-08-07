import { Link, NavLink } from "react-router-dom";
import { Bell, ChevronDown, Menu, Search, User, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Products", to: "/products" },
    { name: "Services", to: "/services" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50  bg-white/80 backdrop-blur-lg shadow-md">
      <nav className="px-6 py-2 lg:px-8 flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <h1 className="text-2xl text-blue-600 font-bold tracking-wide">
          <Link to="/">TechLife</Link>
        </h1>
        {/* Desktop menu */}
        <div className="md:flex items-center gap-8 hidden">
          {navLinks.map((link) => (
            <NavLink
              to={link.to}
              key={link.name}
              className={({ isActive }) =>
                `relative text-gray-700 hover:text-blue-600 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 hover:after:w-full after:bg-blue-600 transition after:transition-all duration-300 
    ${
      isActive
        ? "text-blue-600 after:w-full"
        : "hover:text-blue-600 after:w-0 hover:after:w-full"
    }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        {/* Right Side */}
        <div className="md:flex items-center gap-4 hidden">
          {/* Search */}
          <button className="rounded-full p-2 hover:bg-gray-300 transition">
            <Search size={20} />
          </button>
          {/* Notification */}
          <button className="relative rounded-full p-2 hover:bg-gray-300 transition">
            <Bell size={20} />
            <span className="rounded-full absolute right-2 top-2 h-2 w-2 bg-red-500"></span>
          </button>
          {/* Profile */}
          <div className="relative">
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-2 rounded-full border px-2 py-1 transition hover:bg-gray-300"
            >
              <User size={20} />
              <ChevronDown size={17} />
            </button>
            {profileOpen && (
              <div className="absolute right-0 mt-3 w-48 py-2 rounded-xl border shadow-lg bg-white">
                <Link
                  to="/profile"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Profile
                </Link>
                <Link
                  to="/profile"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Settings
                </Link>
                <hr />
                <button className="w-full px-4 py-2 text-left text-red-500 hover:bg-red-50">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>
      {/* Mobile Menu */}
      <div
        className={`absolute  left-0 w-full overflow-hidden md:hidden bg-white transition-all duration-300 ${mobileOpen ? "max-h-screen" : "max-h-0"}`}
      >
        <div className="space-y-2 p-5">
          {navLinks.map((link) => (
            <NavLink
            onClick={()=>setMobileOpen(false)}
              to={link.to}
              key={link.name}
              className={({ isActive }) =>
                `rounded-lg block px-3 py-2 transition hover:bg-gray-100   ${
                  isActive ? "text-blue-600" : "hover:text-blue-600"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <hr />

          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-100">
            <Search size={18} />
            Search
          </button>

          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-100">
            <Bell size={18} />
            Notifications
          </button>

          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-100">
            <User size={18} />
            Profile
          </button>
          <button className="w-full rounded-lg bg-red-500 py-2 text-white hover:bg-red-600">
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
