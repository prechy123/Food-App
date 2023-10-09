import React from "react";
import { motion } from "framer-motion";
import facebook from "../image/facebook.png";
import github from "../image/github.png";
import instagram from "../image/instagram.png";
import linkedin from "../image/linkedin.png";

const divVariants = {
  initial: {
    x: "-100",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};
const imgVariants = {
  initial: {
    x: "-100",
    opacity: 0,
    rotate: -360,
  },
  animate: {
    x: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

export default function FooterLayout() {
  const date = new Date().getFullYear();
  return (
    <footer>
      <motion.div
        className="img"
        variants={divVariants}
        initial="initial"
        animate="animate"
      >
        <a href="https://www.instagram.com/prec__hy/"><motion.img
          variants={imgVariants}
          src={facebook}
          alt="facebook"
          width={30}
        /></a>
        <a href="https://github.com/prechy123"><motion.img
          variants={imgVariants}
          src={github}
          alt="github"
          width={30}
        /></a>
        <a href="https://www.instagram.com/prec__hy/"><motion.img
          variants={imgVariants}
          src={instagram}
          alt="instagram"
          width={30}
        /></a>
        <a href="https://www.instagram.com/prec__hy/"><motion.img
          variants={imgVariants}
          src={linkedin}
          alt="linkedin"
          width={30}
        /></a>
      </motion.div>
      <div>
        {/* <p>Copyright {date}.</p> */}
        <p>Bamidele Precious - {date}</p>
      </div>
    </footer>
  );
}
