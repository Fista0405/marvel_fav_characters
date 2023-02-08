import { useState } from "react";
import ReactPaginate from "react-paginate";
import Button from "./Button";

const Grid = ({ children, items, herosPerPage = 4, removeHandler }) => {
  const [pageNum, setPageNum] = useState(0);
  const pageCount = Math.ceil(items?.length / herosPerPage);
  const pagesVisited = pageNum * herosPerPage;

  const changePage = ({ selected }) => {
    setPageNum(selected);
  };

  const paginatedChildren = children?.slice(
    pagesVisited,
    pagesVisited + herosPerPage
  );

  return (
    <>
      <ul className="items-center my-6 px-3 justify-center grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {paginatedChildren}
      </ul>
      {items?.length > 0 ? (
        <ReactPaginate
          pageCount={pageCount}
          onPageChange={changePage}
          pageLinkClassName="rounded p-2 hover:text-white hover:bg-red-700"
          containerClassName="text-lg mx-1 my-4 p-4 flex justify-center items-center gap-2 border border-red-700 text-gray-900 rounded-lg"
          activeClassName="bg-red-600 rounded hover:bg-red-700 hover:text-white"
        />
      ) : null}
      {items?.length && removeHandler ? (
        <Button onClick={removeHandler}>Delete List</Button>
      ) : null}
    </>
  );
};

export default Grid;
