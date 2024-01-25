import React from "react";
import { useTheme } from "next-themes";

const getCurrentTheme = () => {
  const { theme } = useTheme();
  return theme;
};

const Sidebar = ({ data }) => {
  const {
    title,
    sections,
    promotionText
  } = data;

  return (
    <div className="sidebar">
      <div className="font-bold text-lg">{title}</div>
      {sections.map((section, index) => (
        <div key={index}>
          <div className="font-bold my-2">{section.title}</div>
          {section.content.map((content, contentIndex) => (
            <div key={contentIndex} className="my-2">
              {content}
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
