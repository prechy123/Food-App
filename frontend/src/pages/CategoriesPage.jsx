import React, { useEffect, useState } from "react";
import axios from "axios";
import FooterLayout from "../layouts/FooterLayout";
import CategoryComponent from "../components/CategoryComponent";

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      setCategories(response.data.categories);
    };
    fetchCategories();
  }, []);
  return (
    <>
      <section id="categories-page">
        <div>
        {categories.map((category) => {
          return (
            <CategoryComponent key={category.idCategory} category={category} />
          );
        })}
        </div>
      </section>
      <FooterLayout />
    </>
  );
}
