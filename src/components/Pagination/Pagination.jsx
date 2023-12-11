import React from "react";
import {
  AiOutlineDoubleLeft,
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineDoubleRight,
} from "react-icons/ai";
import "./Pagination.css";

export default function Pagination({ itemsPerPage, state, dispatch }) {
  const { currentPage, totalItems } = state;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  function handlePagination(page) {
    dispatch({ type: "SET_CURRENT_PAGE", payload: page });
  }

  function renderPaginationButtons() {
    const pageButtons = [];

    pageButtons.push(
      <button
        key="first"
        onClick={() => handlePagination(1)}
        className={currentPage === 1 ? "disabled" : ""}
      >
        <AiOutlineDoubleLeft />
      </button>
    );

    pageButtons.push(
      <button
        key="previous"
        onClick={() => handlePagination(currentPage - 1)}
        className={currentPage === 1 ? "disabled" : ""}
      >
        <AiOutlineLeft />
      </button>
    );

    for (let page = 1; page <= totalPages; page++) {
      pageButtons.push(
        <button
          key={page}
          onClick={() => handlePagination(page)}
          className={currentPage === page ? "active" : ""}
        >
          {page}
        </button>
      );
    }

    pageButtons.push(
      <button
        key="next"
        onClick={() => handlePagination(currentPage + 1)}
        className={currentPage === totalPages ? "disabled" : ""}
      >
        <AiOutlineRight />
      </button>
    );

    pageButtons.push(
      <button
        key="last"
        onClick={() => handlePagination(totalPages)}
        className={currentPage === totalPages ? "disabled" : ""}
      >
        <AiOutlineDoubleRight />
      </button>
    );

    return pageButtons;
  }

  return <div className="pagination">{renderPaginationButtons()}</div>;
}
