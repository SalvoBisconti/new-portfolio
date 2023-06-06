import List from "../list";
import { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const onHandleClick = (): void => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <div className="h-15 w-screen border-2 p-3 border-white flex justify-between items-center ">
      <h2 className="font-mono">
        <span className={"text-lime-500"}> {"<"} </span>
        Salvatore Bisconti <span className="text-lime-500"> {"/>"} </span>
      </h2>
      <button
        className="relative group md:hidden z-20 "
        onClick={onHandleClick}
      >
        <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[40px] h-[40px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
          <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
            <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:rotate-[42deg]"></div>
            <div className="bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-translate-x-10"></div>
            <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg]"></div>
          </div>
        </div>
      </button>

      <List display="hidden" />

      <div
        className={` ${
          openMenu ? "h-4/6 w-4/6" : "h-0 w-0 -top-20 "
        } z-10 absolute  bg-lime-500 top-0 right-[-100px] rounded-s-full  border-2 p-3 border-lime flex justify-between items-center md:hidden`}
      >
        <List display={` ${openMenu ? "block" : "hidden"} `} />
        {/* <button
          className={` ${openMenu ? "block" : "hidden"} `}
          onClick={onHandleClick}
        >
          {" "}
          X{" "}
        </button> */}
      </div>
    </div>
  );
};

export default Navbar;
