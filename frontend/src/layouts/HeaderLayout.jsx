import React from "react";
import chef from "../image/chef.png";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function HeaderLayout() {
  return (
    <>
      <nav>
        <img src={chef} alt="chef" width={50} />
        <ul>
          <li>
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/search">Search Food</NavLink>
            <NavLink to="/categories">Categories</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact us</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
