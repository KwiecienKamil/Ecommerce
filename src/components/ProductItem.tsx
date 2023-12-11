import {FC} from 'react'
import data from '../data/Data'

const ProductItem: FC = () => {
  return(
    data.map((item) => {
      return <div 
      className="relative flex flex-col items-center justify-center py-6 mx-6 cursor-pointer group ">
        <div className="absolute h-[60px] w-[250px] bg-black/50 bottom-[70px] translate-y-[60%] group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center px-4">
        <p className="text-white">{item.sizes}</p>
        </div>
        <img src={item.img} alt="item" className="w-[250px]" />
        <h1 className="font-semibold">{item.brand}</h1>
        <h2>{item.name}</h2>
      </div>
    })
  )
}

export default ProductItem
