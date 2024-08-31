import toast from "react-hot-toast";
import { SAVED_PRODUCT, DELETE_PRODUCT_SAVED } from "../types";

const initialState = [];

export const savedProduct = (state = initialState, action) => {
  switch (action.type) {
    case SAVED_PRODUCT:
      if (!state.includes(action.payload)) {
        toast.success('This product saved Saved List!')
        return [...state, action.payload];
      } else {
        toast.error('This product already exist at Saved List!')
        return [...state];
      }
      case DELETE_PRODUCT_SAVED:
        toast.success('This product deleted from Saved List!')
        
        return state.filter(item => item.id !== action.payload)
    default:
      return state;
  }
};
