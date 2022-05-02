import React from "react";
import { product } from "../types/type";
import { Link } from "react-router-dom";
interface SingelItemProps {
  info: product;
}
export const SingleItem: React.FC<SingelItemProps> = ({ info }) => {
  return (
    <Link to={`/shop/${info.id}`}>
      <div className="SingleItem">
        <div className="img-container">
          <img alt="product" src={info.img}></img>
        </div>
        <h5>{info.title}</h5>
        <div className="description">
          <p>{info.description}</p>
          <span className="price">&#8364;{info.price}</span>
        </div>
      </div>
    </Link>
  );
};
