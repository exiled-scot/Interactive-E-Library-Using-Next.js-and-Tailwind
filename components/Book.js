import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

const Book = ({ book }) => {
  const { theme } = useTheme();
  const [imgError, setImgError] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const bookCardRef = useRef(null);

  const handleMouseEnter = () => {
    if (window.innerWidth < 768) { // Only show the popup if the screen width is less than 768 pixels
      setShowPopup(true);
    }
  };

  const handleMouseLeave = () => {
    setShowPopup(false);
  };

  const handleImageError = () => {
    setImgError(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const rect = bookCardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const topThreshold = windowHeight * 0.5;

      const isVisible = rect.top < windowHeight - topThreshold && rect.bottom >= topThreshold;

      setShowPopup(isVisible && window.innerWidth < 768); // Update the showPopup state only if the screen width is less than 768 pixels
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`border border-black ${theme === 'dark' ? 'bg-black' : 'bg-white'
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
              alt={book.title}
            />
          )}
        </a>
        {showPopup && (
          <div className={`popup ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} absolute z-10 text-gray-800 rounded-lg border border-blue-gray-50 p-4 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none right-4 top-2 w-full sm:w-[24rem]`}>
            <h6 className="mb-2 flex items-center gap-2 font-sans text-base font-medium leading-relaxed tracking-normal text-blue-gray-900 antialiased">
              <span><a href={book.url}>{book.title}</a></span> •
              <a className="text-sm text-blue-gray-700" href="#">
                {book.free ? 'Free' : 'Paid'}
              </a>
            </h6>
            <p className="block font-sans text-sm font-normal leading-normal text-gray-800 antialiased">
              {book.overview}
            </p>
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
