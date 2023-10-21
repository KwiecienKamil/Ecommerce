import {FC} from 'react'
import data from '../data/Data'
import Button from './Button'
import {FaShoppingBasket} from 'react-icons/fa'

const ProductItem: FC = () => {
  return(
    data.map((item) => {
      return <div className="flex flex-col items-center justify-center py-6 mx-6">
        <img src={item.img} alt="item" className='w-[250px]'/>
        <h1 className='font-semibold'>{item.brand}</h1>
        <h2>{item.name}</h2>
        <div className="w-[250px] flex items-center justify-between text-[18px]">
        <p className='pt-2 font-bold'>{`${item.price}€`}</p>
        <Button><FaShoppingBasket /></Button>
        </div>
      </div>
    })
  )
}

export default ProductItem
