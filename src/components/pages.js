import React from 'react'
import {Routes, Route } from 'react-router-dom'
import {Home} from './home/index'
import {ProductsList} from './products/index'
import {ProductDetails} from './products/ProductDetails'

export const Pages = () => {
  return (
    <section>
        <Routes>
            <Route path="/" exact Component={Home}></Route>
            <Route path="/products" exact Component={ProductsList}></Route>
            <Route path="/products/:id" exact Component={ProductDetails}></Route>
        </Routes>
    </section>
  )
}
