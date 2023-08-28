import React, { useEffect, useState } from "react";
import axios from "axios";
import FooterLayout from "../layouts/FooterLayout";
import CategoryComponent from "../components/CategoryComponent";
import { motion } from "framer-motion";

const categoriesVariants = {
  initial: {
    x: "100vw",
  },
  animate: {
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      setCategories(response.data.categories);
    };
    fetchCategories();
  }, []);
  return (
    <>
      <section id="categories-page">
        <motion.div
          variants={categoriesVariants}
          initial="initial"
          animate="animate"
          exit={{ x: "-100vw", ease: "easeInOut"}}
        >
          {categories.map((category) => {
            return (
              <CategoryComponent
                key={category.idCategory}
                category={category}
              />
            );
          })}
        </motion.div>
      </section>
      <FooterLayout />
    </>
  );
}
