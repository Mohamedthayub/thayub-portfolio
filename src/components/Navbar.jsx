import { NavLink } from "react-router-dom";
const Navbar = () => {
    return(
        <header className="bg-black flex justify-around p-4">
            <h2  className="italic font-bold text-2xl text-white cursor-pointer">Mohamed Thayub</h2>
            <div className="flex ">
                <NavLink to="/"><p className="font-semibold text-white cursor-pointer">Home</p></NavLink>
                <NavLink to="about"><p className="font-semibold text-white ml-6 cursor-pointer">About</p></NavLink>
                <NavLink to="skills"><p className="font-semibold text-white ml-6 cursor-pointer">Skills</p></NavLink>
                <NavLink to="projects"><p className="font-semibold text-white ml-6 cursor-pointer">Projects</p></NavLink>
                <NavLink to="contact"><p className="font-semibold text-white ml-6 cursor-pointer">Contact</p></NavLink>
            </div>
        </header>
    )
}
export default Navbar;
