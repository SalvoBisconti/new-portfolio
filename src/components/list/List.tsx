const List = (props: { display: string }) => {
  const { display } = props;
  return (
    <ul className={`${display} md:flex  w-1/2 justify-evenly  `}>
      <li> About me</li>
      <li> Projects</li>
      <li> Skills</li>
    </ul>
  );
};

export default List;
