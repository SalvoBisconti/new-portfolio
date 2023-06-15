import { skillsType } from "@/mocks/skills";

const SkillsCard = (props: { data: skillsType }) => {
  const { data } = props;
  return (
    <div className="relative flex flex-col items-center justify-center gap-2 h-[120px] w-[120px]   ">
      <img className="w-[40%] md:w-[50%] " src={data.image} alt={data.name} />
      <h4 className="absolute bottom-2 md:bottom-0">{data.name}</h4>
    </div>
  );
};

export default SkillsCard;
