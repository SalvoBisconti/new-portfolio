import List from "../list";
import { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const onHandleClick = (): void => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <div className="h-[80px] z-10 bg-[#100c08] fixed w-screen p-3  flex justify-between items-center shadow-sm shadow-[#ff6961]">
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

      <List
        display="hidden"
        direction="flex-row"
        gap=""
        height=""
        text="text-xl"
        align=""
        setOpenMenu={setOpenMenu}
      />

      <div
        className={` ${
          openMenu ? " right-0  delay-75 " : "h-0 w-0    "
        } z-10 fixed h-screen w-screen  bg-[#161a1d] top-[0px] right-[-1000px] p-3  flex justify-center items-center md:hidden  transition-all duration-500`}
      >
        <List
          display={` ${openMenu ? "block" : "hidden"} `}
          direction={` ${openMenu ? "flex-col" : "flex-row"} `}
          gap={` ${openMenu ? "gap-8" : ""} `}
          height={` ${openMenu ? "h-1/2" : ""} `}
          text={` ${openMenu ? "text-4xl" : ""} `}
          align={` ${openMenu ? "items-center" : ""} `}
          setOpenMenu={setOpenMenu}
        />
      </div>
    </div>
  );
};

export default Navbar;
