import { FC, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data/Data";
import Select from "react-select";
import { addToCart } from "./store/features/productSlice";
import { useAppDispatch } from "./store/store";

const ProductDetails: FC = () => {
  const [size, setSize] = useState<string>("");

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
        sizes: size,
        price: product?.price,
        img: product?.img,
        brand: product?.brand,
        name: product?.name,
        category: product?.name,
        cartQuantity: 0,
      })
    );
  };
  return (
    <div className="h-[90vh] w-full flex items-center justify-center">
      <div className="flex flex-col md:flex-row gap-4 py-4 relative">
        <div className="h-auto flex justify-center">
          <img
            className="lg:w-[500px] w-[250px] sm:w-[300px] md:w-[400px] object-cover mt-8"
            src={product?.img}
            alt={`product/${id}`}
          />
        </div>
        <div className="text-2xl relative">
          <h2 className="">{product?.brand}</h2>
          <h3 className="text-xl">{product?.name}</h3>
          <p className="font-semibold mt-4">{`${product?.price}$`}</p>
          <Select
            options={options}
            onChange={(SelectedOption: any) => setSize(SelectedOption.value)}
            styles={colorStyles}
            className="mt-4 md:mt-32"
          />
          <button onClick={handleDispatch} className="w-[300px] md:w-[200px] mt-2 text-lg bg-accent py-2 px-4 hover:bg-orange-400 duration-300 rounded-lg">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
