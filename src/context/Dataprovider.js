import React, {useState, useEffect, createContext} from "react";
import Data from '../Data.js'


export const DataContext = createContext();

export const DataProvider = (props)=>{
    const[products, setProducts] = useState([])
    const[menu, setMenu] = useState(false)
    const[cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    //crea la lista con todos los productos existentes
    useEffect(()=>{
        const product = Data.items
        if(product){
            setProducts(product)
        }else{
            setProducts([])
        }
        
    },[])

    //mete cosas al carrito
    const addCart = (id) =>{
        const check = cart.every(item =>{
            return item.id !== id;
        })
        if(check){
            const data = products.filter(product =>{
                if(product.id === id){
                    alert("the item "+product.title+" $"+product.price+" has been added to cart")
                }
                return product.id === id
            })
            setCart([...cart, ...data])
        }else{
            alert("the item has already been added to cart")
        }
    }

        //la primera vez que se renderiza recupera el carrito vacio o no
    useEffect(()=>{
        const dataCart = JSON.parse(localStorage.getItem("dataCart"))
        if(dataCart){
            setCart(dataCart)
        }
    },[])

    //genera un almacenamiento local llamado datacart con la informacion del carrito en un formato json
    useEffect(()=>{
        localStorage.setItem("dataCart", JSON.stringify(cart))

    },[cart])

    //cuando cambia el carrito verifica los precios y cambia el total del precio
    useEffect(()=>{
        const getTotal = ()=>{
            const res = cart.reduce((prev,item) =>{
                return prev + (item.price * item.cantidad)
            },0)
            setTotal(res)
    }
    getTotal()
    },[cart])

    //genera el array de valores necesarios para ser utilizados globalmente
    const value = {
        products : [products],
        menu : [menu,setMenu],
        addCart: addCart,
        cart: [cart,setCart],
        total: [total,setTotal]

    }

    return(
        <DataContext.Provider value = {value}>
            {props.children}
        </DataContext.Provider>
    )
}