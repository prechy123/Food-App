function MealCom({ meal }) {
  return (
    <div>
      <h1>{meal.strMeal}</h1>
      <p>{meal.strInstructions}</p>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <iframe
        width="560"
        height="315"
        src={meal.strYoutube}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
}
export default MealCom;
