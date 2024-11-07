const CartBookCard = ({ book, removeFromCart }) => {
  const truncatedTitle =
    book.volumeInfo.title.length > 17
      ? `${book.volumeInfo.title.slice(0, 17)}...`
      : book.volumeInfo.title;

  return (
    <div className="cart-book-card">
      <div className="cart-book-card-img">
        <img
          src={book.volumeInfo.imageLinks?.thumbnail || "default-thumbnail.jpg"}
          alt={book.volumeInfo.title || "No title available"}
        />
      </div>
      <div className="cart-book-card-content">
        <h3>{truncatedTitle}</h3>
        <div className="price-cart">
          <p>Quantity: {book.quantity}</p>
          <p>Price: ${(9.99 * book.quantity).toFixed(2)}</p>
        </div>
      </div>
      <button
        onClick={() => removeFromCart(book.id)}
        className="remove-from-cart"
      >
        ×
      </button>
    </div>
  );
};
export default CartBookCard;
