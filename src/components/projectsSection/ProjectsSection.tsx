import ItemList from "../itemList";
import HeaderText from "../headerText";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";

const ProjectsSection = () => {
  return (
    <div
      className=" pb-8 flex flex-col justify-center  items-center "
      id="projects"
    >
      <AnimationOnScroll animateIn="animate__bounceInRight" animateOnce={true}>
        <HeaderText text="My projects" />
      </AnimationOnScroll>
      <ItemList type="projects" />
    </div>
  );
};

export default ProjectsSection;
