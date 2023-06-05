import List from "../list";

const Navbar = () => {
  return (
    <div className="h-12 w-screen border-2 p-3 border-black flex justify-between items-center ">
      <h2 className="font-mono">
        <span className="text-lime-500"> {"<"} </span>
        Salvatore Bisconti <span className="text-lime-500"> {"/>"} </span>
      </h2>
      <button className="relative group md:hidden">
        <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[40px] h-[40px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
          <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
            <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:rotate-[42deg]"></div>
            <div className="bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-translate-x-10"></div>
            <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg]"></div>
          </div>
        </div>
      </button>

      <List display="hidden" />
    </div>
  );
};

export default Navbar;
