import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Chef from "../image/Chef";
import { motion } from "framer-motion";


const navVariants = {
  initial: {
    x: 100
  },
  animate: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50
    }
  }
}

export default function HeaderLayout() {
  return (
    <>
      <nav>
        <Chef />
        {/* <img src={chef} alt="chef" width={50} /> */}
        <ul>
          <motion.li variants={navVariants} initial="initial" animate="animate">
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/search">Search Food</NavLink>
            <NavLink to="/categories">Categories</NavLink>
            {/* <NavLink to="/product">Product</NavLink> */}
            <NavLink to="/contact">Contact us</NavLink>
            <NavLink to="/account">Account</NavLink>
          </motion.li>
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
