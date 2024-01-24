import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { HiSun, HiMoon } from "react-icons/hi";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header>
      <nav className="bg-gray-800 opacity-70">
        <div className="sm:mx-40 container mx-auto px-8 py-4 flex flex-col items-center md:flex-row md:justify-between">
          <h1 className="text-2xl font-bold border-4 border-white ml-2 p-2 text-2xl animate-show text-gray-50 mr-4">
            MyReads
          </h1>
          <div className="md:pl-10 flex flex-wrap justify-center md:justify-start space-x-10">
            <div className="flex items-center space-x-2">
              <a href="/" className="text-lg md:text-2xl my-4 mx-4 text-white">
                Home
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <a href="/" className="text-lg md:text-2xl my-4 mx-4 text-white">
                My Books
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <a href="/" className="text-lg md:text-2xl my-4 mx-4 text-white">
                Browse
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <a href="/" className="text-lg md:text-2xl my-4 mx-4 text-white">
                Community
              </a>
            </div>
          </div>
          <div className="max-w-md mx-auto flex justify-center">
            {/* Search bar code goes here */}
          </div>
          <div className="absolute right-0 z-50 mr-9">
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
