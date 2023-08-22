import React from "react";

export default function CategoryContentPage() {
    
  return (
    <div className="component">
      {theCateory ? (
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
  );
}
