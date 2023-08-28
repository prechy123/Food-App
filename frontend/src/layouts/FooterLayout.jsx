import React from "react";
import { motion } from "framer-motion";
import facebook from "../image/facebook.png";
import github from "../image/github.png";
import instagram from "../image/instagram.png";
import linkedin from "../image/linkedin.png";

const imgVariants = {
  initial: {
    x: "-100",
  },
  animate: {
    x: 0,
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
      <motion.div className="img" variants={imgVariants} initial="initial" animate="animate">
        <motion.img variants={imgVariants} src={facebook} alt="facebook" width={30} />
        <motion.img variants={imgVariants} src={github} alt="github" width={30} />
        <motion.img variants={imgVariants} src={instagram} alt="instagram" width={30} />
        <motion.img variants={imgVariants} src={linkedin} alt="linkedin" width={30} />
      </motion.div>
      <div>
        <p>Copyright {date}.</p>
      </div>
    </footer>
  );
}
