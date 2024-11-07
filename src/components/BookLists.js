import axios from "axios";
import { useEffect } from "react";
import BookCard from "./BookCard";


const BookLists = ({ books, setBooks, searchQuery, addToCart }) => {
  const filteredBooks = books.filter((book) =>
    book.volumeInfo?.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=javascript")
      .then((response) => setBooks(response.data.items || []))
      .catch((error) => console.error("Error fetching data:", error));
  }, [setBooks]);

  return (
    <section className="popular-books">
      {filteredBooks.map((book) => (
        <BookCard key={book.id} book={book} addToCart={addToCart} />
      ))}
    </section>
  );
};

export default BookLists;
