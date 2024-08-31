import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DECREASE_AMOUNT, DELETE_PRODUCT_ORDERED, INCREASE_AMOUNT } from "../redux/types";

import { Delete } from "@mui/icons-material";
import OrderedProductCart from '../components/OrderedProductCart'

function OrderProducts() {
  const orderedProduct = useSelector((state) => state.orderedList);
  console.log(orderedProduct);
  const dispatch = useDispatch();
  const totalPrice = orderedProduct.reduce((acc, curr) => acc + curr.price * curr.amount, 0).toFixed(2)

  return (
    <div className="container">
      <div className="font-bold text-4xl mt-5 text-center flex items-center justify-between">
        <h1>
          Ordered Products{" "}
          <small className="text-sm">({orderedProduct.length})</small>
        </h1>
        <p><small className="capitalize text-lg">total price:</small>${totalPrice}</p>
      </div>

      <div className="flex flex-col items-center gap-3 mt-3">
        {orderedProduct.length ? (
          orderedProduct.map((item, index) => (
            <OrderedProductCart item={item} key={index + 1}/>
          ))
        ) : (
          <p className="fixed top-0 left-0 w-full h-full capitalize flex items-center font-bold text-6xl text-neutral-400 justify-center">
            empty...
          </p>
        )}
      </div>
    </div>
  );
}

export default OrderProducts;
