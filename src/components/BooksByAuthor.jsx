import useFetch from "../useFetch";

export default function BooksByAuthor({ author }) {
  const { data, loading, error } = useFetch(
    `https://be-4-assignment1-liard.vercel.app/books/authors/${author}`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  const books = Array.isArray(data) ? data : [];

  return (
    <div>
      <h1>Books by {author}</h1>
      {books.length > 0 ? (
        <ul>
          {books.map((book) => (
            <li key={book._id}>
              <p>{book.title}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No books found for this author.</p>
      )}
    </div>
  );
}