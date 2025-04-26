import React, { useActionState } from 'react'
import Card from '../components/Card'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Productpage = () => {
  const [products, setProducts] = useState([])
  const [limit, setLimit] = useState(20)

  axios.get('https://dummyjson.com/products')
    .then(res => setProducts(res.data.products))
    .catch(err => console.log(err))

  const increase = () => {
    setLimit(limit + 10)
  }

  return (
    <>
      <div className="d-md-flex justify-content-center align-item-center flex-wrap mb-4 mt-5" id='products'>
        {
          products.slice(0,limit).map((item) => (
            <Card itemData
              ={item} />
          ))
        }

      </div>

      <div className='col-2 m-auto my-3'>
        {
          products.length > limit && <button className='btn btn-primary me-2' type='button' onClick={()=>setLimit(limit+8)}>Show More</button>
        }


        {
          products.length <= limit && <button className='btn btn-info' type='button' onClick={()=>setLimit(20)}>Show Less</button>
        }

      </div>

    </>


  )
}

export default Productpage










