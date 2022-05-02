import React from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../hooks/reduxHooks";
import { sonosApi } from "../services/sonosApi";
import { Loader } from "./Loader";

export const SingleProduct: React.FC = () => {
  const { id } = useParams();
  const { data: basketProduct } =
    sonosApi.useGetAllProductOfBasketQuery("basket-products");
  const { data: info, isLoading } = sonosApi.useGetOneProductQuery(id!);
  const [addProduct, {}] = sonosApi.useAddProductInBasketMutation();
  const [updateBasketProduct, {}] = sonosApi.useUpdateBasketProductMutation();
  const handleClick = async () => {
    const newArray = basketProduct!.filter((item) => item.id === Number(id));
    if (newArray.length === 0) {
      await addProduct({ ...info!, quantity: 1 });
    } else {
      await updateBasketProduct({
        ...newArray[0],
        quantity: newArray[0].quantity + 1,
      });
    }
    const modalAppend = document.querySelector("#modal-append");
    modalAppend?.classList.remove("hide");
    setTimeout(() => {
      modalAppend?.classList.add("hide");
    }, 10000);
  };
  return (
    <div className="SingleProduct container-sm">
      {isLoading && <Loader></Loader>}
      <div className="img-container">
        <img alt="product" src={`${info?.img}`}></img>
      </div>
      <div className="description">
        <h1>{info?.title}</h1>
        <span className="price">&#8364;{info?.price}</span>
        <p>
          Bring all your entertainment to life with breathtakingly realistic
          sound and the 3D experience of Dolby Atmos.
        </p>
        <button className="btn" onClick={handleClick}>
          Add to basket
        </button>
      </div>
    </div>
  );
};
