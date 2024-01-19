import { useState } from 'react';

const Book = ({ book }) => {
  const [imgError, setImgError] = useState(false);

  const handleImgError = () => {
    setImgError(true);
  };

  return (
    <div className="border border-black bg-black">
      {!imgError ? (
        <img
          className="transform hover:scale-110 rounded-t-lg object-contain w-full h-full md:h-96 md:w-48 sm:h-48 sm:w-48"
          src={book.img}
          style={{ objectFit: 'fill' }}
          onError={handleImgError}
        />
      ) : (
        <div className="bg-black transform hover:scale-110 rounded-t-lg object-contain w-full h-full md:h-96 md:w-48 sm:h-48 sm:w-48">Image Unavailable</div>
      )}
    </div>
  );
};

export default Book;
