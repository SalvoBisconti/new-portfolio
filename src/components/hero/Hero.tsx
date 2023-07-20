import Button from "../button";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";
import Link from "next/link";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { linkTo } from "@/utils/func";

const Hero = () => {
  return (
    <div
      className="p-3 w-screen h-[calc(95vh)] flex flex-col justify-center items-center bg-[#100c084c] "
      id="home"
    >
      <AnimationOnScroll
        animateIn="animate__zoomInDown"
        animatePreScroll={true}
        initiallyVisible={true}
      >
        <div className="flex flex-col justify-center items-center  ">
          <h2 className="text-3xl md:text-5xl text-white">
            CIAO <span className="">👋🏻</span> ! SONO
          </h2>
          <h2 className="text-3xl md:text-5xl">SALVATORE</h2>
          <p className=" md:p-10 md:w-screen  w-[70%] py-4 text-center">
            Un <span className="">Front-end developer </span>
            che ama creare applicazioni web
          </p>
          <Button text="Scarica curriculum" />
        </div>

        <ul className="absolute top-[35%] left-2 flex flex-col gap-10 justify-center text-3xl md:text-4xl md:left-8 text-[#b63f39]  ">
          <li className="hover:text-[#ff6961]">
            <button
              className="w-[48px] h-[48px]"
              onClick={() => linkTo("https://www.instagram.com/salvo_bisco/")}
            >
              <AiFillInstagram />
            </button>
          </li>
          <li className="hover:text-[#ff6961]">
            <button
              className="w-[48px] h-[48px]"
              onClick={() => linkTo("https://linkedin.com/in/salvo-bisconti")}
            >
              <AiFillLinkedin />
            </button>
          </li>
          <li className="hover:text-[#ff6961]">
            <button
              className="w-[48px] h-[48px]"
              onClick={() => linkTo("https://github.com/SalvoBisconti")}
            >
              <AiFillGithub />
            </button>
          </li>
          <li className="hover:text-[#ff6961]">
            <button
              className="w-[48px] h-[48px]"
              onClick={() => linkTo("mailto:salvatorebisconti98@gmail.com")}
            >
              <SiGmail />
            </button>
          </li>
        </ul>
      </AnimationOnScroll>
    </div>
  );
};

export default Hero;
