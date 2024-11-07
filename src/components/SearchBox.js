const SearchBox = ({ searchQuery, onSearchInput }) => {
  return (
    <form>
      <input
        type="search"
        placeholder="Search by title..."
        value={searchQuery}
        onChange={onSearchInput}
      />
    </form>
  );
};
export default SearchBox;
