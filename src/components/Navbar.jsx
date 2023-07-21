import React from 'react'
import Logo from "../img/logo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="start">
          <div className="logo">
            <img src={Logo} alt="" />
            <h3>BookStore</h3>
          </div>
        </div>
        <div className="center">
          <div className="links">
            <Link className='link' to='/'><h6>Home</h6></Link>
            <Link className='link' to='/'><h6>Magazines</h6></Link>
            <Link className='link' to='/'><h6>Books</h6></Link>
            <Link className='link' to='/'><h6>Textbooks</h6></Link>
            <Link className='link' to='/'><h6>Product</h6></Link>
          </div>
        </div>
        <div className="end">
          <span className="heart"><i class="fa-regular fa-heart"></i></span>
          <span className="cart"><i class="fa-solid fa-cart-shopping"></i></span>
          <span className="user"><i class="fa-regular fa-user"></i></span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
