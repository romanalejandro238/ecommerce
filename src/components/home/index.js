import React from 'react'
import FrontPage from '../../images/inicio.jpg'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div className='home'>
            <Link to="/">
                <h1>HOME</h1>
            </Link>
            <Link to="/products">
                <h1>PRODUCTS</h1>
            </Link>
            <img src={FrontPage} alt='home'></img>
        </div>
    )
}
