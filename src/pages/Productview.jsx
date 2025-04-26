import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import Rating from '../components/Rating'

const Productview = () =>{
    let params = useParams()
    let pid = params.product_id

    const [product, setProduct ] = useState({})

    useEffect(()=>{

        axios.get(`https://dummyjson.com/products/${pid}`)
        .then(res => setProduct(res.data))
        .catch(err=> console.log('Something went wrong'))

    })

    const [qty, setQty] = useState(1)

    const addtocart=()=>{
   // fetching local storage data if exist 
      let cart = JSON.parse(localStorage.getItem('cart')) || []

      // setting object variables for product data

      let product_cart_data = {
        id:product.id,
        name:product.title,
        price:product.price,
        quantity:qty,
        image:product.images,
        category:product.category
      }

      //set data to the local storage if not exist
      let existingItem = cart.find((item)=>item.id === product.id)
      if(existingItem){
        toast.error("Item already exists in cart")

      }

      else{
        cart.push(product_cart_data)
        localStorage.setItem('cart', JSON.stringify(cart))
        toast.success("Item added to cart")
      }
    }

    const decrease=()=>{
      if(qty>1){
        setQty(qty-1)
      }

      else{ 
        toast.warning("You must order minimum 1 unit.")
      }
    }




    
  return (
    <>
    <ToastContainer theme='colored'position='top-right'/>
      <div className="container my-5 shadow rounded-3 bg-success-subtle p-3 ">
      <div className="d-flex justify-content-evenly">
        <div className="col-md-4">
          {product.images && product.images.length > 1 ? (
            <img src={product.images}  alt="product" width="100%" height="100%"/>
          ):(
          <img src={product.images}  alt="product" width="100%" height=" 100%"/> 
          )}
        </div>

        <div className="col-md-6">
          <p>
            <a href="index.html">Home</a>/
            <a href="productpage.html">Products</a>/
            <small className="text-secondary">{product.title}</small>
          </p>
          <h2>{product.title}</h2>
          <small className="text-secondary">{product.category}</small>

      <p className="fw-bold mt-3">price: <span className="text-success">{product.price}</span></p>
      

          <p className="fw-bold">Quantity</p>
          <div className="d-flex col-5 ">
            <button className="btn btn-secondary" onClick={decrease}>-</button>
            <input type="text" value={qty} className="form-control w-25 text-center" readonly/>
            <button className="btn btn-secondary" onClick={()=>setQty(qty+1)}>+</button>
          </div>
        
           {
            product.rating && <Rating rating={product.rating}/>
           }

          <div className="d-flex mt-5">
            <button className="btn btn-danger me-5">Buy Now</button>
            <button className="btn btn-warning" onClick={addtocart}>Add to Cart</button>
            
          </div>
        </div>
      </div>
      <hr/>
      <p className="fw-bold m-0 ">Description</p>
      <p className="m-0 text-dark">{product.description}</p>
    </div>

  
    </>

  )
}

export default Productview
