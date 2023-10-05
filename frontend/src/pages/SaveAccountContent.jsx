import axios from "axios";
import { useEffect, useState } from "react";
import FoodCom from "../components/FoodCom";
import { v4 as uuid } from "uuid";
import Cookies from "js-cookie";
import FooterLayout from "../layouts/FooterLayout";
import { motion } from "framer-motion";

const accountVariants = {
  initial: {
    x: "100vw",
  },
  animate: {
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

export default function SaveAccountCom({ tokenData }) {
  const [foods, setFoods] = useState([]);
  const tokenObject = JSON.parse(atob(tokenData.split(".")[1]));
  const { userId } = tokenObject;
  useEffect(() => {
    const foods = async () => {
      const response = await axios(
        "https://foodapp-api-41m2.onrender.com/getFoods",
        {
          params: {
            userId: userId,
          },
        }
      );
      setFoods(response.data.foods);
    };
    foods();
  }, [userId]);
  console.log(foods);
  const handleOnClickLogOut = () => {
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
        <motion.div
          className="content-container"
          variants={accountVariants}
          initial="initial"
          animate="animate"
          exit={{ x: "-100vw", ease: "easeInOut" }}
        >
          {foods.length > 0 &&
            foods.map((food) => (
              <FoodCom
                key={uuid()}
                foodId={food.stringValue}
                time={food.timeStampValue}
                deleteFood={deleteFood}
              />
            ))}
        </motion.div>
        <motion.div
          className="log-out"
          exit={{ x: "-100vw", ease: "easeInOut" }}
        >
          <a href="http://localhost:3000/account" onClick={handleOnClickLogOut}>
            <span></span>
            Log-Out
          </a>
        </motion.div>
      </section>
      <FooterLayout />
    </>
  );
}
