
function MealCom({ meal }) {
  const url = "/product/" + meal.idMeal;
  return (
    <a href={url}>
      <div className="search-component">
        <div className="search-img-d">
          <div className="search-img">
            <img src={meal.strMealThumb} alt={meal.strMeal} width={100} />
          </div>
          <h2>{meal.strMeal}</h2>
        </div>
      </div>
    </a>
  );
}
export default MealCom;
