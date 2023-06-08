import { projects } from "@/mocks/projects";
import { projectsType } from "@/mocks/projects";
import { RiMacLine, RiGithubFill } from "react-icons/ri";
import Link from "next/link";

const ProjectCard = () => {
  // props: { data: projectsType }
  // const { data } = props;
  return (
    // shadow-lg shadow-[#ff6961]

    <div className="relative flex flex-col items-center justify-center gap-2  w-[400px]   ">
      <h3> {projects[0].name}</h3>
      <img className="w-[75%]" src={projects[0].image} alt={projects[0].name} />

      <div className="w-full ">
        {/* <h3> {projects[0].name}</h3> */}
        <p className="text-center"> description</p>
        <ul className="flex items-center justify-evenly list-none ">
          <li>
            <Link
              href={projects[0].links.repo}
              className="flex items-center gap-2"
            >
              <RiGithubFill />
              <span className="">Repository</span>
            </Link>
          </li>
          <li>
            <Link
              href={projects[0].links.url}
              className="flex items-center gap-2"
            >
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
