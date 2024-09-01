const Category = ({ name }) => {
  return (
    <div className="md:px-8 px-4 md:py-3 py-2 md:border-4 border-2 md:rounded-br-xl rounded-br-md border-blue_violet">
      <h1 className="text-blue_violet md:font-bold font-semibold md:text-xl text-sm">
        {name}
      </h1>
    </div>
  );
};

export default Category;
