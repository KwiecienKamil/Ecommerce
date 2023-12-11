import {FC} from 'react'
import data from '../data/Data'
import ProductItem from './ProductItem'

const Products = () => {
  return(
    data.map((item) => {
     return <ProductItem sizes={item.sizes} img={item.img} brand={item.brand} name={item.name}/>
    })
  )
}

export default Products
