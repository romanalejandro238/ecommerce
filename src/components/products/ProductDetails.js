import React, {useContext, useState, useEffect} from 'react'
import {DataContext} from '../../context/Dataprovider'
import { useParams } from 'react-router-dom'
import { ProductItem } from './productItem'

export const ProductDetails = () => {
  const value = useContext(DataContext)
  const [products] = value.products
  const [detail,setDetail] = useState([])
  const addCart = value.addCart
  const [url, setUrl] = useState(0)
  const [images, setImages] = useState('')
  const params = useParams()
  let item = 0;

  useEffect(()=>{
    products.forEach(product =>{
      item = 0;
      if(product.id === parseInt(params.id)){
        setDetail(product)
        setUrl(0)
      }
    })
  }, [params.id, products]) 

  const handleInput = e =>{
    const number = e.target.value.toString().padStart(2,'01')
    setUrl(number)
  }

  useEffect(()=>{
    const values = `${detail.img1}${url}${detail.img2}`
    setImages(values)
    console.log(values)
  },[url, params.id])

  return (
    <>
    {
      <div className='details'>
        <h2>{detail.title}</h2>
        <p className='price'>${detail.price}</p>
        <div className='grid'>
        <p className='new'>New</p>
        <div className='size'>
            <select placeholder='Tamaño'>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
             </select>
             <p>Size</p>
        </div>
        </div>

        <button onClick={()=>addCart(detail.id)}>Add to Cart</button>
        {
          url ? <img src={images} alt={detail.title}></img> : <img src={detail.image} alt={detail.title}></img>
        }
        
        <input type="range" min="1" max="36" value={url} onChange={handleInput}></input>
        <div className='description'>
          <p><b>description:</b> 
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum necessitatibus soluta alias porro, saepe facere expedita asperiores quos fugit inventore ex, 
          itaque sapiente quae pariatur beatae optio repellat aperiam quia possimus mollitia repellendus? Illo natus quam eaque impedit omnis pariatur!
          </p> <br></br>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum necessitatibus soluta alias porro, saepe facere expedita asperiores quos fugit inventore ex, 
          itaque sapiente quae pariatur beatae optio repellat aperiam quia possimus mollitia repellendus? Illo natus quam eaque impedit omnis pariatur!
        </div>

        <div >
          <h2 className='related'>Related products</h2>
          <div className='products'>
          {
            products.map((product) =>{
              if((detail.category === product.category) && (item < 3) && (detail.id !== product.id)){
                item++;
                return  <ProductItem id={product.id} title={product.title} price={product.price} image={product.image} category={product.category} padding='10rem'/>
              }
              return <></>
            })
          }
          </div>
          

        </div>

      </div>

    }
    </>
  )
}
