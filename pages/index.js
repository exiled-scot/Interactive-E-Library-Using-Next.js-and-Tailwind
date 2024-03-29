import React, { useState } from 'react';
import Books from '../components/Books';
import data from '../data/books.json';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [searchString, setSearchString] = useState('');

  const handleSearch = (e) => {
    setSearchString(e.target.value);
  };

  return (
    <>
      <div className="hidden sm:block absolute top-5 right-40 z-50">
        <SearchBar searchString={searchString} handleSearch={handleSearch} />
      </div>
      <Books data={data} searchString={searchString} />
    </>
  );
};

export default Home;
