import React from "react";
import { motion } from "framer-motion";

const componentVariants = {
  initial: {
    y: 200,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

export default function CategoryContentCom({ theCategory, index }) {
  const url = "/product/" + theCategory.idMeal;
  const layoutClass = index % 2 === 0 ? "even-layout" : "old-layout";
  return (
    <motion.a
      href={url}
      variants={componentVariants}
      initial="initial"
      whileInView="animate"
    >
      <div className={`content-img-d ${layoutClass}`}>
        <div className="content-img">
          <motion.img
            src={theCategory.strMealThumb}
            alt={theCategory.strMeal}
            width={400}
            whileHover={{
              boxShadow: "0px 0px 8px rgb(255, 255, 255)",
              transition: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 0.3
              }
            }}
          />
        </div>
        <div className="content-text">
          <h2>{theCategory.strMeal}</h2>
        </div>
      </div>
    </motion.a>
  );
}
