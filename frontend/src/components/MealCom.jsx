import Cookies from "js-cookie";
import axios from "axios";

function MealCom({ meal }) {
  const handleAddClick = async () => {
    const token = Cookies.get("token");

    const response = await axios.post("http://127.0.0.1:4000/add", {
      token: token,
      mealId: meal.idMeal,
    });

    console.log(response.data);
  };
  const url = "/product/" + meal.idMeal;
  return (
    <a href={url}>
      <div className="search-component">
        <div className="search-img-d">
          <div className="search-img">
            <img src={meal.strMealThumb} alt={meal.strMeal} width={100} />
          </div>
          <h2>{meal.strMeal}</h2>
          <button onClick={handleAddClick}>Save Food</button>
        </div>
      </div>
    </a>
  );
}
export default MealCom;
