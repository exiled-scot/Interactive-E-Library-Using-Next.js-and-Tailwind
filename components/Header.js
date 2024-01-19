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
    <header className="fixed top-0 left-0 right-0 h-16 bg-black bg-opacity-30">
      <div className="flex justify-between items-center">
        <div className="flex justify-start">
          <a href="#app">
            <h3 className="border-4 border-white text-white ml-2 p-2 text-2xl animate-show">MyReads</h3>
          </a>
          <a href="" className="text-2xl my-4 mx-4 text-white">Home</a>
          <a href="" className="text-2xl my-4 mx-4 text-white">My Books</a>
          <a href="" className="text-2xl my-4 mx-4 text-white">Browse</a>
          <a href="" className="text-2xl my-4 mx-4 text-white">Community</a>
        </div>
        <div className="">
          <input
            type="text"
            placeholder="Search books"
            value={searchString}
            onChange={handleSearch}
            ref={inputRef}
          />
        </div>
        <div className="flex justify-end items-center pr-6 text-gray-300">
          <div>
            <button className="text-2xl mx-4 mr-4 text-white">Log in</button>
            <button className="text-2xl mx-4 mr-4 text-white">Sign Up</button>
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
      </div>
    </header>
  );
};

export default Header;
