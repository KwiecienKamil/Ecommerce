import React, { FC } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../data/Data";
import BlackButton from "./BlackButton";

const ProductDetails: FC = () => {
  const { id } = useParams();
  const product = data.find((product) => product.id === id);
  return (
    <div className="w-full flex items-center justify-center relative">
      <div className="flex gap-4 py-4 relative">
        <div className="absolute top-[10px] -left-[130px]">
        <Link to="/">Back to Products</Link>
        </div>
        <div className="h-auto">
          <img
          className="w-[500px] object-cover"
          src={product?.img} alt={`product/${id}`} />
        </div>
        <div className="">
        <h2 className="text-2xl">{product?.brand}</h2>
        <h3 className="text-xl">{product?.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
