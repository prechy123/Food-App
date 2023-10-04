import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Chef from "../image/Chef";
import { motion } from "framer-motion";

const navVariants = {
  initial: {
    x: 100,
  },
  animate: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
    },
  },
};
const menuVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};
const linkVariants = {
  initial: {
    y: "-50vh",
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function HeaderLayout() {
  const [menu, setMenu] = useState(false);
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
        <div className="menu" onClick={() => setMenu(!menu)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      {menu && (
        <ul id="dropmenu">
          <motion.li
            variants={menuVariants}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={linkVariants} onClick={() => setMenu(false)}>
              <NavLink to="/">HOME</NavLink>
            </motion.div>
            <motion.div variants={linkVariants} onClick={() => setMenu(false)}>
              <NavLink to="/search">Search Food</NavLink>
            </motion.div>
            <motion.div variants={linkVariants} onClick={() => setMenu(false)}>
              <NavLink to="/categories">Categories</NavLink>
            </motion.div>
            <motion.div variants={linkVariants} onClick={() => setMenu(false)}>
              <NavLink to="/contact">Contact us</NavLink>
            </motion.div>
            <motion.div variants={linkVariants} onClick={() => setMenu(false)}>
              <NavLink to="/account">Account</NavLink>
            </motion.div>
          </motion.li>
        </ul>
      )}
      <Outlet />
    </>
  );
}
