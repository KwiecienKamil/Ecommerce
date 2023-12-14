import React, { FC } from 'react'
import { useParams } from 'react-router-dom';
import data from '../data/Data';


const ProductDetails:FC = () => {
   const {id} = useParams();
   const product = data.find((product) => product.id === id);
    return (
      <div>
        <img src={product?.img} alt="product" />
        <h1>{product?.name}</h1>
      </div>
    );
}

export default ProductDetails
