import React from "react";

export default function CategoryContentCom({ theCategory, index }) {
  const url = "/product/" + theCategory.idMeal;
  const layoutClass = index % 2 === 0 ? "even-layout" : "old-layout";
  return (
    <a href={url}>
      <div className={`content-img-d ${layoutClass}`}>
        <div className="content-img">
          <img
            src={theCategory.strMealThumb}
            alt={theCategory.strMeal}
            width={500}
          />
        </div>
        <div className="content-text">
          <h2>{theCategory.strMeal}</h2>
        </div>
      </div>
    </a>
  );
}
