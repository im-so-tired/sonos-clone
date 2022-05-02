import React, { useEffect } from "react";
import { BasketMain } from "../Components/BasketMain";
import { HeaderBasket } from "../Components/HeaderBasket";
import { Loader } from "../Components/Loader";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { fetchData, toggleLoading } from "../redux/basketSlice";
import { sonosApi } from "../services/sonosApi";

export const Basket: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading } =
    sonosApi.useGetAllProductOfBasketQuery("basket-products");

  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <>
      <HeaderBasket></HeaderBasket>
      <BasketMain data={data}></BasketMain>
    </>
  );
};
