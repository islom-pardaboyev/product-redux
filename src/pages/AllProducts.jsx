import React, { useContext, useEffect, useState } from "react";
import ProductCart from "../components/ProductCart";
import { useAxios } from "../hooks/useAxios";
import { useDispatch, useSelector } from "react-redux";
import { GET_ALL_PRODUCTS } from "../redux/types";
import { BounceLoader } from "react-spinners";
import { MainContext } from "../context/context";
function AllProducts() {
  const [loading, setLoading] = useState(true);
  const getProducts = useSelector((state) => state.getProducts);
  const { refresh, setRefresh } = useContext(MainContext);
  console.log(refresh);
  

  const dispatch = useDispatch();

  useEffect(() => {
    useAxios()
      .get("products")
      .then((res) => {
        res.data.products.map((item) => {
          item.isSaved = null;
          item.isLiked = null;
          item.isOrdered = null;
        });
        dispatch({ type: GET_ALL_PRODUCTS, payload: res.data.products });

        setLoading(false);
      });
  }, [refresh]);

  return (
    <>
      <section className="mt-10">
        <div className="container">
          <div className="flex justify-between flex-wrap gap-5">
            {loading ? (
              <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
                <BounceLoader color="#35D7B6" size={120} />
              </div>
            ) : (
              getProducts.map((item, index) => (
                <ProductCart key={index + 1} item={item} />
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default AllProducts;
