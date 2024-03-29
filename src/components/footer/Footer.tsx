import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { linkTo } from "@/utils/func";
import Button from "../button";

const Footer = () => {
  return (
    <div className="h-[250px] bg-second text-black w-screen ">
      <AnimationOnScroll
        animateIn="animate__bounceInLeft"
        animateOnce={true}
        duration={1.5}
        animatePreScroll={false}
      >
        <div className=" h-[250px] flex flex-col items-center justify-center gap-8 font-medium ">
          <h3 className="text-center font-bold text-lg">
            {" "}
            Rimaniamo in contatto{" "}
          </h3>
          <ul className="flex gap-10 justify-center text-3xl text-[#36454F]">
            <li className="hover:text-black">
              <button
                className="w-[48px] h-[48px]"
                onClick={() =>
                  linkTo("https://www.instagram.com/salvo_bisco/", "_blank")
                }
              >
                <AiFillInstagram className="w-[40px] h-[40px]" />
              </button>
            </li>
            <li className="hover:text-black">
              <button
                className="w-[48px] h-[48px]"
                onClick={() =>
                  linkTo("https://linkedin.com/in/salvo-bisconti", "_blank")
                }
              >
                <AiFillLinkedin className="w-[40px] h-[40px]" />
              </button>
            </li>
            <li className="hover:text-black">
              <button
                className="w-[48px] h-[48px]"
                onClick={() =>
                  linkTo("https://github.com/SalvoBisconti", "_blank")
                }
              >
                <AiFillGithub className="w-[40px] h-[40px]" />
              </button>
            </li>
          </ul>
          <h3 className=""> Copyright © 2023 | Tutti i diritti riservati</h3>
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Footer;
