import { skillsType } from "@/mocks/skills";

const SkillsCard = (props: { data: skillsType }) => {
  const { data } = props;
  return (
    <div className="relative flex flex-col items-center justify-center gap-2 h-[120px] w-[120px]   ">
      <img className="w-[50%]" src={data.image} alt={data.name} />
      <h4>{data.name}</h4>
      <hr className="" />
    </div>
  );
};

export default SkillsCard;
