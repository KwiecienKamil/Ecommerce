import { FC } from "react"
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { ProductProps } from "../App"
import { useAppSelector } from "./store/store"

type Props = {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>,
  setProductsData: React.Dispatch<React.SetStateAction<ProductProps[]>>
}

const Navbar: FC<Props> = ({setOpenModal}) => {
  const selector = useAppSelector((state) =>state.product.products)
  return (
    <div className="h-20 w-full flex justify-center">
      <div className="h-full w-[70%] flex items-center justify-between">
        <div className="h-full flex pr-16 font-logo">
        <a href="/" className="relative h-full flex items-center justify-start">
            <h1 className="z-[5] text-[25px] text-accent hover:text-orange-400 duration-300">Ecommerce</h1>
            </a>
        </div>
        <div className="flex text-[26px] gap-4 relative text-accent">
        <button className="hover:text-orange-400 duration-300"><AiOutlineUser /></button>
        <button className="hover:text-orange-400 duration-300" onClick={() => setOpenModal(true)}><AiOutlineShoppingCart /><span className="absolute -bottom-3 -right-3 text-[10px] text-black bg-accent py-1 px-2 rounded-full opacity-50">{selector.length}</span></button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
