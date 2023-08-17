import Book from './Book';

const Books = ({ data, searchString }) => {
    const checkCondition = (elem) => {
        return elem.toLowerCase().includes(searchString.toLowerCase());
    }

    return (
        <section className="grid justify-items-center gap-4">
        {
            data.map((book, index) => {
                if (checkCondition(book.title) || checkCondition(book.author)) {
                    return (
                        <div key={index} className="border border-gray-100 mt-1">
                            <Book book={book} />
                        </div>
                    )
                }
                else return <></>
            })
        }
        </section>
    )
}

export default Books;
