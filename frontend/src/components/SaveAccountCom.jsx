import axios from "axios";
import { useEffect, useState } from "react";

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
  console.log(foods)
  return (
    <div className="saved-content">
      {foods.length > 0 && foods.map((food) => <h1>{food}</h1>)}
    </div>
  );
}
