import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import { DataContext } from '../../context/Dataprovider'


export const ProductItem = ({id, title, price, image, category , padding}) => {


  const value = useContext(DataContext)
  const addCart = value.addCart;

  return (
    <div className='product'>
    <Link to={`/products/${id}`}>
      <div className='product_img' style={{paddingTop:padding}}>
        <img src={image} alt={title}></img>
      </div>
    </Link>

    <div className='product__footer'>
      <h1>{title}</h1>
      <p>{category}</p>
      <p className='price'>${price}</p>
    </div>

    <div className='button'>
      <button className='btn' onClick={() => addCart(id)}>Add to the cart</button>
    </div>
    <div className='view'>
        <Link to={`/products/${id}`} >Vista</Link>
    </div>
  </div>
  )
}
