import Books from "./components/Books";
import BooksByAuthor from "./components/BooksByAuthor";
import BooksByTitle from "./components/BooksByTitle";
import AddBook from "./components/AddBook";
import "./App.css";

function App() {
  return (
    <>
      <div className="app">
        <h1>⚛️ react playground!</h1>
        <p>Crafted with care by Tanay Pratap ❤️ - Happy coding!</p>
        <AddBook />
        <Books />
        <BooksByTitle title="Shoe Dog" />
        <BooksByAuthor author="Dan Brown"/>
      </div>
    </>
  );
}

export default App;
