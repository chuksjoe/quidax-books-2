import useGetBooks from "../hooks/useGetBooks";
import BookCard from "./BookCard";

function Books() {
  const { loading, error, data } = useGetBooks();

  return (
    <section className="w-full relative">
      <div className="content margin-center">
        <h3 className="font-bold text-sm border-b border-gray-200 pb-3">All Books</h3>
        <div className="flex wrap -mx-3 mt-3 mb-10">
          {loading && <p>Loading...</p>}
          {error && <p>{error.toString()}</p>}
          {data?.map((item) => (
            <div className="book-card-container" key={item?.id}>
              <BookCard data={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Books;
