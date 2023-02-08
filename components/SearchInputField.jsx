import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Button from "./Button";

const SearchInputField = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
  const router = useRouter();

  const inputHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  };

  useEffect(() => {
    setSearchTerm(router.query.search || "");
  }, [router.query.search]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
      searchTerm
        ? router.push({
            pathname: "/",
            query: { search: searchTerm },
          })
        : router.push({
            pathname: "/",
          });
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchTerm]);

  const previousDebouncedSearchTerm = usePrevious(debouncedSearchTerm);

  useEffect(() => {
    if (!debouncedSearchTerm) {
      onSearch(setDebouncedSearchTerm(""));
    }

    if (debouncedSearchTerm === previousDebouncedSearchTerm) {
      return;
    }

    onSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm, previousDebouncedSearchTerm, onSearch]);

  const clearInput = () => {
    onSearch(setDebouncedSearchTerm());
    setSearchTerm("");
  };

  return (
    <label className="flex ">
      <input
        type="text"
        className="mr-1 placeholder:text-slate-400 rounded-md border-red-600 outline-none focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-300"
        placeholder="Search..."
        value={searchTerm}
        onChange={inputHandler}
      />
      <Button onClick={clearInput}>Clear</Button>
    </label>
  );
};

export default SearchInputField;
