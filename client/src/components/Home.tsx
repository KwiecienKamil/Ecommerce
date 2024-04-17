import Products from "./Products";
import Searchbar from "./Searchbar";
import data from "../data/Data";
import { FC } from "react";
import { type ProductProps } from "../App";
import BlackButton from "./BlackButton";

type HomeProps = {
  productsData: ProductProps[];
  setProductsData: React.Dispatch<React.SetStateAction<ProductProps[]>>;
  onClick?: () => void;
};

const Home: FC<HomeProps> = ({ productsData, setProductsData }) => {
  const filterClothes = (name: string) => {
    setProductsData(
      data.filter((item) => {
        return item.name === name;
      })
    );
  };
  const filterType = (category: string) => {
    setProductsData(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };



  const buttonTailwindStyle = "relative before:absolute before:bottom-0 before:left-0 before:border-[1px] before:w-full hover:before:border-black before:border-white duration-300"
  return (
    <div className="flex flex-col items-center">
      <div className="w-[80%] sm:w-[70%] lg:flex-row flex-col gap-4 flex justify-between items-center">
        <div className="flex  items-center gap-2 sm:gap-4 text-[10px] sm:text-[12px] md:text-[16px]">
          <div className="flex gap-2">
            <BlackButton onClick={() => setProductsData(data)}>All</BlackButton>
            <BlackButton onClick={() => filterType("Men")}>Men</BlackButton>
            <BlackButton onClick={() => filterType("Woman")}>Woman</BlackButton>
            <BlackButton onClick={() => filterType("Kids")}>Kids</BlackButton>
          </div>
          <button
            onClick={() => filterClothes("T-shirt")}
            className={buttonTailwindStyle}
          >
            T-shirt
          </button>
          <button
            onClick={() => filterClothes("Hoodie")}
            className="relative before:absolute before:bottom-0 before:left-0 before:border-[1px] before:w-full hover:before:border-black before:border-white duration-300"
          >
            Hoodie
          </button>
          <button
            onClick={() => filterClothes("Jeans")}
            className="relative before:absolute before:bottom-0 before:left-0 before:border-[1px] before:w-full hover:before:border-black before:border-white duration-300"
          >
            Jeans
          </button>
        </div>
        <Searchbar setProductsData={setProductsData} />
      </div>
      <div className="w-[75%] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-8">
        <Products productsData={productsData} />
      </div>
    </div>
  );
};

export default Home;
