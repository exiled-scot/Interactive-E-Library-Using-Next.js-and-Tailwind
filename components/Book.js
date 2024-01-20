import { useState, useEffect } from 'react';

const Book = ({ book }) => {
  const [imgError, setImgError] = useState(false);
  const [showPopupDelayed, setShowPopupDelayed] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleImgError = () => {
    setImgError(true);
  };

  const handleMouseEnter = () => {
    if (!imgError) {
      setShowPopupDelayed(true);
    }
  };

  const handleMouseLeave = () => {
    setShowPopupDelayed(false);
    setShowPopup(false);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowPopup(showPopupDelayed && !imgError);
    }, 800);

    return () => clearTimeout(timeoutId);
  }, [showPopupDelayed, imgError]);

  return (
    <div
      className="border border-black bg-black relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!imgError ? (
        <div className="relative">
          <a href={book.url}>
            <img
              className="transform hover:scale-110 rounded-t-lg object-contain w-full h-full md:h-96 md:w-48 sm:h-48 sm:w-48"
              src={book.img}
              style={{ objectFit: 'fill' }}
              onError={handleImgError}
              alt="Book Cover"
            />

          </a>

          {showPopup && (
            <div className="fixed max-w-[24rem] whitespace-normal break-words rounded-lg border border-blue-gray-50 bg-white p-4 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none" style={{ zIndex: 9999 }}>
              {/* Title Info */}
              <h6 className="mb-2 flex items-center gap-2 font-sans text-base font-medium leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                <span><a href={book.url}>{book.title}</a></span> •
                <a className="text-sm text-blue-gray-700" href="#">
                  {book.free ? "Free" : "Paid"}
                </a>
              </h6>

              {/* Description */}
              <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
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

      ) : (
        <div className="bg-black transform hover:scale-110 rounded-t-lg object-contain w-full h-full md:h-96 md:w-48 sm:h-48 sm:w-48">
          Image Unavailable
        </div>
      )}
    </div>
  );
};

export default Book;
