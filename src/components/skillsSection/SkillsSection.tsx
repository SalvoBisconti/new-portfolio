import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";
import ItemList from "../itemList";
import HeaderText from "../headerText";

const SkillsSection = () => {
  return (
    <div className="flex flex-col justify-center  items-center bg-[#100c084c] ">
      <AnimationOnScroll animateIn="animate__bounceInLeft" animateOnce={true}>
        <HeaderText text="Skills-set" />
      </AnimationOnScroll>
      <ItemList type="skills" />
    </div>
  );
};

export default SkillsSection;
