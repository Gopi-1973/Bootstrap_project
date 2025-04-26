import React from 'react'

const Slider = () => {
    return (
        <div>
            <div id="carouselExampleAutoplaying" class="carousel slide position-relative my-5 p-0" data-bs-ride="carousel">
                <div class="carousel-inner p-0">
                    <div class="carousel-item active">
                        <img src="./images/ban1.jpg" class="d-block w-100 " alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="./images/ban2.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="./images/ban3.jpg" class="d-block w-100" alt="..." />
                    </div>
                </div>

                <div className='banner-text  col-md-3'>
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, debitis?
                    </p>
                </div>

                <div className='btn-prev'>
                    <button className="carousel-control-prev prev" type="button" data-bs-target="#carouselExampleAutoplaying " data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                </div>
                <div className='btn-next'>
                    <button class="carousel-control-next next " type="button" data-bs-target="#carouselExampleAutoplaying " data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>


        </div>











    )
}

export default Slider
