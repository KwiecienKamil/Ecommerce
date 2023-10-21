import { FC } from "react"
import Button from "./Button"
import logo from '../assets/logo.png'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineShoppingCart} from 'react-icons/ai'


const Navbar: FC = () => {

  return (
    <div className="h-20 w-full flex justify-center">
      <div className="h-full w-[70%] flex items-center justify-between">
        <div className="flex gap-2">
        <Button>Men</Button>
        <Button>Woman</Button>
        <Button>Kids</Button>
        </div>
        <div className="h-full flex pr-16 font-logo">
        <a href="/" className="relative h-full flex items-center justify-start">
            <img src={logo} alt="logo" className="h-2/4 z-[1] relative"/>
            <h1 className="z-[5] text-[25px]">Ecommerce</h1>
            </a>
        </div>
        <div className="flex text-[25px] gap-4 relative">
        <button><AiOutlineUser /></button>
        <button><AiOutlineShoppingCart /></button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
