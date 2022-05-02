/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
export const AppendModal: React.FC = () => {
  return (
    <div className="hide" id="modal-append">
      <span>Added to basket!</span>
      <Link style={{ width: "100%" }} to="/cart">
        <button className="btn">Check Out</button>
      </Link>
    </div>
  );
};
