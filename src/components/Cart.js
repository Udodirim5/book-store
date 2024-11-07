import { useState } from "react";
import CartBookCard from "./CartBookCard";

const Cart = ({ cartItems, removeFromCart, numOfBooksInCart }) => {
  const [haveCode, setHaveCode] = useState(false);
  const [discountCode, setDiscountCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + 9.99 * item.quantity,
    0
  );

  const discountedTotal = totalPrice - (totalPrice * discount) / 100;

  const handleTogglePromoCode = () => {
    setHaveCode((haveCode) => !haveCode);
  };

  const handleSubmitCode = (e) => {
    e.preventDefault();

    // Apply promo code logic
    if (discountCode === "BOOKSTORE") {
      setDiscount(10); // Set a 10% discount
      setDiscountCode(""); // Reset discount code if code is applied
    } else {
      alert("Invalid discount code");
      setDiscount(0); // Reset discount if code is invalid
    }
  };

  const removeDiscount = () => {
    setDiscount(0);
  };

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {numOfBooksInCart > 0  ?<ul>
        {cartItems.map((item) => (
          <CartBookCard
            key={item.id}
            book={item}
            removeFromCart={removeFromCart}
          />
        ))}
      </ul>
        :<p className="empty-cart-message">Your cart is empty</p>}

      {numOfBooksInCart > 0 ? (
        <>
          <h3 onClick={handleTogglePromoCode}>I have a promo code:</h3>
          {haveCode && (
            <form className="promo-form" onSubmit={handleSubmitCode}>
              <input
                type="text"
                autoFocus
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
              />
              <button type="submit">Apply</button>
            </form>
          )}
          {discount > 0 && (
            <p>
              Discount applied: {discount}%{" "}
              <span onClick={removeDiscount}>❌</span>
            </p>
          )}
          <div className="total-price">
            <p>Total: ${discountedTotal.toFixed(2)}</p>
            <button>Checkout</button>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cart;
