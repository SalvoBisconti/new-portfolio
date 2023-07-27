import ItemList from "../itemList";
import HeaderText from "../headerText";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";

const ProjectsSection = () => {
  return (
    <div
      className="pb-8 flex flex-col justify-center  items-center  "
      id="projects"
    >
      <div className="md:w-[50vw]">
        <AnimationOnScroll
          animateIn="animate__bounceInLeft"
          animateOnce={true}
          duration={1.5}
          animatePreScroll={false}
        >
          <HeaderText text="I miei progetti" />
        </AnimationOnScroll>
        <ItemList type="projects" />
      </div>
    </div>
  );
};

export default ProjectsSection;
