import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";

const Hero = () => {
  return (
    <div className="border-2 p-3 border-white w-screen h-[calc(80vh)] flex flex-col justify-center items-center ">
      <AnimationOnScroll
        animateIn="animate__zoomInDown"
        animatePreScroll={true}
        initiallyVisible={true}
      >
        <div className="flex flex-col justify-center items-center animate__animated animate__zoomInDown">
          <h2 className="text-5xl ">
            HI THERE <span className="">👋🏻</span> ! I'M
          </h2>
          <h2 className="text-5xl">SALVATORE</h2>
          <p className="p-10">
            A <span className="">Front-end developer </span>
            passionate about creating interactive applications and experiences
            on the web
          </p>

          <button className="bg-[#ff6961] p-2 text-[#161a1d] font-bold rounded-lg hover:animate-bounce ">
            Download resume
          </button>
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Hero;
