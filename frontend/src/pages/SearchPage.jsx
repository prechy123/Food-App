import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import FoodForm from "../components/FoodForm";
import MealCom from "../components/MealCom";
import FooterLayout from "../layouts/FooterLayout";
import { motion } from "framer-motion";

const sectionVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};
const searchVariants = {
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

export default function SearchPage() {
  const [food, setFood] = useState("");
  const [theMeals, setMeals] = useState();

  useEffect(() => {
    const fetchFood = async () => {
      const response = await axios(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" + food
      );
      setMeals(response.data);
    };
    if (food.length > 0) {
      fetchFood();
    }
  }, [food]);

  return (
    <>
      <section id="search-page">
        <motion.div
          variants={sectionVariants}
          initial="initial"
          animate="animate"
        >
          <FoodForm setFood={setFood} searchVariants={searchVariants} />
          <motion.div
            className="component"
            variants={searchVariants}
            exit={{ x: "-100vw", ease: "easeInOut" }}
          >
            {theMeals ? (
              theMeals.meals ? (
                theMeals.meals.map((meal) => {
                  return <MealCom meal={meal} key={meal.idMeal} />;
                })
              ) : (
                <h1>No such Food exist try again</h1>
              )
            ) : (
              ""
            )}
          </motion.div>
        </motion.div>
      </section>
      <FooterLayout />
    </>
  );
}
