import React, { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

export default function ProductComponent({ meal }) {
  const [error, setError] = useState(false);
  const handleAddClick = async () => {
    const token = Cookies.get("token");
    try {
      const response = await axios.post("http://127.0.0.1:4000/add", {
        token: token,
        mealId: meal.idMeal,
      });
      console.log(response.data);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="product-component">
      <div>
        <h1>{meal.strMeal}</h1>
        <em>{meal.strCategory}</em>
        <br></br>
        <em>{meal.strArea}</em>
        <p>{meal.strInstructions}</p>
        <button onClick={handleAddClick} className="save-food">
          <span></span> Save Food
        </button>
        {error && (
          <h1 className="error">
            Login/signup to Account <a href="/account">Click here</a>
          </h1>
        )}
      </div>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
    </div>
  );
}
