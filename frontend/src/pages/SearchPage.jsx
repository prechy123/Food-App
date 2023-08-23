import React from "react";
import { useEffect, useState } from "react";
import axios from "axios"
import FoodForm from "../components/FoodForm";
import MealCom from "../components/MealCom";
import FooterLayout from "../layouts/FooterLayout";

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
        <FoodForm setFood={setFood} />
        <div className="component">
          {theMeals
            ? theMeals.meals
              ? theMeals.meals.map((meal) => {
                  return <MealCom meal={meal} key={meal.idMeal} />;
                })
              : <h1>No such Food exist try sagain</h1>
            : ""}
        </div>
      </section>
      <FooterLayout />
    </>
  );
}
