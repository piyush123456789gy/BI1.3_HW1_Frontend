import { useState } from "react";
import useFetch from "../useFetch";

export default function Books() {
  const [successMessage, setSuccessMessage] = useState("");
  const { data, loading, error } = useFetch("https://be-4-assignment1-liard.vercel.app/books");
  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Loading...</p>;

  const books = data?.book || [];

  const handleDelete = async (booksId) => {
    try {
      const response = await fetch(`https://be-4-assignment1-liard.vercel.app/books/${booksId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw "Failed to delete the book.";
      }

      const data = await response.json();
      if (data) {
        setSuccessMessage("Book deleted successfully");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>All Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            {book.title} <button onClick={() => handleDelete(book._id)}>Delete</button>
          </li>
        ))}
      </ul>
      {successMessage}
    </div>
  );
}
/*import { useState } from "react";
import useFetch from "../useFetch";

export default function Hotels() {
  const [successMessage, setSuccessMessage] = useState("");
  const { data, loading, error } = useFetch("http://localhost:3000/hotels");
  // console.log(data);

  const handleDelete = async (hotelId) => {
    try {
      const response = await fetch(`http://localhost:3000/hotels/${hotelId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw "Failed to delete the movie.";
      }

      const data = await response.json();
      if (data) {
        setSuccessMessage("Hotel deleted successfully");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>All Hotels</h1>
      <ul>
        {data?.map((hotel) => (
          <li key={hotel._id}>{hotel.name} <button>Delete</button></li>
        ))}
      </ul>
    </div>
  );
}
 */
