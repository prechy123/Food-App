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
  const handleOnClick = async () => {
    Cookies.remove("token");
  };
  return (
    <>
      <section id="saved-content">
        <div className="content-container">
          {foods.length > 0 &&
            foods.map((foodId) => <FoodCom key={uuid()} foodId={foodId} />)}
        </div>
        <a href="http://localhost:3000/account" onClick={handleOnClick}>
          Log-Out
        </a>
      </section>
      <FooterLayout />
    </>
  );
}
