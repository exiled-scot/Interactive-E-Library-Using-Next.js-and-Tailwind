import React, { useState } from "react";

const DropdownMenu = ({ title, links }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="text-lg md:text-2xl my-4 mx-4 text-white"
      >
        <span>{title}</span>
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      {open && (
        <div
          className="absolute z-50 right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48"
        >
          <div className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800">
            {links.map((link, index) => (
              <a
                key={index}
                className="block px-4 py-2 mt-2 text-sm font-semibold rounded-lg dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900"
                href={link.url}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
