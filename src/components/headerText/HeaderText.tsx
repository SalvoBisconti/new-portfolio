const HeaderText = (props: { text: string }) => {
  const { text } = props;
  return <h2 className="text-center p-4 font-bold text-2xl m-6 "> {text}</h2>;
};

export default HeaderText;
