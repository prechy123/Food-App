import React from "react";

export default function ProductComponent({ meal }) {
  return (
    <div className="product-component">
      <div>
        <h1>{meal.strMeal}</h1>
        <em>{meal.strCategory}</em>
        <br></br>
        <em>{meal.strArea}</em>
        <p>{meal.strInstructions}</p>
      </div>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
    </div>
  );
}
