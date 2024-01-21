import React, { useState } from 'react';
import Books from '../components/Books';
import data from '../data/books.json';
import Header from '../components/Header';

const Home = () => {
  const [searchString, setSearchString] = useState('');

  const handleSearch = (e) => {
    setSearchString(e.target.value);
  };

  return (
    <>
      <Header searchString={searchString} handleSearch={handleSearch} />
      <Books data={data} searchString={searchString} />
    </>
  );
};

export default Home;
