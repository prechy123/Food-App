import React from "react";
import { useEffect, useState } from "react";
import FoodForm from "../components/FoodForm";
import MealCom from "../components/MealCom";

export default function SearchPage() {
  const [food, setFood] = useState("");
  const [theMeals, setMeals] = useState();

  useEffect(() => {
    const fetchFood = async () => {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" + food
      );
      const json = await response.json();
      setMeals(json);
      console.log(json);
    };
    if (food.length > 0) {
      fetchFood();
    }
  }, [food]);

  return (
    <>
      <FoodForm setFood={setFood} />
      {theMeals
        ? theMeals.meals.map((meal) => {
            return (
              <ol>
                <li>
                  <MealCom meal={meal} key={meal.idMeal} />
                </li>
              </ol>
            );
          })
        : ""}
    </>
  );
}
