import React, { useState } from 'react'
import Slider from '../components/Slider'
import Card from '../components/Card'
import axios from 'axios'




const Homepage = () => {
  const [products, setProducts] = useState([])
  axios.get('https://dummyjson.com/products')
    .then(res => setProducts(res.data.products))
    .catch(err => console.log(err))

  return (

    <>

      <Slider />
      <div class="banner-card d-md-flex justify-content-evenly  px-5 py-1">
                <div class="card-1 card text-center ">
                    <div class="card-body ">
                        <h5 class="card-title text-danger ">Delivery</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="card-link text-danger">More Info</a>
                        <i class="bi bi-arrow-right-short text-danger"></i>
                    </div>
                </div>

                <div class="card-1 card text-center">
                    <div class="card-body">
                        <h5 class="card-title text-danger">Delivery</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="card-link text-danger">More Info</a>
                        <i class="bi bi-arrow-right-short text-danger"></i>
                    </div>
                </div>

                <div class=" card-1 card text-center">
                    <div class="card-body ">
                        <h5 class="card-title text-danger ">Delivery</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="card-link text-danger">More Info</a>
                        <i class="bi bi-arrow-right-short text-danger"></i>
                    </div>
                </div>
        </div>
      <div className='container rounded -3'>
        <h2 className='text-center text-success bg-secondary-subtle'>Products</h2>

        <hr />
        <div class="product-container d-md-flex mb-4 flex-wrap" id='products'>
          {
            products.slice(0, 4).map((item) => (
              <Card itemData={item} />

            ))

          }
        </div>
      </div>

    </>

  )

}

export default Homepage












