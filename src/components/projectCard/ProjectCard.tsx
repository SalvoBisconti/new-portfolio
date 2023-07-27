import { projectsType } from "@/mocks/projects";
import { RiMacLine, RiGithubFill } from "react-icons/ri";
import Link from "next/link";
import { linkTo } from "@/utils/func";

const ProjectCard = (props: { data: projectsType }) => {
  const { data } = props;

  return (
    <div className="relative flex flex-col  items-center justify-center gap-2  w-[110vw] rounded-xl p-4 bg-first md:flex-row md:w-[800px] xl:w-[68vw] ">
      <h3 className=" text-xl bold  md:hidden uppercase "> {data.name}</h3>
      <img
        className="w-[75%] rounded-xl md:w-[55%]"
        src={data.image}
        alt={data.name}
      />

      <div className="w-full flex flex-col  items-center justify-center">
        <h3 className="hidden bold text-xl md:flex absolute top-4 uppercase">
          {data.name}
        </h3>
        <p className="text-center px-6 py-4 xl:text-lg"> {data.description}</p>
        <ul className="flex items-center justify-evenly list-none  w-[100%] md:absolute md:bottom-2 md:w-[60%]">
          <li className="bg-second p-2 text-[#161a1d] font-bold rounded-lg hover:bg-strongSecond cursor-pointer">
            <button
              onClick={() => linkTo(data.links.repo, "_blank")}
              className="flex items-center gap-2 "
            >
              <RiGithubFill />
              <span className="">Repository</span>
            </button>
          </li>
          <li className="bg-second p-2 text-[#161a1d] font-bold rounded-lg hover:bg-strongSecond cursor-pointer">
            <button
              onClick={() => linkTo(data.links.url, "_blank")}
              className="flex items-center gap-2 "
            >
              <RiMacLine />
              <span className="">Demo </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
