import React, { Fragment, useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

const Cartpage = () => {
    const [cartItem, setCartItem] = useState([])

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart'))
        setCartItem(cart)
    }, [])

    const deleteItem = (cart_id) => {
        const cart = JSON.parse(localStorage.getItem('cart'));
        const newCart = cart.filter((item) => item.id !== cart_id);
        localStorage.setItem('cart', JSON.stringify(newCart));
        setCartItem(newCart);
        toast.success("Item deleted Succesfully");
    }

    return (

        <>
            <ToastContainer position='top-center' theme='colored' />
            {
                cartItem.length <= 0 ? (
                    <div className='d-md-flex my-5 justify-content-center align-items-center'>
                        <h1 className='text-center text-info'>Your Cart is Empty</h1>
                        <img src="https://cdni.iconscout.com/illustration/premium/thumb/woman-with-shopping-trolley-on-sale-illustration-download-in-svg-png-gif-file-formats--going-to-using-discount-happy-loyalty-program-people-1-pack-illustrations-4165131.png?f=webp" alt="" width={'300px'} />

                    </div>

                ) : (

                    <div className="d-flex justify-content-evenly my-5">
                        <div className="col-md-8" >
                            <table className="table table-bordered table-striped table-hover shadow rounded-3">
                                <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Category</th>
                                        <th>Image</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cartItem.map((item, i) => (
                                
                                            <Fragment key={i}>
                                            
                                                <tr>
                                                    <td>{i + 1}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.price}</td>
                                                    <td>{item.quantity}</td>
                                                    <td>{item.category}</td>
                                                    <td className="text-center">
                                                        {item.image && item.image.length > 1 ? (

                                                            <img src={item.image[0]} alt="item.title" width="60px" />
                                                        ) : (
                                                            <img src={item.image} alt="item.title" width="60px" />
                                                        )}
                                                    </td>
                                                    <td>
                                                        <button className='btn btn-danger' onClick={() => deleteItem(item.id)}>
                                                            <i className='bi bi-trash'></i>
                                                        </button>
                                                    </td>

                                                </tr>
                                            </Fragment>
                                        )
                                        )}
                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-3">
                            <section className='col-md-12 shadow p-3'>
                                <h4>Cart Summary</h4>
                                <hr />
                                <p className='fw-semibold text-secondary'>Total Quantity : <span className='text-success'>
                                    {
                                        cartItem.reduce((acc, item) => (
                                            acc + item.quantity
                                        ),0)
                                    }   units

                                </span></p>
                                <p className='fw-semibold text-secondary'>Total Price : <span className='text-success'>
                                    Rs. {
                                        cartItem.reduceRight((acc,item)=>(
                                            acc+item.price*item.quantity
                                        ),0).toFixed(2)
                                    }
                                    </span></p>

                                <p className='fw-bold text-secondary'>Discount : <span className='text-success'>Rs.500 Flat</span></p>

                                <p className='fw-bold text-secondary'>Grand Total : <span className='text-success'>
                                   Rs. {
                                        cartItem.reduceRight((acc,item)=>(
                                            (acc+item.price*item.quantity)-500
                                        ),0).toFixed(2)
                                    }
                                    </span></p>

                                <hr />
                                <button className='btn btn-success'>Checkout</button>
                            </section>
                        </div>
                    </div>

            )
            }

        </>
    )
}

export default Cartpage







