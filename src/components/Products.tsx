import {FC} from 'react'
import ProductItem from './ProductItem'
import {type ProductItemProps} from '../components/ProductItem'

type ProductsProps = {
  productsData: Array<object>
  ProductItem: FC
  item: JSX.Element
}
const Products:FC<ProductsProps> = ({productsData}) => {
  return(
    productsData.map((item):ProductsProps => {
      return <ProductItem id={item.id} sizes={item.sizes} img={item.img} brand={item.brand} name={item.name}/>
    })
  )
}

export default Products
