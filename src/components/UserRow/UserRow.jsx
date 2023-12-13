import React, { useState } from "react";
import { AiOutlineEdit, AiOutlineCheck, AiOutlineDelete } from "react-icons/ai";
import "./UserRow.css";

export default function UserRow({ user, state, dispatch }) {
  const { selectedRows, editRowData, isEditing } = state;

  const [editedName, setEditedName] = useState(user.name);
  const [editedEmail, setEditedEmail] = useState(user.email);
  const [editedRole, setEditedRole] = useState(user.role);

  const handleSelectRow = (rowId) => {
    dispatch({ type: "SELECT_ROW", payload: { selectedRowId: rowId } });
  };

  const handleEditRow = (rowData) => {
    const isRowEditing = Object.values(isEditing).includes(true);

    if (isRowEditing) {
      alert("Finish editing the current row before starting a new edit.");
    } else {
      dispatch({ type: "EDIT_ROW", payload: rowData });
    }
  };

  const handleSaveRow = () => {
    if (editedName.trim() === "" || editedEmail.trim() === "") {
      alert("Name and email can't be empty.");
      return;
    }

    const editedUserData = {
      id: editRowData.id,
      name: editedName,
      email: editedEmail,
      role: editedRole,
    };
    dispatch({ type: "SAVE_EDITED_ROW", payload: editedUserData });
  };

  const handleDeleteRow = (rowId) => {
    dispatch({ type: "DELETE_ROW", payload: rowId });
  };

  const isSelected = selectedRows.includes(user.id);

  return (
    <tr className={isSelected ? "selected-row" : ""}>
      <td>
        <input
          type="checkbox"
          onChange={() => handleSelectRow(user.id)}
          checked={selectedRows.includes(user.id)}
        />
      </td>
      <td>
        {isEditing[user.id] ? (
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            className="user-action"
          />
        ) : (
          user.name
        )}
      </td>
      <td>
        {isEditing[user.id] ? (
          <input
            type="text"
            value={editedEmail}
            onChange={(e) => setEditedEmail(e.target.value)}
            className="user-action"
          />
        ) : (
          user.email
        )}
      </td>
      <td>
        {isEditing[user.id] ? (
          <select
            value={editedRole}
            onChange={(e) => setEditedRole(e.target.value)}
            className="user-select"
          >
            {editedRole === "Member" ? (
              <>
                <option value="Admin">admin</option>
                <option value="Member">member</option>
              </>
            ) : (
              <>
                <option value="Member">member</option>
                <option value="Admin">admin</option>
              </>
            )}
          </select>
        ) : (
          user.role
        )}
      </td>
      <td>
        <div className="btn-container">
          {isEditing[user.id] ? (
            <button className="user-btn save" onClick={handleSaveRow}>
              <AiOutlineCheck />
            </button>
          ) : (
            <button
              className="user-btn edit"
              onClick={() => handleEditRow(user)}
            >
              <AiOutlineEdit />
            </button>
          )}

          <button
            className="user-btn delete"
            onClick={() => handleDeleteRow(user.id)}
          >
            <AiOutlineDelete />
          </button>
        </div>
      </td>
    </tr>
  );
}
