import React, { useEffect, useState } from 'react';
import Book from './Book';

const Books = ({ data, searchString }) => {
  const checkCondition = (elem) => {
    return elem.toLowerCase().includes(searchString.toLowerCase());
  }

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    
    handleResize();
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      className={`overflow-auto justify-items-center auto-cols-fr${isLargeScreen ? ' mx-40' : ''}`}
      style={{
        gridGap: '.75em',
        padding: '.75em',
        overflow: 'hidden',
        scrollbarWidth: 'thin',
        scrollbarColor: 'transparent transparent',
        '&::-webkit-scrollbar': {
          width: '0.5em',
          height: '0.5em',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'transparent',
        },
      }}
    >
      <div className="flex flex-wrap gap-4">
        {
          data.map((book, index) => {
            if (checkCondition(book.title) || checkCondition(book.author)) {
              return (
                <div key={index} className="border border-gray-100 mt-1">
                  <Book book={book} />
                </div>
              )
            } else return <></>
          })
        }
      </div>
    </section>
  )
}

export default Books;
