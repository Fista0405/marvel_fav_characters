const GridList = ({ children }) => {
  return (
    <div className="mt-6 items-center justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
      {children}
    </div>
  );
};

export default GridList;
