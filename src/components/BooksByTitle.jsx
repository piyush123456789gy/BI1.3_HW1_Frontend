import useFetch from "../useFetch";

export default function BooksByTitle({ title }) {
  const { data, loading, error } = useFetch(
    `https://be-4-assignment1-liard.vercel.app/books/category/${title}`
  );

  return data ? (
    <div>
      <h1>{data.title}</h1>
      <p><strong>Author: </strong>{data.author}</p>
      <p><strong>Release Year: </strong>{data.publishedYear}</p>
      <p><strong>Genre: </strong>{data.genre.join(", ")}</p>
    </div>
  ): (
    loading && <p>Loading...</p>
  )
}
