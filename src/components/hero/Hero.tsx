import Button from "../button";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";
import Link from "next/link";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

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
            HI THERE <span className="">👋🏻</span> ! I'M
          </h2>
          <h2 className="text-3xl md:text-5xl">SALVATORE</h2>
          <p className=" md:p-10 md:w-screen  w-[70%] py-4 text-center">
            A <span className="">Front-end developer </span>
            passionate about creating interactive applications and experiences
            on the web
          </p>
          <Button text="Download resume" />
        </div>

        <ul className="absolute top-[35%] left-2 flex flex-col gap-10 justify-center text-3xl md:text-4xl md:left-8 text-[#b63f39]  ">
          <li className="hover:text-[#ff6961]">
            <Link href="https://www.instagram.com/salvo_bisco/">
              <AiFillInstagram />
            </Link>
          </li>
          <li className="hover:text-[#ff6961]">
            <Link href="https://linkedin.com/in/salvo-bisconti">
              <AiFillLinkedin />
            </Link>
          </li>
          <li className="hover:text-[#ff6961]">
            <Link href="https://github.com/SalvoBisconti">
              <AiFillGithub />
            </Link>
          </li>
          <li className="hover:text-[#ff6961]">
            <Link href="mailto:salvatorebisconti98@gmail.com">
              <SiGmail />
            </Link>
          </li>
        </ul>
      </AnimationOnScroll>
    </div>
  );
};

export default Hero;
