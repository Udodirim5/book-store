import { useState } from "react";
import Nav from "./Nav";
import Cart from "./Cart";
import BookLists from "./BookLists";

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const numOfBooksInCart = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const addToCart = (book) => {
    setCartItems((prevItems) => {
      // Check if the book is already in the cart
      const itemInCart = prevItems.find((item) => item.id === book.id);

      if (itemInCart) {
        // If it's already in the cart, increase the quantity
        return prevItems.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If not in the cart, add it with quantity of 1
        return [...prevItems, { ...book, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (bookId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== bookId));
  };

  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <header>
        <Nav
          numOfBooksInCart={numOfBooksInCart}
          setIsCartOpen={setIsCartOpen}
          isCartOpen={isCartOpen}
          searchQuery={searchQuery}
          onSearchInput={handleSearchInput}
        />
      </header>
      <main>
        <BookLists
          books={books}
          setBooks={setBooks}
          searchQuery={searchQuery}
          addToCart={addToCart}
        />
      </main>
      {isCartOpen && (
        <aside>
          <Cart
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            numOfBooksInCart={numOfBooksInCart}
          />
        </aside>
      )}

      <footer></footer>
    </div>
  );
};

export default App;
