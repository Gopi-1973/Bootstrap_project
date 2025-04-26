import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
  return (
    <>
     
      <div className="card border shadow rounded mx-auto my-2" >
        <img src={props.itemData.images[0]} className="card-img-top" alt="p1" />
        <div className="card-body text-center">
          <h5 className="card-title" title={props.itemData.title}>{props.itemData.title.slice(0,15)}...</h5>
          <p className="fw-bold">Price:<span className="text-success">Rs.{props.itemData.price}</span></p>
          <Link to={`/productview/${props.itemData.id}`} className="text danger btn btn-warning btn-sm"><i className="bi bi-eye-fill"></i> View More</Link>
        </div>
      </div>
    


    </>
  )
}

export default Card
