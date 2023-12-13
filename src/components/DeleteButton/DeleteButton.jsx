import "./DeleteButton.css";
export default function DeleteButton({ dispatch }) {
  function handleDeleteRows() {
    dispatch({ type: "DELETE_SELECTED_ROWS" });
  }
  return (
    <button className="delete-button" onClick={handleDeleteRows}>
      Delete Selected
    </button>
  );
}
