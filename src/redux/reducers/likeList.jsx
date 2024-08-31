import toast from "react-hot-toast";
import { DELETE_PRODUCT_LIKED, LIKE_SAVE } from "../types";

const initialState = [];

export const likeList = (state = initialState, action) => {
  switch (action.type) {
    case LIKE_SAVE:
      if (!state.includes(action.payload)) {
        toast.success("This product added Liked List!");
        action.payload.isLiked = true
        
        return [...state, action.payload];
      } else {
        toast.error("This product is already exist at Liked List!");
        return [...state];
      }
      case DELETE_PRODUCT_LIKED:
        toast.success("This product deleted from Liked List!");
        return state.filter(item => item.id !== action.payload)
    default:
      return state;
  }
};
