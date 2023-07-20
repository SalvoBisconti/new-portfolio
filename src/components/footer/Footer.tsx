import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { linkTo } from "@/utils/func";

const Footer = () => {
  return (
    <div className="h-[250px] bg-[#ff6961] text-black w-screen  ">
      <AnimationOnScroll
        animateIn="animate__bounceInLeft"
        animateOnce={true}
        duration={1.5}
        animatePreScroll={false}
      >
        <div className=" h-[250px] flex flex-col items-center justify-center gap-8 font-medium ">
          <h3 className="text-center"> Follow me </h3>
          <ul className="flex gap-10 justify-center text-3xl text-slate-800">
            <li className="hover:text-black">
              <button
                onClick={() => linkTo("https://www.instagram.com/salvo_bisco/")}
              >
                <AiFillInstagram />
              </button>
            </li>
            <li className="hover:text-black">
              <button
                onClick={() => linkTo("https://linkedin.com/in/salvo-bisconti")}
              >
                <AiFillLinkedin />
              </button>
            </li>
            <li className="hover:text-black">
              <button
                onClick={() => linkTo("https://github.com/SalvoBisconti")}
              >
                <AiFillGithub />
              </button>
            </li>
          </ul>
          <h3 className=""> Copyright © 2023 | All rights reserved</h3>
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Footer;
