
import React from 'react'
import { FaLock, FaUser } from 'react-icons/fa'


const Loginpage = () => {
  return (
    <>
      <div className="container-login bg-warning-subtle">
        <div className="login-container">
          <div className=" text-center form">
            <h2>Login Form</h2>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <br />
            <button>Login</button><a href="#">Forgot Password?</a>
            <p className='mt-3'>Not a member? <a className="mx-5" href="#">Sign Up Now</a></p>
          </div>

        </div>
        <div>
          <img src="/images/login.png" alt=""width="450" height="400" class="img-container "/>
        </div>
      </div>



    </>
  )
}

export default Loginpage