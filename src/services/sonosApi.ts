import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { basketProduct, product } from "../types/type";

export const sonosApi = createApi({
  reducerPath: "sonosApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["Basket"],
  endpoints: (builder) => ({
    getAllProduct: builder.query<product[], string>({
      query: (name) => ({
        url: `/${name}`,
      }),
    }),
    getOneProduct: builder.query<product, string>({
      query: (id) => ({
        url: `/products/${id}`,
      }),
    }),
    getAllProductOfBasket: builder.query<basketProduct[], string>({
      query: (name) => ({
        url: `/${name}`,
      }),
      providesTags: (result) => ["Basket"],
    }),
    addProductInBasket: builder.mutation<basketProduct, basketProduct>({
      query: (product) => ({
        method: "POST",
        url: "/basket-products",
        body: product,
      }),
      invalidatesTags: ["Basket"],
    }),
    removeOneProduct: builder.mutation<product, number>({
      query: (id) => ({
        method: "DELETE",
        url: `/basket-products/${id}`,
      }),
      invalidatesTags: ["Basket"],
    }),
    updateBasketProduct: builder.mutation<basketProduct, basketProduct>({
      query: (product) => ({
        url: `/basket-products/${product.id}`,
        method: "PUT",
        body: product,
      }),
      invalidatesTags: ["Basket"],
    }),
  }),
});
