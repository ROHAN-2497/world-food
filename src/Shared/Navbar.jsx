import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" flex justify-between items-center h-24  px-4 bg-black text-white">
      {/* Logo */}
      <h1 className="w-full text-3xl font-bold text-white">
        World Food<span className="text-[#f5ce35]">.</span>
      </h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex pr-20">
        <li className="p-2 hover:bg-[#f5ce35] rounded m-2 cursor-pointer duration-300 hover:text-black">
          <Link to="/">Home</Link>
        </li>
        <li className="p-2 hover:bg-[#f5ce35] rounded m-2 cursor-pointer duration-300 hover:text-black">
          <Link to="/menu">Menu</Link>
        </li>
        <li className="p-2 hover:bg-[#f5ce35] rounded m-2 cursor-pointer duration-300 hover:text-black">
          <Link to="/menu">Our Menu</Link>
        </li>
        <li className="p-2 hover:bg-[#f5ce35] rounded m-2 cursor-pointer duration-300 hover:text-black">
          <Link to="/menu">Our Menu</Link>
        </li>
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          World Food.
        </h1>

        {/* Mobile Navigation Items */}
        <li className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600">
          {" "}
          <Link to="/menu">Home</Link>
        </li>
        <li className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600">
          {" "}
          <Link to="/menu">Menu</Link>
        </li>
        <li className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600">
          {" "}
          <Link to="/menu"> Home</Link>
        </li>
        <li className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600">
          {" "}
          <Link to="/menu"> Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
