import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const id = useParams();
  const finalId = id.id;
  console.log("Product-id:", id);
  console.log("Final-ID:", finalId);

  return <div>ProductDetails</div>;
};

export default ProductDetails;
