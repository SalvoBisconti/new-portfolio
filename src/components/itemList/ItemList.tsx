import { skills } from "@/mocks/skills";
import SkillsCard from "../skillsCard";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";

const ItemList = () => {
  console.log(skills);
  return (
    <div className="flex flex-wrap justify-center">
      {skills?.map((item, i: number) => (
        <AnimationOnScroll
          animateIn="animate__bounceInLeft"
          delay={i * 250}
          key={item.id}
          animateOnce={true}
        >
          <SkillsCard data={item} />
        </AnimationOnScroll>
      ))}
    </div>
  );
};
export default ItemList;
