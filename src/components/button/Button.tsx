import { saveFile } from "@/utils/func";
import { BiDownload } from "react-icons/bi";

const Button = (props: { text: string; display: string }) => {
  const { text, display } = props;
  return (
    <button
      className="bg-[#ff6961] p-2 text-[#161a1d] font-bold rounded-lg hover:bg-[#b63f39] flex items-center gap-1 group "
      onClick={saveFile}
    >
      <BiDownload className={`text-3xl mb-1 ${display}`} />
      {text}
    </button>
  );
};

export default Button;
