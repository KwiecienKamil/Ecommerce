import React, { FC } from 'react'

export type ProductItemProps = {
  id: string,
 sizes: string,
 img:string,
 brand:string,
 name:string
}

const ProductItem = ({sizes,img,brand,name}:ProductItemProps) => {
  return (
    <div 
      className="relative flex flex-col items-center justify-center py-6 mx-6 cursor-pointer group ">
        <div className="absolute h-[60px] w-[250px] bg-black/50 bottom-[70px] translate-y-[60%] group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center px-4">
        <p className="text-white">{sizes}</p>
        </div>
        <img src={img} alt="item" className="w-[250px]" />
        <h1 className="font-semibold">{brand}</h1>
        <h2>{name}</h2>
      </div>
  )
}

export default ProductItem
