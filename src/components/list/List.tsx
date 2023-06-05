const List = (props: { display: string }) => {
  const { display } = props;
  return (
    <ul
      className={`${display} md:flex border-2 border-black w-1/2 justify-evenly `}
    >
      <li> About me</li>
      <li> Projects</li>
      <li> Skills</li>
    </ul>
  );
};

export default List;
