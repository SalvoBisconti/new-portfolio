import { projectsType } from "@/mocks/projects";
import { linkTo } from "@/utils/func";
import Button from "../button";

const ProjectCard = (props: { data: projectsType }) => {
  const { data } = props;

  return (
    <div className="relative flex flex-col  items-center justify-center gap-2  w-[110vw] rounded-xl p-6 bg-first md:bg-transparent md:shadow-normal md:shadow-second md:p-12 md:flex-row md:w-[800px] xl:w-[68vw]  ">
      <h3 className=" text-xl bold  md:hidden uppercase "> {data.name}</h3>
      <img
        className="w-[75%] rounded-xl md:w-[55%]"
        src={data.image}
        alt={data.name}
      />

      <div className="w-full flex flex-col  items-center justify-center ">
        <h3 className="hidden bold text-xl md:flex absolute top-4 uppercase">
          {data.name}
        </h3>
        <p className="text-center px-6 py-4 xl:text-lg"> {data.description}</p>
        <div className="flex items-center justify-evenly list-none  w-[100%]  md:w-[90%] ">
          <Button
            text="Repository"
            display={null}
            textColor={"text-black"}
            onClickFunc={() => linkTo(data.links.repo, "_blank")}
            icon="repo"
          />
          <Button
            text="Demo"
            display={null}
            textColor={"text-black"}
            onClickFunc={() => linkTo(data.links.url, "_blank")}
            icon="demo"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
