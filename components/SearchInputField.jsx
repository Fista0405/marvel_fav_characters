import { useState, useEffect, useRef } from "react";

const SearchInputField = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

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
    const timeoutId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchTerm]);

  const previousDebouncedSearchTerm = usePrevious(debouncedSearchTerm);

  useEffect(() => {
    if (!debouncedSearchTerm) {
      return;
    }

    if (debouncedSearchTerm === previousDebouncedSearchTerm) {
      return;
    }

    onSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm, previousDebouncedSearchTerm, onSearch]);

  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={inputHandler}
    />
  );
};

export default SearchInputField;
