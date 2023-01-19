import React from "react";
import Pagination from "components/pagination/pagination";
import PerPage from "components/pagination/perPage";

export const PaginationFeature = () => {
  return (
    <div className="d-flex justify-content-between">
      <div className="d-flex">
        <h5>per page : </h5>
        <PerPage />
      </div>
      <Pagination />
    </div>
  );
};
