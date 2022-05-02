import { iteratorSymbol } from "immer/dist/internal";
import React, { useRef } from "react";
import { BsFillBasket3Fill } from "react-icons/bs";
import { sonosApi } from "../services/sonosApi";
import { basketProduct, product } from "../types/type";
interface IPropsBasketItem {
  info: basketProduct;
}
export const BasketItem: React.FC<IPropsBasketItem> = ({ info }) => {
  const [updateProduct, {}] = sonosApi.useUpdateBasketProductMutation();
  const select = useRef<any>(null);
  const styles = {
    divImg: {
      backgroundImage: `url(${info.img})`,
      backgroundSize: "cover",
      backgroundPosition: "50% 50%",
      height: "7rem",
      width: "11rem",
      marginRight: "2rem",
    },
  };
  const [removeProduct] = sonosApi.useRemoveOneProductMutation();
  const handleClick = async () => {
    await removeProduct(info.id);
  };
  const handleChange = async (e: React.ChangeEvent) => {
    const value = select.current?.value;
    updateProduct({ ...info, quantity: value });
  };
  return (
    <div className="BasketItem">
      <div style={styles.divImg}></div>
      <div className="options">
        <div>
          <p>{info.title}</p>
          <div>
            <label>Quantity</label>
            <select
              ref={select}
              onChange={(e) => handleChange(e)}
              defaultValue={`${info.quantity}`}
              className="browser-default"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
        </div>
        <div>
          <p>&#8364;{info.price}</p>
          <button onClick={handleClick}>
            <BsFillBasket3Fill></BsFillBasket3Fill>Remove
          </button>
        </div>
      </div>
    </div>
  );
};
