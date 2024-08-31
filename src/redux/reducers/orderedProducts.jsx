import toast from "react-hot-toast";
import {
  DECREASE_AMOUNT,
  DELETE_PRODUCT_ORDERED,
  INCREASE_AMOUNT,
  ORDERED_PRODUCT,
} from "../types";

const initialState = [];

export const orderedList = (state = initialState, action) => {
  switch (action.type) {
    case ORDERED_PRODUCT:
      if (state.some((item) => item.id === action.payload.id)) {
        toast.error("This product already exist at Ordered List!");
        return state;
      } else {
        toast.success("This product added Ordered List!");
        return [...state, { ...action.payload, amount: 1 }];
      }
    case INCREASE_AMOUNT:
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, amount: item.amount + 1 }
          : item
      );
    case DECREASE_AMOUNT:
      return state.map((item) =>
        item.id == action.payload.id
          ? { ...item, amount: item.amount >= 1 ? 1 : item.amount - 1 }
          : item
      );
    case DELETE_PRODUCT_ORDERED:
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};
