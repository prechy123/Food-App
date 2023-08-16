import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductComponent from "../components/ProductComponent";
import axios from "axios";
import FooterLayout from "../layouts/FooterLayout";

export default function ProductPage() {
  const [meal, setMeal] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchById = async () => {
      const response = await axios(
        "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id
      );
      setMeal(response.data.meals);
    };
    fetchById();
  }, [id]);
  return (
    <>
      <section id="product-page">
        {meal.length > 0 ? (
          <ProductComponent meal={meal[0]} />
        ) : (
          <h1>Loading....</h1>
        )}
      </section>
      <FooterLayout />
    </>
  );
}
