import { skills } from "@/mocks/skills";
import { projects } from "@/mocks/projects";

import SkillsCard from "../skillsCard";
import ProjectCard from "../projectCard";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";

const ItemList = (props: { type: string }) => {
  const { type } = props;

  return (
    <div className="flex flex-wrap justify-center gap-8 ">
      {type === "skills"
        ? skills?.map((item, i: number) => (
            <AnimationOnScroll
              animateIn="animate__bounceInLeft"
              delay={i * 120}
              key={item.id}
              animateOnce={true}
            >
              <SkillsCard data={item} />
            </AnimationOnScroll>
          ))
        : projects?.map((item, i: number) => (
            <AnimationOnScroll
              animateIn="animate__bounceInLeft"
              delay={i * 180}
              key={item.id}
              animateOnce={true}
            >
              <ProjectCard data={item} />
            </AnimationOnScroll>
          ))}
    </div>
  );
};
export default ItemList;
