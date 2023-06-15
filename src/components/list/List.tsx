import { Dispatch } from "react";

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
      className={`${display} ${direction} ${gap} ${align} ${text} ${height} flex md:flex  justify-evenly   w-1/2 text-white font-bold `}
    >
      <li onClick={onHandleClose}>
        <a
          className="text-[#ff6961] hover:underline underline-offset-8 "
          href="#home"
        >
          Home{" "}
        </a>
      </li>
      <li onClick={onHandleClose}>
        <a className=" hover:underline underline-offset-8" href="#about">
          About me
        </a>
      </li>
      <li onClick={onHandleClose}>
        <a className="hover:underline underline-offset-8" href="#skills">
          Skills
        </a>
      </li>
      <li onClick={onHandleClose}>
        <a className="hover:underline underline-offset-8" href="#projects">
          Projects
        </a>
      </li>
    </ul>
  );
};

export default List;
