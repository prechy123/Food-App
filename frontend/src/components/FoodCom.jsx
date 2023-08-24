import axios from "axios";
import React, { useState } from "react";

export default function FoodCom({ foodId }) {
  const [food, setFood] = useState([]);
  useState(() => {
    const fetchFood = async () => {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + foodId
      );
      setFood(response.data.meals[0]);
    };
    fetchFood();
  }, []);
  console.log(food);
  return (
    <a href={`/product/${food.idMeal}`}>
    <div className="content-container-child">
      <h1>{food.strMeal}</h1>
      <p>{food.strCategory}</p>
      <div className="img"><img src={food.strMealThumb} alt={food.strMeal} /></div>
    </div>
    </a>
  );
}
