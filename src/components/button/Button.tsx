import { BiDownload } from "react-icons/bi";
import { IoReturnDownBack } from "react-icons/io5";
import { RiMacLine, RiGithubFill } from "react-icons/ri";

const Button = (props: {
  text: string;
  textColor: string | null;
  display: string | null;
  onClickFunc: any;
  icon: string;
}) => {
  const { text, display, onClickFunc, icon, textColor } = props;

  let setIcon;
  switch (icon) {
    case "arrow":
      setIcon = <IoReturnDownBack className="text-3xl mt-1 " />;
      break;
    case "download":
      setIcon = <BiDownload className={`text-3xl mb-1 ${display}`} />;
      break;
    case "repo":
      setIcon = <RiGithubFill className={`text-3xl`} />;
      break;
    default:
      setIcon = <RiMacLine className={`text-3xl`} />;
  }

  return (
    <button
      className={`bg-second w-fit p-[.7rem] font-bold rounded-lg  flex items-center gap-2 group transition duration-500 hover:bg-strongSecond ${textColor}`}
      onClick={onClickFunc}
    >
      {setIcon}
      {text}
    </button>
  );
};

export default Button;
