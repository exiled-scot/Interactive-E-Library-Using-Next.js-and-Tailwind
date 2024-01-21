import { useRef } from "react";

const SearchBar = ({ searchString, handleSearch }) => {
  const inputRef = useRef(null);

  return (
    <div className="max-w-md mx-auto flex justify-center">
      <div className="bg-white relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
        <div className="grid place-items-center h-full w-20 text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <input
          type="text"
          placeholder="Search books"
          value={searchString}
          onChange={handleSearch}
          ref={inputRef}
          className="bg-white text-black pl-4 outline-none"
          style={{ width: "100vw", border: "none" }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
