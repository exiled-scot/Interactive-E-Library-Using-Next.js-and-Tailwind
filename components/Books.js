import Book from './Book';

const Books = ({ data }) => {

    return (
        <section className="grid justify-items-center gap-4">
        {
            data.map((book, index) => {
                return (
                    <div key={index} className="border border-gray-100 mt-1">
                        <Book book={book} />
                    </div>
                )
            })
        }
        </section>
    )
}

export default Books;
