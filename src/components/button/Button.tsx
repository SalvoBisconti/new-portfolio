import { saveFile } from "@/utils/func";

const Button = (props: { text: string }) => {
  const { text } = props;
  return (
    <button
      className="bg-[#ff6961] p-2 text-[#161a1d] font-bold rounded-lg hover:bg-[#b63f39] "
      onClick={saveFile}
    >
      {text}
    </button>
  );
};

export default Button;
