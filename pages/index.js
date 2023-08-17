import Books from '../components/Books';
import data from '../data/books.json';

const Home = () => {
  return (
    <>
      <Books
        data={data}
      />
    </>
  );
}
export default Home;
