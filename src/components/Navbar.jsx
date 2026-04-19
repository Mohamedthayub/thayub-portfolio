import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-500 font-semibold border-b-2 border-blue-500 pb-1"
      : "text-gray-300 hover:text-white font-semibold pb-1";
      {navLinkClass}
  return ( 
    <header className="bg-black flex justify-around items-center p-4 border-b-1 border-white">
      <h2 className="italic font-bold text-2xl text-white cursor-pointer">
        Mohamed Thayub
      </h2>

      <nav className="flex gap-6">
        <NavLink to="/"  className={navLinkClass}>
          Home
        </NavLink>

        <NavLink to="/about" className={navLinkClass}>
          About
        </NavLink>

        <NavLink to="/skills" className={navLinkClass}>
          Skills
        </NavLink>

        <NavLink to="/projects" className={navLinkClass}>
          Projects
        </NavLink>

        <NavLink to="/contact" className={navLinkClass}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;