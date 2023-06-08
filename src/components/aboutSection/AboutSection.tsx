import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";

const AboutSection = () => {
  return (
    <div className="flex flex-col justify-center  items-center ">
      <AnimationOnScroll
        animateIn="animate__bounceInRight"
        // animatePreScroll={true}
        // initiallyVisible={false}
        animateOnce={true}
      >
        <h2 className="text-center p-4 font-bold"> About me</h2>
        <div className=" group flex relative cursor-pointer ">
          <div className="h-48 w-48  rounded z-20">
            <Image
              className="rounded bg-slate-700 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-all duration-500"
              src="/image.png"
              alt="myImage"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="h-48 w-48 border-4 rounded  border-[#ff6961] top-8 -right-8 absolute group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-500"></div>
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__bounceInLeft"
        // animatePreScroll={true}
        // initiallyVisible={false}
        animateOnce={true}
      >
        <p className="mt-14 px-14 ">
          My name is Salvatore, but I prefer to be called Salvo, I am a boy of
          '98 and currently I live in the province of Palermo. I’m a jr
          front-end developer specialized in React and in the Next framework .
          I’ve always been passionate about technology since i was child. I
          graduated in computer science and recently I got the qualification of
          "front-end developer" after attending an intensive bootcamp in which I
          learned a lot. Why do I like to program? I think creating something
          from scratch is one of the greatest satisfactions that life can give
          you. Michelangelo had his brush, I have my computer. I call myself a
          very curious guy. I always need to learn new things. I think curiosity
          is what pushes everything forward. If man had not been curious we
          would still have been in the Stone Age.
        </p>
      </AnimationOnScroll>
    </div>
  );
};

export default AboutSection;
