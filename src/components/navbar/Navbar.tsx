import List from "../list";
import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const onHandleClick = (): void => {
    setOpenMenu((prev) => !prev);
  };

  const [scroll, setScroll] = useState<number>(0);

  const onHandleScroll = () => {
    const position = window.scrollY;
    setScroll(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", onHandleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onHandleScroll);
    };
  }, []);

  return (
    <div
      className={`h-[70px] md:h-[45px] z-10 bg-trasparent fixed w-screen p-3  flex justify-between items-center transition-all duration-700 ${
        scroll > 0 &&
        " absolute  md:bg-[#100c08] md:shadow-sm md:shadow-second md:fixed "
      }`}
    >
      <h1
        className={` font-mono text-white font-bold md:text-xl text-lg transition-all duration-1000   ${
          scroll > 0 && "md:text-lg"
        }`}
        id="prova"
      >
        <Typewriter
          options={{
            strings: [
              '<strong> < <span style="color: #ff6961;">Salvo Bisconti</span> /></strong>',
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <button
        className={` group md:hidden z-30  ${
          scroll > 0 && "fixed top-4 right-3"
        }`}
        onClick={onHandleClick}
      >
        <div
          className={`relative flex overflow-hidden items-center justify-center rounded-full w-[48px] h-[48px] transform transition-all bg-[#161a1d] ring-0 ring-gray-300 hover:ring-4 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md ${
            scroll > 0 && " ring-4 ring-opacity-30 bg-second "
          } `}
        >
          <div className="flex flex-col justify-between w-[24px] h-[24px] transform transition-all duration-300 origin-center overflow-hidden ">
            <div
              className={`bg-second h-[3px] w-8 rounded transform transition-all duration-300 origin-left  ${
                openMenu && "rotate-[42deg]"
              } ${scroll > 0 && "bg-white"}
              `}
            ></div>
            <div
              className={`bg-second h-[3px] w-2/3 rounded transform transition-all duration-300  0 ${
                openMenu && "hidden"
              } ${scroll > 0 && "bg-white"}`}
            ></div>
            <div
              className={`bg-second h-[3px] w-8 rounded transform transition-all duration-300 origin-left ${
                openMenu && "-rotate-[42deg]"
              } ${scroll > 0 && "bg-white"}`}
            ></div>
          </div>
        </div>
      </button>

      <List
        display="hidden"
        direction="flex-row"
        gap=""
        height=""
        text={` ${scroll > 0 ? "text-lg" : "text-xl"} `}
        align=""
        setOpenMenu={setOpenMenu}
      />

      <div
        className={`  ${
          openMenu ? " right-[0px] " : "h-0 w-0    "
        } z-20 fixed h-screen w-screen   bg-[#161a1d] top-[0px] right-[-1000px] p-3  flex justify-center items-center md:hidden  transition-all duration-[1300ms]`}
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
