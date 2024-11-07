import SearchBox from "./SearchBox";

const Nav = ({
  setIsCartOpen,
  isCartOpen,
  searchQuery,
  onSearchInput,
  numOfBooksInCart,
}) => {
  const handleToggleCart = () => {
    setIsCartOpen((isCartOpen) => !isCartOpen);
  };
  return (
    <nav>
      <h1>BOOKSTORE</h1>
      <SearchBox searchQuery={searchQuery} onSearchInput={onSearchInput} />
      <button onClick={handleToggleCart}>
        🛒
        {numOfBooksInCart > 0 ? (
          <span>
            <sup>{numOfBooksInCart}</sup>
          </span>
        ) : (
          ""
        )}
      </button>
    </nav>
  );
};
export default Nav;
