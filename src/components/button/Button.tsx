import { BiDownload } from "react-icons/bi";
import { IoReturnDownBack } from "react-icons/io5";

const Button = (props: {
  text: string;
  display: string;
  onClickFunc: any;
  icon: string;
}) => {
  const { text, display, onClickFunc, icon } = props;
  return (
    <button
      className="bg-second p-2 text-white font-bold rounded-lg hover:bg-strongSecond flex items-center gap-2 group "
      onClick={onClickFunc}
    >
      {icon === "arrow" ? (
        <IoReturnDownBack className="text-3xl mt-1 " />
      ) : (
        <BiDownload className={`text-3xl mb-1 ${display}`} />
      )}
      {text}
    </button>
  );
};

export default Button;
