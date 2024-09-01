import { GET_ALL_PRODUCTS, SEARCH } from "../types";

const initialState = [];

export const getProducts = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return [...action.payload];
    case SEARCH:

        const filteredData = state.filter((item) => item.title.toLowerCase().includes(action.payload))
        return filteredData;
      
    default:
      return state;
  }
};
