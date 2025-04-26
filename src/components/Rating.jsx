import {  IoIosStar,IoIosStarHalf,IoIosStarOutline } from "react-icons/io";
import React from 'react'

const Rating = (props) => {

    const rating = props.rating
    let stars = []
    for(let i=1;i<=5;i++)
        if (i<=rating){
            stars.push(<IoIosStar key={i} />)
        }

        else if(Math.floor(rating) && !Number.isInteger(rating)){
            stars.push(<IoIosStarHalf key={i} /> )
        }
        else{
            stars.push(<IoIosStarOutline key={i} />)
        }

  return (
    <>

    <p>Ratings : <span className="text-warning">{stars}</span></p>
      
    </>
  )
}

export default Rating
