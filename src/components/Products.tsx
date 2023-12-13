import {ComponentType, FC} from 'react'
import ProductItem from './ProductItem'
import { type ProductItemProps } from './ProductItem'
import { type ProductProps } from '../App'
import data from '../data/Data'

export type ProductsProps = {
  productsData: ProductProps[];
}
const Products = ({productsData}:ProductsProps) => {

  return(
    productsData.map((item) => {
      return <ProductItem id={item.id} sizes={item.sizes} img={item.img} brand={item.brand} name={item.name} category={item.category}/>
    })
  )
}

export default Products
