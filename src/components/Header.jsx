import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()
  return (
    <div>
       <header className="bg-secondary ">
    <nav className="navbar navbar-expand-md p-3">
      <div className="container">
        <img src="./images/logo.png" alt="logo" width={50}/>
        <a className="navbar-brand ms-3 fw-bold"  href="#"> Online<span className='text-danger'>-Shop</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
          aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <i className="bi bi-list"></i>
        </button>
        <div className="collapse navbar-collapse " id="navbarScroll">
          <ul className="navbar-nav  m-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item ">
              <Link className={`nav-link ${location.pathname === '/'?'active': ''}`} aria-current="page" to={"/"}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/products'?'active': ''}`} to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/cart'?'active': ''}`} to="/cart">Cart</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/about'?'active': ''}`} to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/contact'?'active': ''}`} to="/contact">Contact</Link>
            </li>

          </ul>
          <div className="d-flex">
            <a href="/signup" className="btn btn-dark rounded-pill me-2">Register</a>
            <a href="/login" className="btn btn-dark rounded-pill">Login</a>
          </div>
        </div>
      </div>
    </nav>
  </header>
    </div>
  )
}

export default Header
