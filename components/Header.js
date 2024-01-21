import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { HiSun, HiMoon } from "react-icons/hi";
import SearchBooks from "./SearchBooks";
import SearchBar from "./SearchBar";

const Header = ({ searchString, handleSearch }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

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
            <div>
              <SearchBar searchString={searchString} handleSearch={handleSearch} />
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
