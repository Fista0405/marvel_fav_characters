const GridList = ({ children }) => {
  return (
    <div className="mt-10 border border-black grid grid-rows-3 grid-cols-3 gap-2">
      {children}
    </div>
  );
};

export default GridList;
