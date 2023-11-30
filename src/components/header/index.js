import React ,{ useContext} from 'react'
import Nike from '../../images/Nike.jpg'
import { BsCart3 } from "react-icons/bs";
import { Link } from 'react-router-dom';
import {DataContext} from '../../context/Dataprovider'

export const Header = () => {

    const value = useContext(DataContext)
    const [menu,setMenu] = value.menu
    const [cart] = value.cart
    

    const toggleMenu = () =>{
        setMenu(!menu)
    }
    
  return (
    <header>
        <Link to='/'>
            <div className='logo'>
                <img src= {Nike} alt='logo' width="150"></img>
            </div>
        </Link>
        <ul>
            <li>
                <Link to="/">HOME</Link>
            </li>
            <li>
                <Link to="/products">PRODUCTS</Link>
            </li>
        </ul>
        <div className='hcart' onClick={toggleMenu}>
            <BsCart3 className='bscart3'></BsCart3>
            <span className='item__total'>{cart.length}</span>
        </div>
    </header>
  )
}
