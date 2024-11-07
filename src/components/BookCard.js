const BookCard = ({ book, addToCart }) => {
  const truncatedTitle =
    book.volumeInfo.title.length > 25
      ? `${book.volumeInfo.title.slice(0, 17)}...`
      : book.volumeInfo.title;
  return (
    <div className="book-card">
      <img
        src={book.volumeInfo.imageLinks?.thumbnail || "default-thumbnail.jpg"}
        alt={book.volumeInfo.title || "No title available"}
      />
      <h3>{truncatedTitle}</h3>
      <div className="price-cart">
        <p>$9.99</p>
        <button onClick={() => addToCart(book)} className="add-to-cart">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default BookCard;
