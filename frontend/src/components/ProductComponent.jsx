import React, { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { motion } from "framer-motion";

const sectionVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};
const contentVariants = {
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

export default function ProductComponent({ meal }) {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const handleAddClick = async () => {
    const token = Cookies.get("token");
    try {
      const response = await axios.post(
        "https://foodapp-api-41m2.onrender.com/add",
        {
          token: token,
          mealId: meal.idMeal,
        }
      );
      const message = response.data.message;
      if (message === "account not found") {
        return setError(true);
      }
      setSuccess(true);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <motion.div
      className="product-component"
      variants={sectionVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div
        variants={contentVariants}
        exit={{ x: "-100vw", ease: "easeInOut" }}
      >
        <h1>{meal.strMeal}</h1>
        <em>{meal.strCategory}</em>
        <br></br>
        <em>{meal.strArea}</em>
        <p>{meal.strInstructions}</p>
        <button onClick={handleAddClick} className="save-food">
          <span></span> Save Food
        </button>
        {success && (
          <h1 className="success">
            Added Successfully 👍 <a href="/account">View now</a>
          </h1>
        )}
        {error && (
          <h1 className="error">
            Login/signup to Account <a href="/account">Click here</a>
          </h1>
        )}
      </motion.div>
      <motion.img
        className="mealimg"
        variants={contentVariants}
        src={meal.strMealThumb}
        width={500}
        alt={meal.strMeal}
        exit={{ x: "-100vw", ease: "easeInOut" }}
      />
    </motion.div>
  );
}
