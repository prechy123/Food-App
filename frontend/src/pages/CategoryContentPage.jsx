import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function CategoryContentPage() {
  const [theCategories, setTheCategories] = useState([]);
  const { cateName } = useParams();
  useState(() => {
    const fetchCategories = async () => {
      const response = await axios(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + cateName
      );
      console.log(response.data.meals);
      setTheCategories(response.data.meals);
    };
    fetchCategories();
  }, []);
  return (
    <>
      {theCategories && (
        <div className="component">
          {/* <a href={url}> */}
          {theCategories.map((theCategory) => (
            <div className="search-component">
              <div className="search-img-d">
                <div className="search-img">
                  <img
                    src={theCategory.strMealThumb}
                    alt={theCategory.strMeal}
                    width={100}
                  />
                </div>
                <h2>{theCategory.strMeal}</h2>
              </div>
            </div>
          ))}
          {/* </a> */}
        </div>
      )}
    </>
  );
}
