import axios from "axios";
import React, { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import Cookies from "js-cookie";

export default function FoodCom({ foodId, time }) {
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

  const handleOnClickDelete = async (e) => {
    const token = Cookies.get("token");
    const userId = JSON.parse(atob(token.split(".")[1])).userId;
    const selectedFoodId = e.target.value;
    await axios.post("http://127.0.0.1:4000/delete", {
      selectedFoodId,
      userId
    });
  };
  return (
    <>
      <div className="content-container-child">
        <a href={`/product/${food.idMeal}`}>
          <div className="img">
            <img src={food.strMealThumb} alt={food.strMeal} />
          </div>
          <p>{food.strCategory}</p>
          <h1>{food.strMeal}</h1>
          <p>{formatDistanceToNow(new Date(time), { addSuffix: true })}</p>
        </a>
        <button onClick={handleOnClickDelete} value={foodId}>
          <span></span>Delete
        </button>
      </div>
    </>
  );
}
