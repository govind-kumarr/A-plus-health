import React from "react";
import { useParams } from "react-router-dom";
import data from "../../data/mockdb";

const SingleProduct = () => {
  const { id } = useParams();
  const [product] = data.filter((product) => product.id === id);
  console.log(product);
  return <div>SingleProduct</div>;
};

export default SingleProduct;
