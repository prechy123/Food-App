import React from "react";
import { motion } from "framer-motion";

const anchorVariant = {
  initial: {
    x: 200,
    opacity: 0,
  },
  inView: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1
    }
  },
};

export default function categoryComponent({ category }) {
  const url = "/categories/" + category.strCategory;
  return (
    <a href={url}>
      <motion.div
        className="category-component"
        variants={anchorVariant}
        initial="initial"
        whileInView="inView"
      >
        <div>
          <img
            src={category.strCategoryThumb}
            alt={category.strCategory}
            className="theImg"
          />
        </div>
        <div>
          <h1>{category.strCategory}</h1>
          <p>{category.strCategoryDescription}</p>
        </div>
      </motion.div>
    </a>
  );
}
