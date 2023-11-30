import React, { useContext } from 'react'
import { FiXCircle, FiTrash2 } from "react-icons/fi";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { DataContext } from '../../context/Dataprovider'

export const Cart = () => {
  const value = useContext(DataContext)
  const [menu, setMenu] = value.menu
  const [cart, setCart] = value.cart
  const [total] = value.total

  const togglefalse = () => {
    setMenu(false)
  }

  const removeProduct = id =>{
    if(window.confirm("Do you want to remove this item from the cart?")){
      cart.forEach((item,index)=>{
        if(item.id === id){
          item.cantidad = 1;
          cart.splice(index,1)
        }
      })
      setCart([...cart])
    } 
  }

  const decreaseQuantity = id =>{
    cart.forEach(item =>{
      if(item.id === id){
        item.cantidad === 1 ? item.cantidad = 1 : item.cantidad -= 1;
      }
      setCart([...cart])
    })
  }

  const increaseQuantity = id =>{
    cart.forEach(item =>{
      if(item.id === id){
        item.cantidad += 1;
      }
      setCart([...cart])
    })
  }


  const show1 = menu ? "carts show" : "carts";
  const show2 = menu ? "cart show" : "cart";

  return (
    <div className={show1}>
      <div className={show2}>
        <div className='cart__close' onClick={togglefalse}>
          <FiXCircle className='FiXCircle'></FiXCircle>
        </div>
        <h2>Your cart</h2>
        
        <div className='cart__center'>
          {

            cart.length === 0 ? <h2 style={{
              textAlign: "center", fontSize: "3rem"
            }}>
              Empty Cart
            </h2> : <> 
            {


            cart.map((product)=>(
            <div className='cart__item' key={product.id}>
            <img src={product.image} alt=''></img>
            <div>
              <h3>{product.title}</h3>
              <p className='price'>${product.price}</p>
            </div>
            <div>
              <AiFillCaretUp className='AiArrow' onClick={() => increaseQuantity(product.id)}></AiFillCaretUp>
              <p className='quantity'>{product.cantidad}</p>
              <AiFillCaretDown className='AiArrow' onClick={()=> decreaseQuantity(product.id)}></AiFillCaretDown>
            </div>
            <div className='remove__item' onClick={() =>removeProduct(product.id)}>
              <FiTrash2 className='FiTrash'></FiTrash2>
            </div>
          </div>))
          }
          </>
          }
          
        </div>

        <div className='cart__footer'>
          <h3>Total: ${total}</h3>
          <button className='btn'>Payment</button>
        </div>
      </div>
    </div>
  )
}
