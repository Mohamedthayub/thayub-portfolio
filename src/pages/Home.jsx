import computerImgage from "../assets/images/computer.jpg";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center px-20 bg-black text-white overflow-hidden flex-col sm:justify-around sm:flex-row">
      
      <div className="mt-10">
        <h2 className="text-4xl font-bold">Hi, I'm Thayub</h2>

        <h3 className="mt-4 text-2xl font-semibold text-blue-500">
          Frontend Developer
        </h3>

        <p className="mt-4 text-lg text-gray-300">
          I build fast, scalable web applications.
        </p>

        <div className="mt-6 flex gap-4">
          <button className="bg-blue-600 px-5 py-2 rounded-lg font-semibold hover:bg-blue-500">
            View Projects
          </button>

          <button className="border border-blue-500 px-5 py-2 rounded-lg font-semibold hover:bg-blue-500">
            Contact Me
          </button>
        </div>
      </div>

      <div className="mt-10">
        <img
          src={computerImgage}
          alt="computer"
          className="w-[380px] h-[300px] object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Home;