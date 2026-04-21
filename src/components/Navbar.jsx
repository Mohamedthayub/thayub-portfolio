import { NavLink } from "react-router-dom";
import NavButton from "../assets/images/humberger.png";

const Navbar = () => {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-500 font-semibold"
      : "text-gray-300 hover:text-white font-semibold";

  return (
    <header className="bg-black text-white border-b border-gray-700 px-6 py-4 flex justify-between items-center sm:justify-around">
      
      {/* Logo */}
      <h2 className="italic font-bold text-2xl cursor-pointer">
        Mohamed Thayub
      </h2>

      {/* Desktop Nav */}
      <nav className="hidden sm:flex gap-6">
        <NavLink to="/" className={navLinkClass}>Home</NavLink>
        <NavLink to="/about" className={navLinkClass}>About</NavLink>
        <NavLink to="/skills" className={navLinkClass}>Skills</NavLink>
        <NavLink to="/projects" className={navLinkClass}>Projects</NavLink>
        <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
      </nav>

      {/* Mobile Hamburger */}
      <img
        src={NavButton}
        alt="menu"
        className="w-8 h-8 sm:hidden cursor-pointer"
      />
    </header>
  );
};

export default Navbar;