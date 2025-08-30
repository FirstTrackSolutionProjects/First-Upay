import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const NavBar = ({toggleSideBar}) => {
  return (
    <nav className="bg-gradient-to-r from-blue-400 via bg-purple-500 to-pink-500 text-white px-6 py-3 flex justify-between items-center shadow-lg">
       <Link to="/" className="text-2xl font-bold">
        UPI Pay
      </Link>
      <div className=" hidden md:flex gap-6  space-x-6">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact Us</Link>
      </div>

       <button
        onClick={toggleSideBar}
        className="md:hidden text-2xl focus:outline-none"
      >
        <FiMenu />
      </button>
    </nav>
  );
};

export default NavBar;
