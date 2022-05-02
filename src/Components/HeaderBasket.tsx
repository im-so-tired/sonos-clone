import React from "react";
import { Link } from "react-router-dom";
export const HeaderBasket: React.FC = () => {
  return (
    <header className="header-basket">
      <div className="Basket container-sm">
        <span style={{ fontSize: "20px" }}>Basket</span>
        <Link to="/shop">
          <span className="logo" style={{ margin: "0 auto" }}>
            SONOS
          </span>
        </Link>
        <div>
          <span>Secure Checkout </span>
        </div>
      </div>
    </header>
  );
};
