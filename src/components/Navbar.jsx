import React from "react";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container-lg container-fluid">
        <div className="navbar-brand d-flex align-items-center gap-1">
          <img width="40px" src={Logo} alt="" />
          <h3 className="my-auto">BookStore</h3>
        </div>

        <div className="links d-flex gap-4 ">
          <Link className="link fw-bold" to="/">
            Home
          </Link>
          <Link className="link fw-bold" to="/">
            Magazines
          </Link>
          <Link className="link fw-bold" to="/">
            Books
          </Link>
          <Link className="link fw-bold" to="/">
            Textbooks
          </Link>
          <Link className="link fw-bold" to="/">
            Product
          </Link>
        </div>

        <div className="end d-flex gap-3">
          <span className="heart">
            <i class="fa-regular fa-heart"></i>
          </span>
          <span className="cart">
            <i class="fa-solid fa-cart-shopping"></i>
          </span>
          <span className="user">
            <i class="fa-regular fa-user"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
