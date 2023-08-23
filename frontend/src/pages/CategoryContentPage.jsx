import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CategoryContentCom from "../components/CategoryContentCom";
import FooterLayout from "../layouts/FooterLayout"

export default function CategoryContentPage() {
  const [theCategories, setTheCategories] = useState([]);
  const { cateName } = useParams();
  useState(() => {
    const fetchCategories = async () => {
      const response = await axios(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + cateName
      );
      setTheCategories(response.data.meals);
    };
    fetchCategories();
  }, []);
  let index = 1
  return (
    <>
      {theCategories && (
        <>
        <section id="category-content">
          {theCategories.map((theCategory) => (
            <CategoryContentCom
              theCategory={theCategory}
              key={theCategory.idMeal}
              index={index++}
            />
          ))}
        </section>
        <FooterLayout />
        </>
      )}
    </>
  );
}
