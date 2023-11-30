import React, {useContext} from 'react'
import { ProductItem } from './productItem'
import {DataContext} from '../../context/Dataprovider'

export const ProductsList = () => {

  const value = useContext(DataContext)
  const [products] = value.products

  console.log(products)
  return (
    <>
    <h1 className='title'>PRODUCTS</h1> 
      <div className='products'>
        {
          products.map((product) =>(
            <ProductItem 
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            category={product.category}
            />
          ))}
      </div>
    
    </>
  )
}
