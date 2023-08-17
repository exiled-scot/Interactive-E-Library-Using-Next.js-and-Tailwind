const Book = ({ book }) => {
  return (
    <div className="text-center flex flex-col items-center bg-white md:flex-row md:max-w-3xl hover:bg-gray-100">
        <img
            className="transform hover:scale-110 rounded-t-lg md:h-auto md:w-48 sm:h-auto sm:w-48"
            src={book.img}
            alt="Image could not load"
        />
        <div className="flex flex-col justify-space-around items-center p-4 cursor-pointer">
            <div>
                <div className='no-underline hover:underline hover:text-blue-800'>
                    <a href={book.url}>{book.title}</a>
                </div>
                <div style={{paddingTop: '1rem'}}>{book.author}</div>
                <div className="mt-2">{book.overview}</div>
                <div className="mt-3" style={{paddingBottom: '1rem'}}>{book.free ? "Free" : "Paid"}</div>
            </div>
            <button
                className="w-38 mt-1 py-2 px-4 rounded bg-blue-600 hover:bg-blue-700 text-white font-bold"
                onClick={() => {
                    window.open(book.url);
                }}
            >
                Visit Website
            </button>
        </div>
    </div>
  )
}

export default Book;
