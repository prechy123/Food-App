import axios from "axios";
import { useEffect, useState } from "react";
import FoodCom from "../components/FoodCom";
import { v4 as uuid } from "uuid";
import Cookies from "js-cookie";
import FooterLayout from "../layouts/FooterLayout";

export default function SaveAccountCom({ tokenData }) {
  const [foods, setFoods] = useState([]);
  const tokenObject = JSON.parse(atob(tokenData.split(".")[1]));
  const { userId } = tokenObject;
  useEffect(() => {
    const foods = async () => {
      const response = await axios("http://127.0.0.1:4000/getFoods", {
        params: {
          userId: userId,
        },
      });
      setFoods(response.data.foods);
    };
    foods();
  }, [userId]);
  console.log(foods);
  const handleOnClick = () => {
    Cookies.remove("token");
  };
  const deleteFood = (selectedFoodId) => {
    selectedFoodId = parseInt(selectedFoodId);

    const filteredFood = foods.filter((food) => {
      return food.stringValue !== selectedFoodId;
    });
    setFoods(filteredFood);
  };
  return (
    <>
      <section id="saved-content">
        <div className="content-container">
          {foods.length > 0 &&
            foods.map((food) => (
              <FoodCom
                key={uuid()}
                foodId={food.stringValue}
                time={food.timeStampValue}
                deleteFood={deleteFood}
              />
            ))}
        </div>
        <div className="log-out">
          <a href="http://localhost:3000/account" onClick={handleOnClick}>
            <span></span>
            Log-Out
          </a>
        </div>
      </section>
      <FooterLayout />
    </>
  );
}
