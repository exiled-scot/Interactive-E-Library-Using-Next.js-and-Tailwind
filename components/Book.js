import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

const getCurrentTheme = () => {
  const { theme } = useTheme();
  return theme;
};

const Book = ({ book }) => {
  const currentTheme = getCurrentTheme();
  const [imgError, setImgError] = useState(false);
  const [showPopupDelayed, setShowPopupDelayed] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const bookCardRef = useRef(null);

  const handleMouseEnter = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
    setShowPopupDelayed(true);
  };

  // Function to handle mouse leave event
  const handleMouseLeave = (e) => {
    if (!e.target.contains(bookCardRef.current)) {
      setShowPopupDelayed(false); // Cancel delayed display of the popup
      setShowPopup(false); // Hide the popup
    }
  };

  // Function to handle image loading error
  const handleImageError = () => {
    setImgError(true); // Set the imgError state to true when there is an error loading the image
  };

  // Effect to update the visibility of the popup based on delayed display and image error states
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowPopup(showPopupDelayed && !imgError);
    }, 800);


    // Function to handle scroll event
    const handleScroll = () => {
      const rect = bookCardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const topThreshold = windowHeight * 0.5; // Set the desired top threshold (20% of window height)

      const isVisible = rect.top < windowHeight - topThreshold && rect.bottom >= topThreshold;

      setShowPopupDelayed(isVisible);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the timeout and event listener when the component unmounts or when the dependencies change
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showPopupDelayed, imgError]);

  return (
    <div
      className={`border border-black ${currentTheme === 'dark' ? 'bg-black' : 'bg-white'
        } relative`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={bookCardRef}
    >
      <div className="relative">
        <a href={`/book/${encodeURIComponent(book.title)}`}>
          {!imgError && (
            <img
              className={`sm:gap-2 transform hover:scale-110 rounded-t-lg object-contain w-full h-full md:h-96 md:w-48 sm:h-48 sm:w-48`}
              src={book.img}
              onError={handleImageError}
              style={{ backgroundImage: 'none', objectFit: 'fill', display: 'block' }}
            />
          )}
        </a>

        {/* Popup component */}
        {showPopup && (
          <div
            className={`popup ${currentTheme === 'dark' ? 'bg-gray-800' : 'bg-white'} hidden sm:block min-h-fit z-10 text-gray-800 fixed whitespace-normal break-words rounded-lg border border-blue-gray-50 p-4 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none mt-[-4rem] sm:w-[24rem]`}
            style={{ top: mousePosition.y, left: mousePosition.x }}
          >
            <h6 className="mb-2 flex items-center gap-2 font-sans text-base font-medium leading-relaxed tracking-normal text-blue-gray-900 antialiased">
              <span><a href={book.url}>{book.title}</a></span> •
              <a className="text-sm text-blue-gray-700" href="#">
                {book.free ? 'Free' : 'Paid'}
              </a>
            </h6>

            {/* Description */}
            <p className="block font-sans text-sm font-normal leading-normal text-gray-800 antialiased">
              {book.overview}
            </p>

            {/* Location and Material Tailwind */}
            <div className="mt-6 flex items-center gap-8 border-t border-blue-gray-50 pt-4">
              <p className="flex items-center gap-1 font-sans text-xs font-normal text-gray-700 antialiased"></p>
              <span>{book.author}</span>
            </div>
          </div>
        )}
        {/* Small screen popup component */}
        {showPopup && (
          <div
            className={`popup ${currentTheme === 'dark' ? 'bg-gray-800' : 'bg-white'} hidden sm:block min-h-fit z-10 text-gray-800 fixed whitespace-normal break-words rounded-lg border border-blue-gray-50 p-4 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none mt-[-4rem] sm:w-[24rem]`}
            style={{ top: mousePosition.y, left: mousePosition.x }}
          >
            <h6 className="mb-2 flex items-center gap-2 font-sans text-base font-medium leading-relaxed tracking-normal text-blue-gray-900 antialiased">
              <span><a href={book.url}>{book.title}</a></span> •
              <a className="text-sm text-blue-gray-700" href="#">
                {book.free ? 'Free' : 'Paid'}
              </a>
            </h6>

            {/* Description */}
            <p className="block font-sans text-sm font-normal leading-normal text-gray-800 antialiased">
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
