import { useEffect, useState } from "react";
import data from "../../../data/books.json";
import Head from "next/head";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { useRouter } from "next/router";
import Reviews from "../../../components/Reviews";
import Custom404 from "../../404";

const Book = () => {
  const reviews = {
    reviews: [
      {
        title: "Great course",
        rating: 4,
        author: "John Doe",
        description: "This course was really helpful and informative. I highly recommend it.",
      },
      {
        title: "Great course",
        rating: 4,
        author: "John Doe",
        description: "This course was really helpful and informative. I highly recommend it.",
      },
      {
        title: "Well-explained content",
        rating: 5,
        author: "Jane Smith",
        description: "The instructor did a fantastic job explaining complex concepts in an easy-to-understand manner.",
      },
    ],
  };

  const router = useRouter();
  const { title } = router.query;
  const [book, setBook] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const selectedBook = data.find((elem) => elem.title === title);
    setBook(selectedBook);
    setIsLoading(false); // Set isLoading to false after the book data is fetched and set
  }, [title]);

  const StarRating = ({ rating }) => {
    const filledStars = Math.floor(rating); // Get the integer part of the rating

    // Create an array of SVG elements representing filled stars
    const filledStarIcons = Array.from({ length: filledStars }, (_, index) => (
      <FaStar
        key={index}
        className="w-6 h-6 ms-2 text-yellow-300"
        aria-hidden="true"
      />
    ));

    // Create an array of SVG elements representing empty stars
    const emptyStarIcons = Array.from({ length: 5 - filledStars }, (_, index) => (
      <FaStar
        key={index + filledStars}
        className="w-6 h-6 ms-2 text-gray-300 dark:text-gray-500"
        aria-hidden="true"
      />
    ));

    // Render the div element with the stars
    return (
      <div className="py-4 flex items-center">
        {/* Render filled stars */}
        {filledStarIcons}
        {/* Render empty stars */}
        {emptyStarIcons}
        <div className="ml-4 font-bold text-xl ml-2">{rating}</div>
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {book && !isLoading ? (
        <div className="flex flex-col items-center py-12">
          <div className="max-w-4xl md:h-full">
            <div className="flex flex-col justify-center text-left px-4 md:px-0">
              <div className="grid md:grid-cols-2 md:gap-10">
                {/* Right column - Image */}
                <div className="md:order-1">
                  <img className="w-full" src={book.img} alt="Book Cover" />
                  <br />
                </div>

                {/* Left column - Text */}
                <div className="md:order-0">
                  <h1 className="font-bold text-3xl md:text-4xl mb-2 text-left">
                    {book.title}
                  </h1>
                  <h2 className="font-semibold mb-2 text-left">
                    {book.author}
                  </h2>

                  <StarRating rating={book.rating} />

                  <p className="font-medium mb-2 text-left">
                    {book.overview}
                  </p>
                  <br />

                  <p className="font-medium mb-2 text-left">
                    Published in: {book.date}
                  </p>
                  <p className="font-medium mb-2 text-left">
                    Genre: {book.genre.join(", ")}
                  </p>
                  <p className="font-medium mb-2 text-left">
                    Tags: {book.tags.join(", ")}
                  </p>
                  <br />
                  <div className="mt-6 about-author">
                    <h1 className="font-bold text-2xl">About the Author</h1>

                    <div className="mt-4 flex items-center">
                      <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center">
                        <span className="text-white font-bold">
                          {book.author[0]}
                        </span>
                      </div>
                      <h3 className="ml-6 mt-1.5 text-lg font-semibold">
                        {book.author}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <Reviews reviews={reviews} />
          </div>
        </div>
      ) : (
        <Custom404/>
      )}
    </>
  );
};

export default Book;
