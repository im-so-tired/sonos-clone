import React from "react";
import { SingleItem } from "./SingleItem";
import { sonosApi } from "../services/sonosApi";
import { Loader } from "./Loader";
export const Shop: React.FC = () => {
  let { data, isLoading } = sonosApi.useGetAllProductQuery("products");
  return (
    <div className="Shop container-sm">
      <h1 className="center">Shop</h1>
      {isLoading && <Loader></Loader>}
      <main>
        {data?.map((item) => {
          return <SingleItem key={item.id} info={item}></SingleItem>;
        })}
      </main>
    </div>
  );
};
