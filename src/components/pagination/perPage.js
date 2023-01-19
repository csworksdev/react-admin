import React from "react";

const PerPage = () => {
  const data = [20, 40, 80];
  return (
    <div>
      <nav aria-label="...">
        <ul className="pagination pagination-sm">
          <li className="page-item active" aria-current="page">
            <span className="page-link">1</span>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default PerPage;
