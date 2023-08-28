import React from "react";
// import chef from "../image/chef.png";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Chef from "../image/Chef";

export default function HeaderLayout() {
  return (
    <>
      <nav>
        <Chef />
        {/* <img src={chef} alt="chef" width={50} /> */}
        <ul>
          <li>
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/search">Search Food</NavLink>
            <NavLink to="/categories">Categories</NavLink>
            {/* <NavLink to="/product">Product</NavLink> */}
            <NavLink to="/contact">Contact us</NavLink>
            <NavLink to="/account">Account</NavLink>
          </li>
        </ul>
        <div className="menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
