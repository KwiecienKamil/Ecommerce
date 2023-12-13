import { FC } from "react"
import logo from '../assets/logo.png'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import BlackButton from "./BlackButton"
import data from "../data/Data"
import { ProductProps } from "../App"

type Props = {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>,
  setProductsData: React.Dispatch<React.SetStateAction<ProductProps[]>>
}

const Navbar: FC<Props> = ({setOpenModal,setProductsData}) => {
  const filterType = (category:string) => {
    setProductsData(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };
  return (
    <div className="h-20 w-full flex justify-center">
      <div className="h-full w-[70%] flex items-center justify-between">
        <div className="flex gap-2">
        <BlackButton onClick={() => filterType("Men")}>Men</BlackButton>
        <BlackButton onClick={() => filterType("Woman")}>Woman</BlackButton>
        <BlackButton onClick={() => filterType("Kids")}>Kids</BlackButton>
        </div>
        <div className="h-full flex pr-16 font-logo">
        <a href="/" className="relative h-full flex items-center justify-start">
            <h1 className="z-[5] text-[25px]">Ecommerce</h1>
            </a>
        </div>
        <div className="flex text-[25px] gap-4 relative">
        <button><AiOutlineUser /></button>
        <button onClick={() => setOpenModal(true)}><AiOutlineShoppingCart /></button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
