import computerImgage from "../assets/computer.jpg";
const Home = () => {
    return (
        <div className="h-[100vh] flex items-center justify-around   bg-black no-scrollbar overflow-x-auto">
            <div className="text-white">
                <h2 className="text-3xl" >Hi, I'm Thayub</h2>
                <h3 className="mt-3 font-bold text-blue-800 hover:text-blue-700">Frontend Developer</h3>
                <p className="mt-3 font-medium">I build fast, scalable web applications.</p>
                <div className="mt-4">
                    <button className="bg-blue-800 text-white p-2 rounded-md font-bold cursor-pointer hover:bg-blue-700"  type="button">View Projects</button>
                    <button className="bg-blue-800 text-white p-2 rounded-md font-bold ml-4 cursor-pointer hover:bg-blue-700">Contact Me</button>
                </div>
            </div>
            <div>
                <img src={computerImgage} alt="image" className="w-92 h-92 rounded-lg"/>
            </div>
        </div>
    )
}
export default Home;