import React from "react";
import { AiOutlineUser, AiOutlineSearch } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AppendModal } from "./modalWindow/appendProduct";
export const HeaderShop: React.FC = () => {
  return (
    <header>
      <div className="container-bg header-shop">
        <div className="logo-container flex-container">
          <span className="logo">sonos</span>
        </div>
        <ul className="nav flex-container">
          <li className="flex-container">
            <Link to="/shop">
              <span>Shop</span>
            </Link>
          </li>
          <li className="flex-container">
            <span>Learn</span>
          </li>
          <li className="flex-container">
            <span>Support</span>
          </li>
          <li className="flex-container">
            <span>Radio</span>
          </li>
        </ul>
        <div className="group-icons flex-container">
          <ul className="nav flex-container">
            <li className="flex-container">
              <AiOutlineUser></AiOutlineUser>
            </li>
            <li className="flex-container">
              <AiOutlineSearch></AiOutlineSearch>
            </li>
            <li className="flex-container cart-svg">
              <Link to="/cart">
                <BsCart4></BsCart4>
              </Link>
              <AppendModal></AppendModal>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
