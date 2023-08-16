function MealCom({ meal }) {
  return (
    <div className="search-content">
      <h1>{meal.strMeal}</h1>
      <p>{meal.strInstructions}</p>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
    </div>
  );
}
export default MealCom;
