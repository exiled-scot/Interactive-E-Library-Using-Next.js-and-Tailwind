import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { HiSun, HiMoon } from "react-icons/hi";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-black bg-opacity-30">
      <div className="flex justify-between items-center">
        <div className="flex justify-start">
          <a href="#app">
            <h3 className="border-4 border-white text-white p-4 text-2xl animate-show">MyReads</h3>
          </a>
        </div>
        <div className="flex justify-end items-center py-6 pr-6 text-gray-300">
          <div className="mr-4">
            <a href="" className="text-2xl mr-4">Home</a>
            <a href="" className="text-2xl mr-4">My Books</a>
            <a href="" className="text-2xl mr-4">Browse</a>
            <a href="" className="text-2xl mr-4">Community</a>
          </div>
          <div>
            <button className="text-2xl mr-4">Log in</button>
            <button className="text-2xl mr-4">Sign Up</button>
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
      </div>
    </header>
  );
};

export default Header;
