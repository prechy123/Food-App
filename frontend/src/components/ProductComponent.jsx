import React from "react";
import Cookies from "js-cookie";
import axios from "axios";

export default function ProductComponent({ meal }) {
  const handleAddClick = async () => {
    const token = Cookies.get("token");

    const response = await axios.post("http://127.0.0.1:4000/add", {
      token: token,
      mealId: meal.idMeal,
    });
    console.log(response.data);
  };
  
  return (
    <div className="product-component">
      <div>
        <h1>{meal.strMeal}</h1>
        <em>{meal.strCategory}</em>
        <br></br>
        <em>{meal.strArea}</em>
        <p>{meal.strInstructions}</p>
        <button onClick={handleAddClick} className="save-food">Save Food</button>
      </div>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
    </div>
  );
}
