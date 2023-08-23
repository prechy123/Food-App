import React, { useState } from "react";

export default function CategoryContentPage() {
    const [theCategory, setTheCategory] = useState([])
    
  return (
    <>
    <div className="component">
      {theCategory ? (
        theCategory.meals ? (
          theCategory.meals.map((meal) => {
            return <MealCom meal={meal} key={meal.idMeal} />;
          })
        ) : (
          <h1>No such Category exist try sagain</h1>
        )
      ) : (
        ""
      )}
    </div>
    </>
  );
}
