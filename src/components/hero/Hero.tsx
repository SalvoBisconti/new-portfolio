import Button from "../button";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { saveFile, linkTo } from "@/utils/func";

const Hero = () => {
  return (
    <div
      className="p-3 w-screen h-[calc(95vh)] flex flex-col justify-center items-center bg-first "
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
          <Button
            text="Download CV"
            display="block"
            onClickFunc={saveFile}
            icon="download"
          />
        </div>

        <ul className="absolute top-[35%] left-2 flex flex-col gap-10 justify-center text-3xl md:text-4xl md:left-8 text-strongSecond  ">
          <li className="hover:text-second">
            <button
              className="w-[48px] h-[48px]"
              onClick={() =>
                linkTo("https://www.instagram.com/salvo_bisco/", "_blank")
              }
            >
              <AiFillInstagram />
            </button>
          </li>
          <li className="hover:text-second">
            <button
              className="w-[48px] h-[48px]"
              onClick={() =>
                linkTo("https://linkedin.com/in/salvo-bisconti", "_blank")
              }
            >
              <AiFillLinkedin />
            </button>
          </li>
          <li className="hover:text-second">
            <button
              className="w-[48px] h-[48px]"
              onClick={() =>
                linkTo("https://github.com/SalvoBisconti", "_blank")
              }
            >
              <AiFillGithub />
            </button>
          </li>
          <li className="hover:text-second">
            <button
              className="w-[48px] h-[48px]"
              onClick={() =>
                linkTo("mailto:salvatorebisconti98@gmail.com", "_blank")
              }
            >
              <SiGmail />
            </button>
          </li>
        </ul>
      </AnimationOnScroll>
      <h2 className="absolute bottom-[44vw] -right-[14vw] -rotate-[38deg] text-[23vw] -z-20 text-[#36454F] md:bottom-[26vw] md:right-[4vw] md:text-[150px] xl:right-[10vw] xl:bottom-[16vw] xl:text-[230px] xl:-rotate-[25deg]  transition-all">
        {" "}
        DEVELOPER
      </h2>
    </div>
  );
};

export default Hero;
