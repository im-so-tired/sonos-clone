import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { fetchData, toggleLoading } from "../redux/basketSlice";
import { sonosApi } from "../services/sonosApi";
import { basketProduct, product } from "../types/type";
import { BasketItem } from "./BasketItem";
import { Loader } from "./Loader";
interface IBasketMainProps {
  data: basketProduct[] | undefined;
}
export const BasketMain: React.FC<IBasketMainProps> = ({ data }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchData(data));
  }, []);
  if (data!.length === 0) {
    return (
      <div className="EmptyBasket container-sm">
        <p className="center basket-empty">Your basket is empty</p>
        <p className="center continue">
          <Link to="/shop">Continue shopping</Link>
        </p>
      </div>
    );
  }
  let totalPrice = 0;
  data?.map((item) => {
    totalPrice += item.price * item.quantity;
    return item;
  });
  return (
    <div className="container-mc">
      <h5>Shopping basket - 3 items</h5>
      <div className="BasketMain">
        <div className="products">
          {data!.map((item) => {
            return <BasketItem key={item.id} info={item}></BasketItem>;
          })}
        </div>
        <div className="checkout">
          <div>
            <h5>Order Summary</h5>
          </div>
          <div>
            <div className="fl">
              <span>Subtotal</span>
              <span>&#8364;{totalPrice}</span>
            </div>
            <div className="fl">
              <span>Shipping</span>
              <span>&#8364;0</span>
            </div>
          </div>
          <div>
            <div style={{ fontWeight: "600" }} className="fl">
              <span>Estimated Total</span>
              <span>&#8364;{totalPrice}</span>
            </div>
          </div>
          <button className="btn">Checkout Now</button>
        </div>
      </div>
    </div>
  );
};
