import { FC } from "react";
import ProductItem from "./ProductItem";
import { type ProductProps } from "../App";

export type ProductsProps = {
  productsData: ProductProps[];
};
const Products: FC<ProductsProps> = ({ productsData }) => {
  return productsData.map((item) => {
    return (
      <ProductItem
        key={Math.floor(Math.random() * 9999)}
        id={item.id}
        price={item.price}
        sizes={item.sizes}
        img={item.img}
        brand={item.brand}
        name={item.name}
        category={item.category}
      />
    );
  });
};

export default Products;
