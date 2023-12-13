import React, { useEffect, useReducer } from "react";
import "./Home.css";
import Pagination from "../Pagination/Pagination";
import Search from "../Search/Search";
import Table from "../Table/Table";
import DeleteButton from "../DeleteButton/DeleteButton";
import { userReducer, initialState } from "../../reducers/userReducer";

const URL =
  "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

export default function Home() {
  const [state, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    updateTotalItems();
  }, [state.filteredUsers]);

  async function fetchData() {
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      dispatch({ type: "SET_USERS", payload: data });
    } catch (err) {
      handleFetchError(err);
    }
  }

  function handleFetchError(err) {
    console.error("Error fetching users:", err);
  }

  function updateTotalItems() {
    const totalItems = state.filteredUsers.length;
    dispatch({ type: "SET_TOTAL_ITEMS", payload: totalItems });
  }

  return (
    <div>
      <Search dispatch={dispatch} />
      <Table itemsPerPage={10} state={state} dispatch={dispatch} />
      <div className="footer">
        <DeleteButton dispatch={dispatch} />
        <Pagination itemsPerPage={10} state={state} dispatch={dispatch} />
      </div>
    </div>
  );
}
