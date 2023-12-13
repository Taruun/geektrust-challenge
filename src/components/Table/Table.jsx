import React from "react";
import UserRow from "../UserRow/UserRow";
import "./Table.css";

export default function Table({ itemsPerPage, state, dispatch }) {
  const { selectedRows, currentPage, filteredUsers } = state;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleUsers = filteredUsers.slice(startIndex, endIndex);

  const handleSelectAll = () => {
    dispatch({ type: "SELECT_ALL_ROWS" });
  };

  return (
    <div className="table-container">
      <table className="table">
        <thead className="table-title">
          <tr>
            <th>
              <input
                type="checkbox"
                onChange={handleSelectAll}
                checked={selectedRows.length === visibleUsers.length}
              />
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {visibleUsers.map((user) => (
            <UserRow
              key={user.id}
              user={user}
              state={state}
              dispatch={dispatch}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
