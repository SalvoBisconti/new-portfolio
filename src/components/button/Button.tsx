const Button = (props: { text: string }) => {
  const { text } = props;
  return (
    <button className="bg-[#ff6961] p-2 text-[#161a1d] font-bold rounded-lg hover:animate-bounce">
      {text}
    </button>
  );
};

export default Button;
