const HeaderText = (props: { text: string }) => {
  const { text } = props;
  return (
    // <div className="border-2 border-white self-start ">
    <h2 className="text-center p-4 font-bold text-2xl m-6 "> {text}</h2>
  );
};

export default HeaderText;
