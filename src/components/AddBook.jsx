import { useState } from "react";

export default function AddBookForm() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publishedYear: "",
    genre: "",
    language: "",
    country: "",
    rating: "",
    summary: "",
    coverImageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]:
        name === "publishedYear" || name === "rating" ? parseInt(value) : value,
    }));
  };

  console.log("Form data being sent:", formData);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://be-4-assignment1-liard.vercel.app/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw "Failed to add the book";
      }

      const data = await response.json();
      console.log("Added Book", data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Add New Books</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <br />
          <input
            type="text"
            name="title"
            value={formData.title}
            required
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Author:
          <br />
          <input
            type="text"
            name="author"
            value={formData.author}
            required
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Published Year:
          <br />
          <input
            type="number"
            name="publishedYear"
            value={formData.publishedYear}
            required
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Genre (comma-separated):
          <br />
          <input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Language:
          <br />
          <input
            type="text"
            name="language"
            value={formData.language}
            required
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Country:
          <br />
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Rating:
          <br />
          <input
            type="number"
            name="rating"
            value={formData.rating}
            min="0"
            max="10"
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Summary:
          <br />
          <input
            name="summary"
            value={formData.summary}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Cover Image URL:
          <br />
          <input
            type="text"
            name="coverImageUrl"
            value={formData.coverImageUrl}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
