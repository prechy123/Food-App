import React from "react";

export default function CategoryContentCom({ theCategory }) {
  const url = "/product/" + theCategory.idMeal;
  return (
    <a href={url}>
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
    </a>
  );
}
