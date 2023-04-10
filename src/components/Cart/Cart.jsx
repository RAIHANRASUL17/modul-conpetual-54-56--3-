import React, { useEffect, useState } from "react";
import { getAllDb } from "../Utilities/FakeDb";
import { useLoaderData } from "react-router-dom";
import CartItem from "../Cards/CartItem";

const Cart = () => {
  const { savedInArray, fetchItems } = useLoaderData();
  // console.log(savedInArray);
  // console.log(fetchItems);
  return (
    <>
      <h1>length of savedItem in cart = {savedInArray.length}</h1>
      <h1>length of allItems in cart = {fetchItems.length}</h1>

      <div className="flex min-h-screen items-start justify-center bg-gray-100 text-gray-900">
        <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10">

          {savedInArray.map((product) => (
            <CartItem key={product.id} product={product}></CartItem>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;
