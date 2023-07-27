const HeaderText = (props: { text: string }) => {
  const { text } = props;
  return (
    <h2 className="text-center p-4 font-bold text-2xl md:text-3xl m-6 [text-shadow:_0_1px_0_rgb(255_255_255_/_50%)] ">
      {" "}
      {text}
    </h2>
  );
};

export default HeaderText;
