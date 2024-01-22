import data from '../../../data/books.json';
import Head from 'next/head';
import Link from 'next/link';
import { FaStar } from "react-icons/fa";
import { useRouter } from 'next/router';

const Book = () => {
  const router = useRouter();
  const { title } = router.query;
  const book = data.find(elem => elem.title === title);

  const rating = (book?.rating ?? 0) === 0 ? (
    <>
      {Array(5)
        .fill("")
        .map((_, index) => (
          <span
            key={index}
            className={`text-4xl text-yellow-700 dark:text-yellow-600 star-empty`}
          >
            ★
          </span>
        ))}
    </>
  ) : (
    <>
      {Array(5)
        .fill("")
        .map((_, index) => (
          <span
            key={index}
            className={`text-yellow-700 dark:text-yellow-600 star-filled`}
          >
            ★
          </span>
        ))}
    </>
  );

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex justify-center leading-[2]">
        <div className="flex justify-start items-center max-w-4xl md:h-full">
          <div className="object-contain h-auto w-4/5">
            <div className="md:mt-10 mt-0">
              <img src={book?.img} alt='Book Cover' />
            </div>
          </div>
          <div className="flex flex-col justify-center text-left">
            <h1 className="font-bold text-3xl mb-2 text-left">
              {book?.title}
            </h1>
            <h2 className="text-sm font-semibold mb-2 text-left">
              {book?.author}
            </h2>
            <br />
            <div className="flex gap-1 items-center justify-start mb-2">
              {rating}
            </div>
            <p className="text-sm font-medium mb-2 text-left">
              {book?.overview}
            </p>
            <br />

            <p className="text-sm font-medium mb-2 text-left">
              Published in: {book?.date}
            </p>
            <p className="text-sm font-medium mb-2 text-left">
              Genre: {book?.genre.join(", ")}
            </p>
            <p className="text-sm font-medium mb-2 text-left">
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
