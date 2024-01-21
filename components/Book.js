import { useState, useEffect } from 'react';
import { useTheme } from "next-themes";

const getCurrentTheme = () => {
  const { theme } = useTheme();
  return theme;
};

const Book = ({ book }) => {
  const currentTheme = getCurrentTheme();
  const [imgError, setImgError] = useState(false); // State to track if there is an error loading the image
  const [showPopupDelayed, setShowPopupDelayed] = useState(false); // State to control delayed display of the popup
  const [showPopup, setShowPopup] = useState(false); // State to control the visibility of the popup

  // Function to handle mouse enter event
  const handleMouseEnter = () => {
    setShowPopupDelayed(true);
  };

  // Function to handle mouse leave event
  const handleMouseLeave = () => {
    setShowPopupDelayed(false); // Cancel delayed display of the popup
    setShowPopup(false); // Hide the popup
  };

  // Effect to update the visibility of the popup based on delayed display and image error states
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowPopup(showPopupDelayed && !imgError);
    }, 800);

    // Cleanup the timeout when the component unmounts or when the dependencies change
    return () => clearTimeout(timeoutId);
  }, [showPopupDelayed, imgError]);

  // Function to handle image loading error
  const handleImageError = () => {
    setImgError(true); // Set the imgError state to true when there is an error loading the image
  };

  return (
    <div
      className={`border border-black ${currentTheme === "dark" ? "bg-black" : "bg-white"} relative`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative">
        <a href={`/book/${encodeURIComponent(book.title)}`}>
          {!imgError && (
            <img
              className={`transform hover:scale-110 rounded-t-lg object-contain w-full h-full md:h-96 md:w-48 sm:h-48 sm:w-48`}
              src={book.img}
              onError={handleImageError}
              style={{ backgroundImage: 'none', objectFit: 'fill', display: 'block' }}
            />
          )}
        </a>

        {showPopup && (
          <div className={`${currentTheme === "dark" ? "bg-gray-800" : "bg-white"} text-gray-80 fixed max-w-[24rem] whitespace-normal break-words rounded-lg border border-blue-gray-50 p-4 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none`} style={{ zIndex: 9999 }}>
            {/* Title Info */}
            <h6 className="mb-2 flex items-center gap-2 font-sans text-base font-medium leading-relaxed tracking-normal text-blue-gray-900 antialiased">
              <span><a href={book.url}>{book.title}</a></span> •
              <a className="text-sm text-blue-gray-700" href="#">
                {book.free ? "Free" : "Paid"}
              </a>
            </h6>

            {/* Description */}
            <p className="block font-sans text-sm font-normal leading-normal text-gray-80 antialiased">
              {book.overview}
            </p>

            {/* Location and Material Tailwind */}
            <div className="mt-6 flex items-center gap-8 border-t border-blue-gray-50 pt-4">
              <p className="flex items-center gap-1 font-sans text-xs font-normal text-gray-700 antialiased"></p>
              <span>{book.author}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Book;
