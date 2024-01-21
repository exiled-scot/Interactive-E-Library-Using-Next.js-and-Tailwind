import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { HiSun, HiMoon } from "react-icons/hi";
import SearchBooks from "./SearchBooks";

const Header = ({ searchString, handleSearch }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (

    <header>
      <nav class="bg-gray-800 opacity-70">
        <div class="container mx-auto py-4 flex justify-between items-center">
          <h1 class="text-2xl font-bold text-gray-50 border-4 border-white ml-2 p-2 text-2xl animate-show">MyReads</h1>
          <div class="flex space-x-10">
            <div class="flex items-center space-x-2">
              <span>          <a href="" className="text-2xl my-4 mx-4 text-white">Home</a></span></div>

            <div class="flex items-center space-x-2">
              <span>          <a href="" className="text-2xl my-4 mx-4 text-white">My Books</a></span></div>

            <div class="flex items-center space-x-2">
              <span>          <a href="" className="text-2xl my-4 mx-4 text-white">Browse</a></span></div>

            <div class="flex items-center space-x-2">
              <span>          <a href="" className="text-2xl my-4 mx-4 text-white">Community</a></span></div>


          </div>
          <div className="max-w-md mx-auto flex justify-center">
            <div className="bg-white relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
              <div className="grid place-items-center h-full w-20 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
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

          <div className="px-4 py-4 flex justify-end items-center" style={{ marginRight: `3.5rem` }}>
            {mounted && (
              theme === "dark" ? (
                <HiSun className="w-10 h-10 text-yellow-500" role="button" onClick={() => setTheme('light')} />
              ) : (
                <HiMoon className="w-10 h-10 text-gray-900" role="button" onClick={() => setTheme('dark')} />
              )
            )}
          </div>

        </div>
      </nav>



    </header>


  );
};

export default Header;
