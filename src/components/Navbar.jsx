const Navbar = () => {
    return(
        <div className="bg-black flex justify-around p-4">
            <h2  className="italic font-bold text-2xl text-white cursor-pointer">Mohamed Thayub</h2>
            <div className="flex ">
                <p className="font-semibold text-white cursor-pointer">Home</p>
                <p className="font-semibold text-white ml-6 cursor-pointer">About</p>
                <p className="font-semibold text-white ml-6 cursor-pointer">Skills</p>
                <p className="font-semibold text-white ml-6 cursor-pointer">Contact</p>
            </div>
        </div>
    )
}
export default Navbar;