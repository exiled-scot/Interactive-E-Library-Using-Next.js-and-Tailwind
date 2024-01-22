import data from '../../../data/books.json';
import Head from 'next/head';
import Link from 'next/link';
import { FaStar } from "react-icons/fa";
import { useRouter } from 'next/router';

const Book = () => {
  const router = useRouter();
  const { title } = router.query;
  const book = data.find(elem => elem.title === title);

  const StarRating = ({ rating }) => {
    const filledStars = Math.floor(rating); // Get the integer part of the rating

    // Create an array of SVG elements representing filled stars
    const stars = Array.from({ length: filledStars }, (_, index) => (
      <svg key={index} className="w-6 h-6 ms-2 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
    ));

    // Render the div element with the stars

    return (
      <div className="py-4 flex items-center">
        {stars}
        {/* Empty stars */}
        <svg
          className="w-6 h-6 ms-2 text-gray-300 dark:text-gray-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <div className="ml-4 font-bold text-xl ml-2">
          {book?.rating}
        </div>
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex justify-center">
        <div className="flex justify-start items-center max-w-4xl md:h-full">
          <div className="object-contain h-auto w-4/5">
            <div className="md:mt-10">
              <img src={book?.img} alt='Book Cover' />
            </div>
          </div>
          <div className="flex flex-col justify-center text-left">
            <h1 className="font-bold text-3xl md:text-4xl mb-2 text-left">
              {book?.title}
            </h1>
            <h2 className="font-semibold mb-2 text-left">
              {book?.author}
            </h2>

            <StarRating rating={book?.rating} />

            <p className="font-medium mb-2 text-left">
              {book?.overview}
            </p>
            <br />

            <p className="font-medium mb-2 text-left">
              Published in: {book?.date}
            </p>
            <p className="font-medium mb-2 text-left">
              Genre: {book?.genre.join(", ")}
            </p>
            <p className="font-medium mb-2 text-left">
              Tags: {book?.tags.join(", ")}
            </p>
            <br />
            <div className="mt-6 about-author">
              <h1 className="font-bold text-2xl">
                About the Author
              </h1>

              <div className="mt-4 flex items-center">
                <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center">
                  <span className="text-white font-bold">
                    {book?.author[0]}
                  </span>
                </div>
                <h3 className="ml-6 mt-1.5 text-lg font-semibold">
                  {book?.author}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Book;
