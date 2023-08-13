function SearchBar({ handleSubmit, handleChange, name }) {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="foodName" value={name} onChange={handleChange} />
      <input type="submit" value="Search" />
    </form>
  );
}
export default SearchBar;
