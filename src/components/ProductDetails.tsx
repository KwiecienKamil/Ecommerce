import React, { FC } from "react";
import { useParams } from "react-router-dom";
import data from "../data/Data";
import Select from "react-select";
import BlackButton from "./BlackButton";
import { addToCart } from "./store/features/productSlice";
import { useAppDispatch, useAppSelector } from "./store/store";

const ProductDetails: FC = () => {

  const dispatch = useAppDispatch();
  const { id } = useParams();
  const product = data.find((product) => product.id === id);
  const options = [
    { value: "S", label: "S" },
    { value: "M", label: "M" },
    { value: "L", label: "L" },
    { value: "XL", label: "XL" },
  ];
  const colorStyles = {
    control: (baseStyles: any) => ({
      ...baseStyles,
      borderColor: "gray",
    }),
  };

  const handleDispatch = () => {
    dispatch(
      addToCart({
        id: product?.id,
        sizes: product?.sizes,
        price: product?.price,
        name: product?.name,
        img: product?.img,
        brand: product?.brand,
        category: product?.category
      })
    )
    
    
  }
  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex gap-4 py-4 relative">
        <div className="h-auto">
          <img
            className="w-[500px] object-cover "
            src={product?.img}
            alt={`product/${id}`}
          />
        </div>
        <div className="text-2xl relative">
          <h2 className="">{product?.brand}</h2>
          <h3 className="text-xl">{product?.name}</h3>
          <p className="font-semibold mt-4">{`${product?.price}$`}</p>
          <Select options={options} styles={colorStyles} className="mt-32" />
          <BlackButton
            onClick={handleDispatch}
            classname="w-[200px] mt-2 text-lg"
          >
            Add To Cart
          </BlackButton>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
