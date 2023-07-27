import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";
import ItemList from "../itemList";
import HeaderText from "../headerText";

const SkillsSection = () => {
  return (
    <div
      className=" pb-8 flex flex-col justify-center  items-center bg-first border-2 "
      id="skills"
    >
      <AnimationOnScroll
        animateIn="animate__bounceInLeft"
        animateOnce={true}
        duration={1.5}
        animatePreScroll={false}
      >
        <HeaderText text="Le mie skills" />
      </AnimationOnScroll>
      <ItemList type="skills" />
    </div>
  );
};

export default SkillsSection;
