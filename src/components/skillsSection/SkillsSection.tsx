import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";
import ItemList from "../itemList";

const SkillsSection = () => {
  return (
    <div className="flex flex-col justify-center  items-center ">
      <h2> Skills</h2>
      <ItemList />
    </div>
  );
};

export default SkillsSection;
