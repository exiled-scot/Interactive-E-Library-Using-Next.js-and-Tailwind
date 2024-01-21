import { useState, useRef } from 'react';
import Books from '../components/Books';
import data from '../data/books.json';

const Home = () => {
  const [searchString, setSearchString] = useState('');

  return (
    <>
      <Books data={data} searchString={searchString} />
    </>
  );
};


export default Home;