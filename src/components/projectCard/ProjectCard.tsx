import { projects } from "@/mocks/projects";
import { projectsType } from "@/mocks/projects";
import { RiMacLine, RiGithubFill } from "react-icons/ri";
import Link from "next/link";

const ProjectCard = (props: { data: projectsType }) => {
  const { data } = props;

  return (
    // shadow-lg shadow-[#ff6961]

    <div className="relative flex flex-col items-center justify-center gap-2  w-[400px] rounded-xl   p-2 bg-[#100c084c]  ">
      <h3 className=" text-xl"> {data.name}</h3>
      <img className="w-[75%] rounded-xl" src={data.image} alt={data.name} />

      <div className="w-full ">
        {/* <h3> {data.name}</h3> */}
        <p className="text-center px-6 py-4"> {data.description}</p>
        <ul className="flex items-center justify-evenly list-none ">
          <li className="bg-[#ff6961] p-2 text-[#161a1d] font-bold rounded-lg">
            <Link href={data.links.repo} className="flex items-center gap-2">
              <RiGithubFill />
              <span className="">Repository</span>
            </Link>
          </li>
          <li className="bg-[#ff6961] p-2 text-[#161a1d] font-bold rounded-lg">
            <Link href={data.links.url} className="flex items-center gap-2 ">
              <RiMacLine />
              <span className="">Demo </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
