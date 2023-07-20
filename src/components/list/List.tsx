import { Dispatch } from "react";
import { onClickAbout } from "@/utils/func";

const List = (props: {
  display: string;
  direction: string;
  gap: string;
  align: string;
  text: string;
  height: string;
  setOpenMenu: Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { display, direction, gap, align, text, height, setOpenMenu } = props;

  const onHandleClose = (): void => {
    setOpenMenu(false);
  };

  return (
    <ul
      className={`${display} ${direction} ${gap} ${align} ${text} ${height} flex md:flex  justify-evenly   w-1/2 text-white font-bold transition-all duration-1000`}
    >
      <li onClick={onHandleClose}>
        <a
          className="text-[#ff6961] hover:underline underline-offset-8 cursor-pointer"
          onClick={(e) => onClickAbout(e, "home")}
        >
          Home
        </a>
      </li>
      <li onClick={onHandleClose}>
        <a
          className=" hover:underline underline-offset-8 cursor-pointer"
          onClick={(e) => onClickAbout(e, "about")}
        >
          Chi sono
        </a>
      </li>
      <li onClick={onHandleClose}>
        <a
          className="hover:underline underline-offset-8 cursor-pointer"
          onClick={(e) => onClickAbout(e, "skills")}
        >
          Skills
        </a>
      </li>
      <li onClick={onHandleClose}>
        <a
          className="hover:underline underline-offset-8 cursor-pointer"
          onClick={(e) => onClickAbout(e, "projects")}
        >
          Progetti
        </a>
      </li>
    </ul>
  );
};

export default List;
