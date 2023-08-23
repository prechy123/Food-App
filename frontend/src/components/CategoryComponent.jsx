import React from "react";

export default function categoryComponent({ category }) {
  const url = "/categories/" + category.strCategory;
  return (
    <a href={url}>
      <div className="category-component">
        <div>
          <img
            src={category.strCategoryThumb}
            alt={category.strCategory}  
            className="theImg"
          />
        </div>
        <div>
          <h1>{category.strCategory}</h1>
          <p>{category.strCategoryDescription}</p>
        </div>
      </div>
    </a>
  );
}
