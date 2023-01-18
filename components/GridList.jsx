const GridList = ({ children }) => {
  return (
    <div className="mt-6 p-10 grid grid-rows-3 grid-cols-4 gap-4">
      {children}
    </div>
  );
};

export default GridList;
