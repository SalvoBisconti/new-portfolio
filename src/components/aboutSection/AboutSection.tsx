import Image from "next/image";
import HeaderText from "../headerText";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";

const AboutSection = () => {
  return (
    <div
      className=" pb-8 flex flex-col justify-center  items-center md:pb-20 "
      id="about"
    >
      <AnimationOnScroll
        animateIn="animate__bounceInLeft"
        animateOnce={true}
        duration={1.5}
        animatePreScroll={false}
      >
        <HeaderText text="Chi sono" />
      </AnimationOnScroll>

      <div className=" w-screen flex flex-col justify-center items-center md:flex-row md:px-[50px]">
        <AnimationOnScroll
          animateIn="animate__bounceInLeft"
          animateOnce={true}
          duration={1.5}
          animatePreScroll={false}
        >
          <div className=" group flex relative cursor-pointer ">
            <div className="h-48 w-48  rounded z-20 md:h-52 md:w-52">
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
            <div className="h-48 w-48  md:h-52 md:w-52 border-4 rounded  border-second top-8 -right-8 absolute group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-500"></div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__bounceInRight"
          duration={1.5}
          animatePreScroll={false}
          animateOnce={true}
        >
          <p className="mt-14 px-14 md:w-[100%] md:text-lg text-justify">
            Il mio nome è Salvatore, ma preferisco essere chiamato Salvo, sono
            un ragazzo del '98 ed attualmente vivo in provincia di Palermo. Sono
            un Full-stack developer specializzato in React/Next lato front-end e
            Java/Spring Boot lato backend. Sono sempre stato appassionato di
            tecnologia fin da quando ero bambino. Ho un diploma di informatica e
            ho due qualifiche in ambito coding ('Front-end developer', 'Java
            developer') dopo aver frequentato due intensi bootcamp in cui ho
            appreso tantissimo. Perché mi piace programmare? Penso che la
            creazione di qualcosa partendo da zero è una delle più grandi
            soddisfazioni che la vita può dare. Michelangelo aveva il suo
            pennello, io ho il mio computer. Mi definisco un ragazzo molto
            curioso. Sento sempre la necessità di imparare cose nuove. Penso che
            la curiosità è ciò che spinge tutto in avanti. Se l'uomo non fosse
            stato curioso ci troveremmo ancora nell'età della pietra.
          </p>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default AboutSection;
