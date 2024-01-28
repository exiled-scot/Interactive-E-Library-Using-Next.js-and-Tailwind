import React from "react";
import { useTheme } from "next-themes";

const getCurrentTheme = () => {
  const { theme } = useTheme();
  return theme;
};

const Sidebar = ({ data }) => {
  const currentTheme = getCurrentTheme();
  const serverRoute = typeof window !== "undefined" ? window.location.origin : "";

  const { title, sections, promotionText } = data;

  return (
    <div
      className={`${currentTheme === "dark" ? "bg-gray-800" : "bg-white"
        } text-gray-80 max-w-[24rem] whitespace-normal break-words rounded-lg border border-blue-gray-50 p-4 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none max-w-xs bg-gray-100 p-4`}
      style={{ zIndex: 9999 }}
    >
      <div className="font-bold text-lg">{title}</div>
      {sections.map((section, index) => (
        <div key={index}>
          <div className="font-bold my-2">{section.title}</div>
          {section.content.map((content, contentIndex) => (
            <div key={contentIndex} className="my-2">
              <a
                href={`${serverRoute}${content.link}`}
                className={`${currentTheme === "dark" ? "bg-gray-800" : "bg-white"
                  } italic`}
              >
                {content.title}
              </a>
              <div className="inline"> by </div>
              <div className="inline">{content.author}</div>
            </div>
          ))}
          {section.likes && section.comments && (
            <div className="mb-2 text-sm">
              {section.likes} likes &middot; {section.comments} comments
            </div>
          )}
          {section.bookCount && section.voterCount && (
            <div className="mb-2 text-sm">
              {section.bookCount} books | {section.voterCount} voters
            </div>
          )}
        </div>
      ))}
      <div className="my-4 text-sm text-gray-600">{promotionText}</div>
    </div>
  );
};

export default Sidebar;
