import Products from "./Products"
import ProductItem from "./Products"
import Searchbar from "./Searchbar"
import data from '../data/Data'
import { FC } from "react"
import { type ProductProps } from'../App' 


type HomeProps = {
  productsData: ProductProps[];
  setProductsData: React.Dispatch<React.SetStateAction<ProductProps[]>>;
  onClick? : () => void;
}

const Home: FC<HomeProps> = ({productsData, setProductsData}) => {
  const filterClothes = (name:string) => {
    setProductsData(
      data.filter((item) => {
        return item.name === name;
      })
    );
  };
  return (
    <div className="flex flex-col items-center">
    <div className="w-[70%] flex justify-between">
      <div className="flex items-center gap-4">
      <button onClick={() => setProductsData(data)} className="relative before:absolute before:bottom-0 before:left-0 before:border-[1px] before:w-full hover:before:border-black before:border-white duration-300">All</button>
      <button onClick={() => filterClothes("T-shirt")} className="relative before:absolute before:bottom-0 before:left-0 before:border-[1px] before:w-full hover:before:border-black before:border-white duration-300">T-shirt</button>
      <button onClick={() => filterClothes("Hoodie")} className="relative before:absolute before:bottom-0 before:left-0 before:border-[1px] before:w-full hover:before:border-black before:border-white duration-300">Hoodie</button>
      <button onClick={() => filterClothes("Jeans")} className="relative before:absolute before:bottom-0 before:left-0 before:border-[1px] before:w-full hover:before:border-black before:border-white duration-300">Jeans</button>
      </div>
      <Searchbar setProductsData={setProductsData}/>
    </div>
    <div className="w-[75%] grid grid-cols-4 mt-8">
      <Products productsData={productsData}/>
    </div>
  </div>
  )
}

export default Home
