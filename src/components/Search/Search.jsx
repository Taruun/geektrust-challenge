import "./Search.css";
export default function Search({ dispatch }) {
  function handleInputChange(e) {
    const searchQuery = e.target.value;
    dispatch({ type: "FILTER_USERS", payload: searchQuery });
  }
  return (
    <div className="search-box">
      <input
        className="search-input"
        type="text"
        placeholder="Search by name, email or role"
        onChange={handleInputChange}
      />
    </div>
  );
}
