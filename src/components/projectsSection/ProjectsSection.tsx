import ItemList from "../itemList";
import HeaderText from "../headerText";

const ProjectsSection = () => {
  return (
    <div className="flex flex-col justify-center  items-center ">
      <HeaderText text="My projects" />
      <ItemList type="projects" />
    </div>
  );
};

export default ProjectsSection;
