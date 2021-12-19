import React from "react";
import { useFetch } from "./2-useFetch";

const url = "https://course-api.com/javascript-store-products";

const FetchExample = () => {
  const { loading, products } = useFetch(url);
  console.log(products);
  return <h2>{loading ? "loading..." : "Data"}</h2>;
};

export default FetchExample;
