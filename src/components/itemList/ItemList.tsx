import { skills } from "@/mocks/skills";
import { projects } from "@/mocks/projects";

import SkillsCard from "../skillsCard";
import ProjectCard from "../projectCard";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";

const ItemList = (props: { type: string }) => {
  const { type } = props;

  return (
    <div
      className={`flex flex-wrap justify-center gap-8 overflow-hidden ${
        type !== "skills" && "gap-24 md:gap-32"
      } `}
    >
      {type === "skills"
        ? skills?.map((item, i: number) => (
            <AnimationOnScroll
              animateIn="animate__bounceInLeft"
              delay={i * 120}
              key={item.id}
              animateOnce={true}
              animatePreScroll={false}
            >
              <SkillsCard data={item} />
            </AnimationOnScroll>
          ))
        : projects?.map((item, i: number) => (
            <AnimationOnScroll
              animateIn="animate__fadeInUp"
              key={item.id}
              animateOnce={true}
              animatePreScroll={false}
              duration={1.7}
            >
              <ProjectCard data={item} />
            </AnimationOnScroll>
          ))}
    </div>
  );
};
export default ItemList;
