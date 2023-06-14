import ItemList from "../itemList";
import HeaderText from "../headerText";

const ProjectsSection = () => {
  return (
    <div
      className=" pb-8 flex flex-col justify-center  items-center "
      id="projects"
    >
      <HeaderText text="My projects" />
      <ItemList type="projects" />
    </div>
  );
};

export default ProjectsSection;
